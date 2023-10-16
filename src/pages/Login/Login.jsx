import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        console.log(values);
        dispatch(logIn(values));
      }}
    >
      <Form>
        <label>
          Email
          <Field type="email" name="email" placeholder="Enter email" />
        </label>
        <label>
          Password
          <Field name="password" placeholder="Enter password" />
        </label>
        <button type="submit">LogIn</button>
      </Form>
    </Formik>
  );
};
