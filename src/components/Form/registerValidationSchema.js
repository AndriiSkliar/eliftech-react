import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full name is required')
    .matches(/[A-Za-z]+/, 'Name must contain at least one letter')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Emails: digits, letters, . - _ only, e.g., example@mail.com.'
    )
    .email('Invalid email format, example@example.com'),
});
