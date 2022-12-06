import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { WelcomeMessage } from 'components/WelcomeMessage';
import { LastAddedContacts } from 'components/LastAddedContacts';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectContacts } from 'redux/contacts/selectors';
const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = dispatch(fetchContacts());

    return () => {
      fetch.abort();
    };
  }, [dispatch]);

  return (
    <Container
      maxWidth="l"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <WelcomeMessage />
      {isLoggedIn && contacts.length > 0 && <LastAddedContacts />}
    </Container>
  );
};

export default Home;
