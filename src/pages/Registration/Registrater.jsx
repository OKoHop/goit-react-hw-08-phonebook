import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { StyledForm, StyledLabel } from './Register.styled';
import { Toaster } from 'react-hot-toast';

export const Register = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(register(values));
        }}
      >
        <StyledForm>
          <StyledLabel>
            UserName
            <Field name="name" />
          </StyledLabel>
          <StyledLabel>
            Email
            <Field type="email" name="email" />
          </StyledLabel>
          <StyledLabel>
            Password
            <Field type="password" name="password" />
          </StyledLabel>
          <button type="submit">Register</button>
          <Toaster />
        </StyledForm>
      </Formik>
    </main>
  );
};
