import * as yup from 'yup';

const loginSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required('아이디를 입력해 주세요.')
      .matches(/^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*$/, {
        message: '이메일을 작성해 주세요.',
      }),

    password: yup
      .string()
      .required('비밀번호를 입력해 주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]+$/,
        {
          message: '영어, 숫자, 특수 문자를 사용해 주세요.',
        }
      )
      .min(8, '길이가 너무 짧습니다.'),
  })
  .required();

const signUpSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required('아이디를 입력해 주세요.')
      .matches(/^[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*$/, {
        message: '이메일을 작성해 주세요.',
      }),
    name: yup
      .string()
      .required('닉네임을 입력해 주세요.')
      .matches(/^[ㄱ-ㅎ가-힣]+$/, {
        message: '이름을 적어 주세요.',
      }),
    password: yup
      .string()
      .required('비밀번호를 입력해 주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]+$/,
        {
          message: '영어, 숫자, 특수 문자를 사용해 주세요.',
        }
      )
      .min(8, '길이가 너무 짧습니다.'),
    confirmPassword: yup
      .string()
      .required('비밀번호를 입력해 주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~@#$!%*?&])[a-zA-Z\d~@#$!%*?&]+$/,
        {
          message: '영어, 숫자, 특수 문자를 사용해 주세요.',
        }
      )
      .min(8, '길이가 너무 짧습니다.'),
  })
  .required();
export { loginSchema, signUpSchema };
