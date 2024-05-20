import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerValidationSchema } from './registerValidationSchema';
import css from './Form.module.css';

export const RegisterForm = ({setFormData, events}) => {
  const handleSubmit = values => {
    const event = events.find(event => event._id === values.eventId).title;
    setFormData({...values, event}); 
  };

  return (
    <div>
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
        {() => (
          <Form>
            <ul>
              <li>
                <Field type='text' name='name' id="name" />
                <label htmlFor="name">Full name</label>
                <ErrorMessage className={css.errorMessage} name="name" component="div"/>
              </li>
              <li>
                <Field type='email' name='email' id="email" />
                <label htmlFor="email">Email</label>
                <ErrorMessage  className={css.errorMessage} name="email" component="div"/>
              </li>
              <li>
                <Field type='date' name='birthday' id="birthday" />
                <label htmlFor="birthday">Date of birth</label>
                <ErrorMessage  className={css.errorMessage} name="birthday" component="div"/>
              </li>
              <li>
                  <ul>
                      <li>
                          <label>
                              <Field type="radio" name="eventFeedback" value="social media" />
                              Social media
                          </label>
                          <ErrorMessage  className={css.errorMessage} name="eventFeedback" component="div" />
                      </li>
                      <li>
                          <label>
                              <Field type="radio" name="eventFeedback" value="friends" />
                              Friends
                          </label>
                          <ErrorMessage  className={css.errorMessage} name="eventFeedback" component="div" />
                      </li>
                      <li>
                          <label>
                              <Field type="radio" name="eventFeedback" value="found myself" />
                              Found myself
                          </label>
                          <ErrorMessage  className={css.errorMessage} name="eventFeedback" component="div" />
                      </li>
                  </ul>
              </li>
              <li>
                <Field as="select" id="eventId" name="eventId">
                  {events.map(({title, _id}) => (
                    <option key={_id} value={_id}>
                      {title}
                    </option>
                  ))}
                </Field>
                <label htmlFor="eventId">Change event</label>
                <ErrorMessage  className={css.errorMessage} name="eventId" component="div"/>
              </li>
            </ul>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};