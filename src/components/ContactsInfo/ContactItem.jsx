import { Typography, Box, Button, TextField } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useState } from 'react';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { addPhoneSchema } from 'helpers/validationSchemas/addContactValidation';

export const ContactItem = ({ id, name, number }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name, number },
    validationSchema: addPhoneSchema,
    onSubmit: ({ name, number }, { resetForm }) => {
      dispatch(editContact({ id, name, number }));
      setIsEdit(false);
      resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  const nameError = formik.errors.name;
  const numberError = formik.errors.number;
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Box
      component="li"
      sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
      key={id}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PhoneIcon />
        {isEdit ? (
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
              value={formik.values.name}
              onChange={formik.handleChange}
              variant="standard"
              size="small"
              required
            />
            :
            <TextField
              type="tel"
              name="number"
              error={Boolean(numberError)}
              helperText={numberError}
              sx={{ ml: 1 }}
              value={formik.values.number}
              onChange={formik.handleChange}
              variant="standard"
              size="small"
              required
            />
            <Button
              sx={{ ml: 1 }}
              type="submit"
              onClick={() => setIsEdit(true)}
            >
              Confirm
            </Button>
            <Button
              type="button"
              sx={{ color: 'red' }}
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </Button>
          </Box>
        ) : (
          <>
            <Typography component="p" variant="p" sx={{ ml: 1 }}>
              {name}:
            </Typography>
            <Typography component="p" sx={{ ml: 1 }}>
              {number}
            </Typography>
            <Button sx={{ ml: 1 }} onClick={() => setIsEdit(true)}>
              Edit
            </Button>
            <Button sx={{ color: 'red' }} onClick={handleDelete}>
              Delete
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};
