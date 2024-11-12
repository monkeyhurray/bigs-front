import { Dispatch, SetStateAction } from 'react';
import { SignUpUserType, LogInUserType } from './signUserType';
import { UseFormRegister, FieldError } from 'react-hook-form';

export interface LoginFormType {
  signFn: () => void;
  setLoginUser: Dispatch<SetStateAction<LogInUserType>>;
  selectLabel: string;
}

export interface SignUpFormType {
  signFn: () => void;
  setSignUpUser: Dispatch<SetStateAction<SignUpUserType>>;
  selectLabel: string;
}

export interface InputType {
  register: UseFormRegister<SignUpUserType>;
  username?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
  type: string;
  errors?: FieldError;
  placeholder?: string;
}

export interface ButtonType {
  signFn: () => void;
}
