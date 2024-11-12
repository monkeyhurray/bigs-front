'use client';

import React from 'react';
import { useSignMutation } from '@/hooks/useSignMutationHook';
import { useSignUser } from '@/store/signStore';
import LoginForm from '@/components/Form/LoginForm';
const LoginPage = () => {
  const { signin } = useSignMutation();
  const { username, password } = useSignUser();

  const loginFn = () => {
    signin({
      username,
      password,
    });
  };

  return (
    <main>
      <LoginForm signFn={loginFn} selectLabel="로그인" />
    </main>
  );
};

export default LoginPage;
