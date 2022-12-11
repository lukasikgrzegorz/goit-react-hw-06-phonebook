import React from 'react';
import Contact from './Contact/Contact';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactList = props => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleDelete = e => dispatch(deleteContact(e.target.id));

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Contact key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button id={contact.id} onClick={handleDelete}>
              Delete
            </button>
          </Contact>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;
