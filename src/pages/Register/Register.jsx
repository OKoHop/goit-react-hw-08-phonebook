import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

export const Register = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          UserName
          <Field name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
