import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { logIn } from 'redux/auth/authOperations';
import { StyledBtn, StyledForm, StyledLabel } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, action) => {
          console.log(values);
          dispatch(logIn(values));
        }}
      >
        <StyledForm>
          <StyledLabel>
            Email
            <Field type="email" name="email" placeholder="Enter email" />
          </StyledLabel>
          <StyledLabel>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </StyledLabel>
          <StyledBtn type="submit">LogIn</StyledBtn>
          <Toaster />
        </StyledForm>
      </Formik>
    </main>
  );
};
