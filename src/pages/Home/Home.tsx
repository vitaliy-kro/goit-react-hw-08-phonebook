import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { WelcomeMessage } from 'components/WelcomeMessage';
import { LastAddedContacts } from 'components/LastAddedContacts';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { useAppDispatch } from 'redux/store';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetch = dispatch(fetchContacts());

    return () => {
      fetch.abort();
    };
  }, [dispatch]);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <WelcomeMessage />
      {isLoggedIn && contacts.length > 0 && <LastAddedContacts />}
    </Container>
  );
};

export default Home;
