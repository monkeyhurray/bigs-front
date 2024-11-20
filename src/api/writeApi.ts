import axios from 'axios';
import { ContentType } from '@/types/contentType';

const intercept = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
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
    console.log(error);
    if (error.response.status === 401) {
      try {
        await refreshAccessToken();
      } catch (error) {
        console.error(error);
      }
    }
  }
);

intercept.interceptors.request.use(
  (req) => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        req.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    }
    return req;
  },
  (error) => {
    console.error(error);
  }
);

const postCreateWrite = async (content: ContentType) => {
  try {
    await intercept.post('/boards', {
      request: {
        title: content.title,
        content: content.content,
        category: content.category,
      },
      file: content.file,
    });
  } catch (error) {
    console.error(error);
  }
};

const patchAuditwirte = async (payload: {
  id: number;
  title: string;
  content: string;
  category: string;
}) => {
  await intercept.patch(`/boards/${payload.id}`, { content: payload.content });
};

const deletePost = async ({ id }: { id: number }) => {
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

const getCommunityCategory = async () => {
  const { data } = await intercept.get(`/boards/categories`);

  return data;
};

export {
  postCreateWrite,
  patchAuditwirte,
  deletePost,
  getArticleById,
  getArticleList,
  getCommunityCategory,
};
