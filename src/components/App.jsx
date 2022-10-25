import { useState, useEffect } from 'react';
import { Section } from './Section';
import { Box } from './Box';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { getItemsFromLocalStorage, setItemsToLocalStorage } from './helpers';
import { Loader } from './Loader';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const itemsInLocalStorageCheck = getItemsFromLocalStorage().length > 0;
    if (itemsInLocalStorageCheck) {
      setContacts(getItemsFromLocalStorage());
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setItemsToLocalStorage(contacts);
  }, [contacts]);

  const handleAddContact = obj => {
    const previouslyAddedCheck = contacts.find(e => {
      return e.name.toLowerCase() === obj.name.toLowerCase();
    });
    if (previouslyAddedCheck) {
      return alert(`${previouslyAddedCheck.name} is already in contacts`);
    }

    setContacts(prev => [...prev, obj]);
  };
  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(e => e.id !== id));
  };

  const changeFilter = ({ target }) => setFilter(target.value);

  const visibleNumbers = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  const getVisibleContacts = visibleNumbers();
  return (
    <Box p="4">
      <Section title="Phonebook">
        <Phonebook addContact={handleAddContact}></Phonebook>
      </Section>
      <Section title="Contacts">
        <Filter filter={changeFilter}></Filter>
        <Contacts
          markup={getVisibleContacts}
          deleteContact={handleDeleteContact}
        ></Contacts>
        {isLoading && <Loader></Loader>}
      </Section>
    </Box>
  );
};
