export interface SignUserType {
  username: string;
  password: string;
  name?: string;
  confirmPassword?: string;
}

export interface SignUserInintialType {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;

  setSignUserData: ({
    username,
    name,
    password,
    confirmPassword,
  }: SignUserType) => void;
}

export type RegisterContentType =
  | 'username'
  | 'name'
  | 'password'
  | 'confirmPassword';
