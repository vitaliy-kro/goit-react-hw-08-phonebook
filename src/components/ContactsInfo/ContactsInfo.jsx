import { Typography, Box, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsInfo = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        const handleDelete = () => dispatch(deleteContact(id));
        return (
          <Box
            component="li"
            sx={{ display: 'flex', alignItems: 'center' }}
            key={id}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PhoneIcon />
              <Typography component="p" variant="h6" sx={{ ml: 1 }}>
                {name}:
              </Typography>
              <Typography component="p" sx={{ ml: 1 }}>
                {number}
              </Typography>
            </Box>

            <Button sx={{ color: 'red', ml: 1 }} onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        );
      })}
    </ul>
  );
};
