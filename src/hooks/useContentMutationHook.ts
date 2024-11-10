import { useQueryClient, useMutation } from '@tanstack/react-query';
import { write } from '@/api/write';

export const useContentMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: createContent } = useMutation({
    mutationFn: write,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['write'] }),
    retry: 1,
  });

  return { createContent };
};
