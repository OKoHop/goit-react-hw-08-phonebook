import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  StyledButton,
  StyledLabel,
  StyledField,
} from 'components/AddContact/AddContact.styled';
import { addContact } from 'redux/phonebook/operations';

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().min(10, 'Too Short!').required('Required'),
});

export const AddContact = () => {
  const dispatch = useDispatch();
  const nameContacts = useSelector(state => state.contacts.contacts);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          if (
            nameContacts.find(
              contact =>
                contact.name.toLowerCase() === values.name.toLowerCase()
            )
          ) {
            console.log(`err`);
            return alert(`${values.name} is already in contact!`);
          }
          dispatch(addContact(values));
          actions.resetForm();
        }}
        validationSchema={addContactSchema}
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField name="name" placeholder="Enter name" />
            <ErrorMessage name="name" />
          </StyledLabel>
          <StyledLabel>
            Phone
            <StyledField name="number" placeholder="0631234567" />
            <ErrorMessage name="number" />
          </StyledLabel>
          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </>
  );
};
