import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const editContactSchema = Yup.object().shape({
  name: Yup.string().required("Name can't be empty").min(4),
  number: Yup.string()
    .required("Phone number can't be empty")
    .matches(phoneRegExp, 'Phone number is not valid'),
});
