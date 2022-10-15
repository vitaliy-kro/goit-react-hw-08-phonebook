import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm, Label, Input, Button } from './Phonebook.styled';
export const Phonebook = ({ addContact }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const id = nanoid();

    addContact({ name, number, id });
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <ContactForm>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Add the name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Add the number"
          required
        ></Input>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

Phonebook.propTypes = {
  addContact: PropTypes.func.isRequired,
};
