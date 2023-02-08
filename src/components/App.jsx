import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts') ?? [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = event => {
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts([
      ...contacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = () =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = event => {
    setContacts(contacts.filter(item => item.id !== event.target.id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: 32,
        }}
      >
        Phonebook
      </h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2
        style={{
          margin: 0,
          fontSize: 24,
        }}
      >
        Contacts
      </h2>
      <Filter onChange={handleChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
