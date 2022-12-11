import React, { useEffect, useState, useRef } from 'react';
import css from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const isMounted = useRef(false);

  const KEY = 'Contacts';

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(KEY));
    savedContacts && setContacts([...savedContacts]);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(KEY, JSON.stringify(contacts));
    } else {
      isMounted.current = true;
    }
  }, [contacts]);

  return (
    <div className={css['container']}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
