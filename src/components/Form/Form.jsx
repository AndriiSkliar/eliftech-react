import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { registerValidationSchema } from './registerValidationSchema';
// import css from './Forms.module.css';

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
        // validationSchema={registerValidationSchema}
      >
        {() => (
          <Form>
            <ul>
              <li>
                <Field type='text' name='name' id="name" />
                <label htmlFor="name">Full name</label>
                <ErrorMessage name="name" component="p"/>
              </li>
              <li>
                <Field type='email' name='email' id="email" />
                <label htmlFor="email">Email</label>
                <ErrorMessage name="email" component="p"/>
              </li>
              <li>
                <Field type='date' name='birthday' id="birthday" />
                <label htmlFor="birthday">Date of birth</label>
                <ErrorMessage name="birthday" component="p"/>
              </li>
              <li>
                  <ul>
                      <li>
                          <label>
                              <Field type="radio" name="eventFeedback" value="social media" />
                              Social media
                          </label>
                          <ErrorMessage name="eventFeedback" component="p" />
                      </li>
                      <li>
                          <label>
                              <Field type="radio" name="eventFeedback" value="friends" />
                              Friends
                          </label>
                          <ErrorMessage name="eventFeedback" component="p" />
                      </li>
                      <li>
                          <label>
                              <Field type="radio" name="eventFeedback" value="found myself" />
                              Found myself
                          </label>
                          <ErrorMessage name="eventFeedback" component="p" />
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
                <ErrorMessage name="eventId" component="p"/>
              </li>
            </ul>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};