'use client';

import { useRouter } from 'next/navigation';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { postSignIn, postSignUp } from '@/api/signApi';

export const useSignMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signin } = useMutation({
    mutationFn: postSignIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['login'] });
      router.push('/');
    },
  });

  const { mutate: signUp } = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['join'] });
      router.push('/login');
    },
  });

  return { signin, signUp };
};
