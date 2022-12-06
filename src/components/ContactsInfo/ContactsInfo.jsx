import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactItem } from './ContactItem';
import { selectFilterStatus } from 'redux/contacts/selectors';

export const ContactsInfo = () => {
  const contacts = useSelector(selectVisibleContacts);
  const filterStatus = useSelector(selectFilterStatus);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
      {!contacts.length && filterStatus.trim() && (
        <Typography component="p" sx={{ mt: 1, color: 'red' }}>
          There is no contacts with name {filterStatus}
        </Typography>
      )}
    </ul>
  );
};
