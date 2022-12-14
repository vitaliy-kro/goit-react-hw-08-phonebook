import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Section } from 'components/Section';
import { Phonebook } from 'components/Phonebook';
import { ContactsInfo } from 'components/ContactsInfo';
import { Filter } from 'components/Filter';
import { ContactsInfoLoader } from 'components/Loader';
import { useAppDispatch } from 'redux/store';

const Contacts = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const fetch = dispatch(fetchContacts());

    return () => {
      fetch.abort();
    };
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        {(isLoading && !error && <ContactsInfoLoader />) ||
          (!error && <ContactsInfo />)}
      </Section>
    </Container>
  );
};

export default Contacts;
