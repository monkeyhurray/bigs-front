import axios from 'axios';

const postSignIn = async (loginUser: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signin`,
      loginUser
    );
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    console.log('로그인 성공');
  } catch (error) {
    console.error(error);
  }
};

const postSignUp = async (signUpUser: {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signup`,
      signUpUser
    );
  } catch (error) {
    console.error(error);
  }
};

export { postSignIn, postSignUp };
