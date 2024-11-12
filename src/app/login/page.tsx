'use client';

import React, { useState } from 'react';

import { useSignMutation } from '@/hooks/useSignMutationHook';

import LoginForm from '@/components/Form/LoginForm';
const LoginPage = () => {
  const { signin } = useSignMutation();

  const [loginUser, setLoginUser] = useState({
    username: '',
    password: '',
  });

  const loginFn = () => {
    signin({
      username: loginUser.username,
      password: loginUser.password,
    });
  };

  return (
    <main>
      <LoginForm
        setLoginUser={setLoginUser}
        signFn={loginFn}
        selectLabel="로그인"
      />
    </main>
  );
};

export default LoginPage;
