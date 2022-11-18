import { Section } from './Section';
import { Box } from './Box';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Box p="4">
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </Box>
  );
};
