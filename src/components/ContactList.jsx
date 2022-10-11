import React from 'react';
import Contact from './Contact.js';

const contactInfo = [
  {
    name: 'Emmanuel',
    email: 'emmanuel@email.com',
    phone: '552312354',
    isDeletable: true,
  },
  {
    name: 'Johana',
    email: 'johana@email.com',
    phone: '92034902',
    isDeletable: false,
  },
  {
    name: 'Johana',
    email: 'johana@email.com',
    phone: '92034902',
    isDeletable: false,
  },
  {
    name: 'Lucas',
    email: 'lucas@email.com',
    phone: '234983499',
    isDeletable: true,
  },
  {
    name: 'Marie',
    email: 'marie@email.com',
    phone: '238942384',
    isDeletable: false,
  },
  {
    name: 'Pedro',
    email: 'pedro@email.com',
    phone: '934584875',
    isDeletable: true,
  },
];

const ContactList = () => {
  return (
    <div>
      {contactInfo.map((el, index) => (
        <Contact
          key={index}
          name={el.name}
          phone={el.phone}
          email={el.email}
          isDeletable={el.isDeletable}
        />
      ))}
    </div>
  );
};

export default ContactList;
