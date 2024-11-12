import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@/components/common/Button';
import styles from '@/styles/components/SignForm.module.scss';
import { loginSchema } from '@/lib/userSchema';

import type { LoginFormType } from '@/types/commonTypes';
import type { LogInUserType } from '@/types/signUserType';

const LoginForm = ({ signFn, setLoginUser, selectLabel }: LoginFormType) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LogInUserType>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const { username, password } = watch();

  useEffect(() => {
    setLoginUser({ username, password });
  }, [username, password, setLoginUser]);

  return (
    <>
      <form className={styles['form']} onSubmit={handleSubmit(signFn)}>
        <h1 className={styles['form-title']}>{selectLabel}</h1>

        <input
          className={styles['form-input']}
          {...register('username')}
          type="text"
          placeholder={'이메일을 입력해 주세요.'}
        />
        {errors.username?.message && (
          <p>
            <span>{errors.username.message}</span>
          </p>
        )}

        <input
          className={styles['form-input']}
          {...register('password')}
          type="password"
          placeholder={'비밀번호를 입력해 주세요.'}
        />
        {errors.password?.message && (
          <p>
            <span>{errors.password.message}</span>
          </p>
        )}

        <Button label={selectLabel} />
      </form>
    </>
  );
};

export default LoginForm;
