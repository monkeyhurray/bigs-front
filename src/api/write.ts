import axios from 'axios';

const axi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
});

const refreshAccessToken = async () => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refresh`,
    { refreshToken: localStorage.getItem('refreshToken') }
  );

  localStorage.setItem('accessToken', response.data.accessToken);
  localStorage.setItem('refreshToken', response.data.refreshToken);
};

axi.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err) => {
    if (err.response.request.status === 401) {
      try {
        await refreshAccessToken();
      } catch (err) {
        console.log(err);
      }
    }
  }
);

axi.interceptors.request.use(
  async (res) => {
    return res;
  },
  async (err) => {
    console.log(err);
  }
);

const write = async (content: {
  title: string;
  content: string;
  category: string;
  file: File | null;
}) => {
  console.log(content);
  await axi.post('/boards', {
    request: {
      title: content.title,
      content: content.content,
      category: content.category,
    },
    file: content.file,
  });
};

const wirteAudit = async (
  id: number,
  content: {
    title: string;
    content: string;
    category: string;
  }
) => {
  await axi.patch(`/boards/${id}`, content);
};

const writeDelete = async (id: number) => {
  await axi.delete(`/boards/${id}`);
};

const articleCheck = async () => {
  const { data } = await axi.get(`/boards`);

  return data;
};

const articleListCheck = async () => {
  try {
    const { data } = await axi.get(`/boards?page=1&size=1`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

const communityCategory = async () => {
  const { data } = await axi.get(`/boards/categories`);

  return data;
};

export {
  write,
  wirteAudit,
  writeDelete,
  articleCheck,
  articleListCheck,
  communityCategory,
};
