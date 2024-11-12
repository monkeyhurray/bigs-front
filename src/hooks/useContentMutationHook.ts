import { useQueryClient, useMutation } from '@tanstack/react-query';
import { postCreateWrite } from '@/api/write';

export const useCreateContentMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: createContent } = useMutation({
    mutationFn: postCreateWrite,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['write'] }),
    retry: 1,
  });

  return { createContent };
};
