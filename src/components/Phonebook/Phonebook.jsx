import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { ContactForm, Label, Input, Button } from './Phonebook.styled';
export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const previouslyAddedCheck = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (previouslyAddedCheck) {
      return alert(`${previouslyAddedCheck.name} is already in contacts`);
    }
    dispatch(addContact({ name, phone }));

    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
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

        <Label htmlFor="phone">Number</Label>
        <Input
          type="tel"
          name="phone"
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
