import * as Yup from 'yup';

export const today = new Date().toISOString().split('T')[0];

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Full name is required')
    .min(3, 'Name must be at least 3 characters long')
    .max(20, 'The name must be no more than 20 characters long')
    .matches(/[A-Za-z]+/, 'Name must contain at least one letter')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
  email: Yup.string()
    .required('Email is required')
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Emails: digits, letters, . - _ only, e.g., example@mail.com.'
    )
    .email('Invalid email format, example@example.com'),
  birthday: Yup.date()
    .required('Birthday is required')
    .max(today, `Maximum value should be ${today}`),
  eventFeedback: Yup.string()
    .required('Event feedback is required')
    .oneOf(
      ['social media', 'friends', 'found myself'],
      'Invalid feedback option'
    ),
  eventId: Yup.string()
    .required('Event is required')
    .min(1, 'Event must not be empty'),
});
