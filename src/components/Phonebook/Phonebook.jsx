import { useFormik } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { addContactSchema } from 'helpers/validationSchemas';
import { notificationExcistContact } from 'helpers/notification';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: addContactSchema,
    onSubmit: ({ name, number }, { resetForm }) => {
      const previouslyAddedCheck = contacts.find(contact => {
        return contact.name.toLowerCase() === name.toLowerCase();
      });
      if (previouslyAddedCheck)
        return notificationExcistContact(previouslyAddedCheck.name);

      dispatch(addContact({ name, number }));
      resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  const nameError = formik.errors.name;
  const numberError = formik.errors.number;
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', alignItems: 'baseline' }}
      noValidate
    >
      <TextField
        error={Boolean(nameError)}
        helperText={nameError}
        type="text"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        variant="standard"
        required
      />
      <TextField
        type="tel"
        error={Boolean(numberError)}
        helperText={numberError}
        sx={{ ml: 2 }}
        variant="standard"
        label="Number"
        name="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        required
      />
      <Button type="submit" sx={{ ml: 2, px: 2 }}>
        Add contact
      </Button>
    </Box>
  );
};
