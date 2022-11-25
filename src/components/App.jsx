import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Section } from './Section';
import { Box } from './Box';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p="4">
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />

        {(isLoading && !error && <Loader />) || (!error && <Contacts />)}
      </Section>
    </Box>
  );
};
