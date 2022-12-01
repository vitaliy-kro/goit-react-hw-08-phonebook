import { useFormik } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: ({ name, number }, { resetForm }) => {
      const previouslyAddedCheck = contacts.find(contact => {
        return contact.name.toLowerCase() === name.toLowerCase();
      });
      if (previouslyAddedCheck) {
        return alert(`${previouslyAddedCheck.name} is already in contacts`);
      }
      dispatch(addContact({ name, number }));

      resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', alignItems: 'baseline' }}
    >
      <TextField
        type="text"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        variant="standard"
        required
      />
      <TextField
        type="tel"
        sx={{ ml: 2 }}
        variant="standard"
        label="Number"
        name="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
      />
      <Button type="submit" sx={{ ml: 2, px: 2 }}>
        Add contact
      </Button>
    </Box>
  );
};
