import { Component } from 'react';
import { Section } from './Section';
import { Box } from './Box';
import { Phonebook } from './Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { getItemsFromLocalStorage, setItemsToLocalStorage } from './helpers';
import { Loader } from './Loader';
export class App extends Component {
  state = {
    contacts: [],
    isLoading: false,
    filter: '',
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    if (getItemsFromLocalStorage())
      this.setState({ contacts: getItemsFromLocalStorage() });
    this.setState({ isLoading: false });
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts.length !== contacts.length) {
      setItemsToLocalStorage(contacts);
    }
  }
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
      <Box p="4">
        <Section title="Phonebook">
          <Phonebook addContact={this.handleAddContact}></Phonebook>
        </Section>
        <Section title="Contacts">
          <Filter filter={this.changeFilter}></Filter>
          <Contacts
            markup={getVisibleContacts}
            deleteContact={this.handleDeleteContact}
          ></Contacts>
          {this.state.isLoading && <Loader></Loader>}
        </Section>
      </Box>
    );
  }
}
