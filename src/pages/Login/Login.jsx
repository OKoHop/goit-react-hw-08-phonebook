import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { StyledForm } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, action) => {
          console.log(values);
          dispatch(logIn(values));
          action.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Email
            <Field type="email" name="email" placeholder="Enter email" />
          </label>
          <label>
            Password
            <Field name="password" placeholder="Enter password" />
          </label>
          <button type="submit">LogIn</button>
        </StyledForm>
      </Formik>
    </main>
  );
};
