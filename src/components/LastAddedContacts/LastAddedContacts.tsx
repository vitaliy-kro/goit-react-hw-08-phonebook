import { useSelector } from 'react-redux';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import { selectContacts } from 'redux/contacts/selectors';

export const LastAddedContacts = () => {
  const contacts = useSelector(selectContacts);
  const lastContacts = contacts.slice(-3);

  return (
    <Paper elevation={3} sx={{ p: 1, mt: 2 }}>
      <Typography variant="body1" component="h3">
        Last added contacts
      </Typography>
      <List>
        {lastContacts.map(({ id, name, number }) => (
          <ListItem sx={{ display: 'flex', alignItems: 'center' }} key={id}>
            <ListItemIcon sx={{ minWidth: 0 }}>
              <PhoneIcon />
            </ListItemIcon>

            <ListItemText sx={{ ml: 1 }}>{`${name}: ${number}`}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Link
        to="/contacts"
        component={RouterLink}
        variant="body2"
        sx={{ display: 'block', textAlign: 'end', ml: 'auto' }}
      >
        Show more...
      </Link>
    </Paper>
  );
};
