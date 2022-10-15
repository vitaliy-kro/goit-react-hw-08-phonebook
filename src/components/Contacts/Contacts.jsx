import PropTypes from 'prop-types';
import { ContactsItem, Button } from './Contacts.styled';
import { Box } from 'components/Box';

export const Contacts = ({ markup, deleteContact }) => {
  return (
    <Box>
      {markup.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          {name}: {number}
          <Button onClick={() => deleteContact(id)}>Delete</Button>
        </ContactsItem>
      ))}
    </Box>
  );
};

Contacts.propTypes = {
  markup: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  deleteContact: PropTypes.func.isRequired,
};
