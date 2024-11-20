import axios from 'axios';

interface SignInUserType {
  username: string;
  password: string;
}

interface SignUpUserType {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const postSignIn = async (loginUser: SignInUserType) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/signin`,
      loginUser
    );
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
  } catch (error) {
    console.error(error);
  }
};

const postSignUp = async (signUpUser: SignUpUserType) => {
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
