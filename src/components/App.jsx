import { Component } from 'react';
import { Section } from './Section';
import { Box } from './Box';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = obj => {
    const previouslyAddedCheck = this.state.contacts.find(e => {
      return e.name.toLowerCase() === obj.name.toLowerCase();
    });
    if (previouslyAddedCheck)
      return alert(`${previouslyAddedCheck.name} is already in contacts`);
    this.setState(prev => {
      return { contacts: [...prev.contacts, obj] };
    });
  };
  handleDeleteContact = id => {
    this.setState(prev => {
      return { contacts: prev.contacts.filter(e => e.id !== id) };
    });
  };
  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  visibleNumbers = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const getVisibleContacts = this.visibleNumbers();
    return (
      <Box>
        <Section title="Phonebook">
          <Phonebook addContact={this.handleAddContact}></Phonebook>
        </Section>
        <Section title="Contacts">
          <Filter filter={this.changeFilter}></Filter>
          <Contacts
            markup={getVisibleContacts}
            deleteContact={this.handleDeleteContact}
          ></Contacts>
        </Section>
      </Box>
    );
  }
}
