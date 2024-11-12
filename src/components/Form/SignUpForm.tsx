import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@/components/common/Button';
import styles from '@/styles/components/SignForm.module.scss';
import { signUpSchema } from '@/lib/userSchema';

import type { SignUpFormType } from '@/types/commonTypes';
import type { SignUpUserType } from '@/types/signUserType';

const SignUpForm = ({ setSignUpUser, signFn, selectLabel }: SignUpFormType) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpUserType>({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema),
  });

  const { username, password, name, confirmPassword } = watch();

  useEffect(() => {
    setSignUpUser({ username, name, password, confirmPassword });
  }, [username, name, password, confirmPassword, setSignUpUser]);

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
          {...register('name')}
          type="text"
          placeholder={'이름을 입력해 주세요.'}
        />
        {errors.name?.message && (
          <p>
            <span>{errors.name.message}</span>
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
        <input
          className={styles['form-input']}
          {...register('confirmPassword')}
          type="password"
          placeholder={'비밀번호를 입력해 주세요.'}
        />
        {errors.confirmPassword?.message && (
          <p>
            <span>{errors.confirmPassword.message}</span>
          </p>
        )}

        <Button label={selectLabel} />
      </form>
    </>
  );
};

export default SignUpForm;
