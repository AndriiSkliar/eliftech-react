import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerValidationSchema, today } from './registerValidationSchema';
import css from './Form.module.css';

export const RegisterForm = ({setFormData, events, isLoading}) => {
  const handleSubmit = values => {
    const event = events.find(event => event._id === values.eventId).title;
    setFormData({...values, event}); 
  };


  return (
    <>
      <Formik
        initialValues={{
          name: '', 
          email: '',
          birthday: '',
          eventFeedback: 'social media',
          eventId: events.length > 0 ? events[0]._id : '',
        }}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
      >
        {({ values }) => (
          <Form className={css.form}>
            <ul className={css.formList}>
              <li className={css.formItem}>
                <Field className={css.formInput} type='text' name='name' id="name" placeholder='Enter your full name'/>
                <label className={css.formLabel} htmlFor="name">Full name</label>
                <ErrorMessage className={css.errorMessage} name="name" component="div"/>
              </li>
              <li className={css.formItem}>
                <Field className={css.formInput} type='email' name='email' id="email" placeholder='Enter your email'/>
                <label className={css.formLabel} htmlFor="email">Email</label>
                <ErrorMessage  className={css.errorMessage} name="email" component="div"/>
              </li>
              <li className={css.formItem}>
                <Field className={`${css.formInputDate} ${values.birthday ? css.filled : ''}`} type='date' name='birthday' id="birthday" placeholder='Select your birth date' max={today}/>
                <label className={css.formLabelDate} htmlFor="birthday">Date of birth</label>
                <ErrorMessage  className={css.errorMessage} name="birthday" component="div"/>
              </li>
              <li>
                <p className={css.formText}>Where did you hear about this event?</p>
                <ul className={css.formFeedbackList}>
                    <li>
                        <label className={css.formFeedbackLabel}>
                            <Field type="radio" name="eventFeedback" value="social media" />
                            Social media
                        </label>
                        <ErrorMessage  className={css.errorMessage} name="eventFeedback" component="div" />
                    </li>
                    <li>
                        <label className={css.formFeedbackLabel}>
                            <Field type="radio" name="eventFeedback" value="friends" />
                            Friends
                        </label>
                        <ErrorMessage  className={css.errorMessage} name="eventFeedback" component="div" />
                    </li>
                    <li>
                        <label className={css.formFeedbackLabel}>
                            <Field type="radio" name="eventFeedback" value="found myself" />
                            Found myself
                        </label>
                        <ErrorMessage  className={css.errorMessage} name="eventFeedback" component="div" />
                    </li>
                </ul>
              </li>
              <li className={css.formEventItem}>
                <label htmlFor="eventId">Change event</label>
                <Field className={css.formEventInput} as="select" id="eventId" name="eventId">
                  {events.map(({title, _id}) => (
                    <option key={_id} value={_id}>
                      {title}
                    </option>
                  ))}
                </Field>
                <ErrorMessage  className={css.errorMessage} name="eventId" component="div"/>
              </li>
            </ul>
            <button className={css.formBtn} type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};