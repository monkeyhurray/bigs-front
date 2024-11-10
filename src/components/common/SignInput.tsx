import React from 'react';
import { InputType } from '@/types/commonTypes';
import { RegisterContentType } from '@/types/signUserType';
import styles from '@/styles/components/SignForm.module.scss';
const SignInput = ({
  register,
  name,
  username,
  password,
  confirmPassword,
  type,
  placeholder,
  errors,
}: InputType) => {
  const registerContent = username || name || password || confirmPassword;

  return (
    <>
      <input
        className={styles['form-input']}
        {...register(registerContent as RegisterContentType)}
        type={type}
        placeholder={placeholder}
      />
      {errors?.message && (
        <p>
          <span>{errors.message}</span>
        </p>
      )}
    </>
  );
};

export default SignInput;
