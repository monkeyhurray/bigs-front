import { create } from 'zustand';
import { SignUserType, SignUserInintialType } from '@/types/signUserType';

//로그인 회원가입에 필요한 사용자의 입력값 저장
const sinUserinitialData: SignUserInintialType = {
  username: '',
  name: '',
  password: '',
  confirmPassword: '',
  setSignUserData: () => {},
};

export const useSignUser = create<SignUserInintialType>((set) => ({
  ...sinUserinitialData,
  setSignUserData: (userData: SignUserType) => set({ ...userData }),
}));
