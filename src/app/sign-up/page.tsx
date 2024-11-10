'use client';
import React from 'react';
import Sign from '@/components/Sign';

import { useSign } from '@/hooks/useSignMutationHook';
import { useSignUser } from '@/store/signStore';

const SignUpPage = () => {
  const { join } = useSign();
  const { username, name, password, confirmPassword } = useSignUser();

  const signUpFn = () =>
    join({
      username,
      name,
      password,
      confirmPassword,
    });

  return (
    <>
      <Sign signFn={signUpFn} selectLabel="회원가입" />
    </>
  );
};

export default SignUpPage;
