import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SignInput from '@/components/common/SignInput';
import Button from '@/components/common/Button';
import styles from '@/styles/components/SignForm.module.scss';
import { schema } from '@/lib/userSchema';
import { useSignUser } from '@/store/signStore';

import type { SignFormType } from '@/types/commonTypes';
import type { SignUserType } from '@/types/signUserType';

const LoginForm = ({ signFn, selectLabel }: SignFormType) => {
  const { setSignUserData } = useSignUser();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { username, password } = watch();

  useEffect(() => {
    setSignUserData({ username, password });
  }, [username, password, setSignUserData]);

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit(signFn)}>
        <h1 className={styles['form-title']}>{selectLabel}</h1>
        <SignInput
          register={register}
          username="username"
          type="text"
          placeholder="이메일 입력"
          errors={errors.username}
        />

        <SignInput
          register={register}
          password="password"
          type="password"
          placeholder="비밀번호 입력"
          errors={errors.password}
        />
        <Button label={selectLabel} />
      </form>
    </>
  );
};

export default LoginForm;
