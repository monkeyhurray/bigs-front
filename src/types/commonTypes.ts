import { SignUserType } from './signUserType';
import { UseFormRegister, FieldError } from 'react-hook-form';

export interface SignFormType {
  signFn: () => void;
  selectLabel: string;
}

export interface InputType {
  register: UseFormRegister<SignUserType>;
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
