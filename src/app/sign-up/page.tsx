'use client';
import React from 'react';
import { useSignMutation } from '@/hooks/useSignMutationHook';
import { useSignUser } from '@/store/signStore';
import SignUpForm from '@/components/Form/SignUpForm';

const SignUpPage = () => {
  const { signUp } = useSignMutation();
  const { username, name, password, confirmPassword } = useSignUser();

  const signUpFn = () =>
    signUp({
      username,
      name,
      password,
      confirmPassword,
    });

  return (
    <>
      <SignUpForm signFn={signUpFn} selectLabel="회원가입" />
    </>
  );
};

export default SignUpPage;
