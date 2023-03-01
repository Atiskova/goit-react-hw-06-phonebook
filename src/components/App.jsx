import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container } from './App.Stuled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length !== 0 && <Filter />}
        <ContactList />
        {contacts.length === 0 && <p>There are no contacts yet.</p>}
      </Section>
    </Container>
  );
};
