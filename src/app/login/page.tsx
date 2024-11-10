'use client';

import Sign from '@/components/Sign';
import React, { useEffect } from 'react';

import { useSign } from '@/hooks/useSignMutationHook';
import { useSignUser } from '@/store/signStore';
const LoginPage = () => {
  const { login } = useSign();
  const { username, password } = useSignUser();

  useEffect(() => {
    console.log(username, password); // 상태 값이 바뀐 후에 로그 출력
  }, [username, password]);

  const loginFn = () => {
    console.log('loginFn called');
    login({
      username,
      password,
    });
  };

  return (
    <main>
      <Sign signFn={loginFn} selectLabel="로그인" />
    </main>
  );
};

export default LoginPage;
