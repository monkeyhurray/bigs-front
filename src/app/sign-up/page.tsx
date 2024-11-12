'use client';
import React, { useState } from 'react';
import { useSignMutation } from '@/hooks/useSignMutationHook';
import SignUpForm from '@/components/Form/SignUpForm';

const SignUpPage = () => {
  const { signUp } = useSignMutation();
  const [signUpUser, setSignUpUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const signUpFn = () =>
    signUp({
      username: signUpUser.username,
      name: signUpUser.name,
      password: signUpUser.password,
      confirmPassword: signUpUser.confirmPassword,
    });

  return (
    <>
      <SignUpForm
        setSignUpUser={setSignUpUser}
        signFn={signUpFn}
        selectLabel="회원가입"
      />
    </>
  );
};

export default SignUpPage;
