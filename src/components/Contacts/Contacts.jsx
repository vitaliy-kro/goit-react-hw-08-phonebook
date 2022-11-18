import { ContactsItem, Button } from './Contacts.styled';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilterStatus, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterStatus);

  const dispatch = useDispatch();
  const contactsToMarkup = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(filterValue);
  });

  return (
    <Box>
      {contactsToMarkup.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          {name}: {number}
          <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </ContactsItem>
      ))}
    </Box>
  );
};
