import { useQuery } from '@tanstack/react-query';
import {
  getArticleList,
  getArticleById,
  getCommunityCategory,
} from '@/api/writeApi';

export const useGetArticleList = () => {
  const {
    data: articleList,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getArticleList({ page: 1, size: 10 }),
    queryKey: ['write'],
    retry: 1,
  });

  return { articleList, isLoading, isError };
};

export const useGetDetailArticle = (id: number) => {
  const {
    data: articleDetail,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getArticleById(id),
    queryKey: ['category', id],
    retry: 1,
  });

  return { articleDetail, isLoading, isError };
};

export const useGetArticleCategory = () => {
  const {
    data: articleCategory,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getCommunityCategory,
    queryKey: ['category'],
    retry: 1,
  });

  return { articleCategory, isLoading, isError };
};