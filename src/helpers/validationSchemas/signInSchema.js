import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  username: Yup.string()
    .required('Name is required')
    .min(4, 'Name is too short - should be 4 chars minimum'),
  email: Yup.string()
    .email('Email must be a valid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(4, 'Password is too short - should be 4 chars minimum'),
});
