import { ContactsItem, Button } from './Contacts.styled';
import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Box>
      {contacts.map(({ id, name, phone }) => {
        const handleDelete = () => dispatch(deleteContact(id));
        return (
          <ContactsItem key={id}>
            {name}: {phone}
            <Button onClick={handleDelete}>Delete</Button>
          </ContactsItem>
        );
      })}
    </Box>
  );
};
