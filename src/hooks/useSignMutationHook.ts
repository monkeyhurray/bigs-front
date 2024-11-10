import { useQueryClient, useMutation } from '@tanstack/react-query';
import { signIn, signUp } from '@/api/signApi';

export const useSign = () => {
  const queryClient = useQueryClient();

  const { mutate: login } = useMutation({
    mutationFn: signIn,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['login'] }),
  });

  const { mutate: join } = useMutation({
    mutationFn: signUp,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['join'] }),
  });

  return { login, join };
};
