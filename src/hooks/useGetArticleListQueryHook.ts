import { useQuery } from '@tanstack/react-query';
import { getArticleList } from '@/api/write';

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
