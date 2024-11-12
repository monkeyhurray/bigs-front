import axios from 'axios';

const intercept = axios.create({
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

intercept.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    if (error.response.request.status === 401) {
      try {
        await refreshAccessToken();
      } catch (error) {
        console.error(error);
      }
    }
  }
);

intercept.interceptors.request.use(
  async (res) => {
    return res;
  },
  async (error) => {
    console.error(error);
  }
);

const postCreateWrite = async (content: {
  title: string;
  content: string;
  category: string;
  file: File | null;
}) => {
  await intercept.post('/boards', {
    request: {
      title: content.title,
      content: content.content,
      category: content.category,
    },
    file: content.file,
  });
};

const patchAuditwirte = async (
  id: number,
  content: {
    title: string;
    content: string;
    category: string;
  }
) => {
  await intercept.patch(`/boards/${id}`, content);
};

const deletePost = async (id: number) => {
  await intercept.delete(`/boards/${id}`);
};

const getArticleById = async (id: number) => {
  const { data } = await intercept.get(`/boards${id}`);

  return data;
};

const getArticleList = async ({ page = 1, size = 10 }) => {
  try {
    const { data } = await intercept.get(
      `/boards?page=${page - 1}&size=${size}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

const communityCategory = async () => {
  const { data } = await intercept.get(`/boards/categories`);

  return data;
};

export {
  postCreateWrite,
  patchAuditwirte,
  deletePost,
  getArticleById,
  getArticleList,
  communityCategory,
};
