import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { Container } from '@mui/material';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Section } from 'components/Section';
import { ContactsLoader } from 'components/Loader';
import { Phonebook } from 'components/Phonebook';
import { ContactsInfo } from 'components/ContactsInfo';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="l">
      <Suspense fallback={<ContactsLoader />}>
        <Section title="Phonebook">
          <Phonebook />
        </Section>
        <Section title="Contacts">
          <Filter />
          {(isLoading && !error && <Loader />) || (!error && <ContactsInfo />)}
        </Section>
      </Suspense>
    </Container>
  );
};

export default Contacts;
