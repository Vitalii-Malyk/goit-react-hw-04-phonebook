import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import CreateListContact from 'components/CreateListContact/CreateListContact';
import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';

import bgImage from 'helper/image/telefon-bgc.jpg';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    } else {
      setFilter('');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('LokalContacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    repeatControl(data);
  };

  const repeatControl = newContact => {
    let nameArr = [];
    nameArr = contacts.map(el => el.name);
    if (!nameArr.includes(newContact.name)) {
      let newArrContacts = [
        ...contacts,
        { id: newContact.id, name: newContact.name, number: newContact.number },
      ];
      return setContacts(...contacts, newArrContacts);
    } else {
      Notify.info('The contact is already in the phone book!', {
        position: 'center-center',
        timeout: '1500',
      });
    }
  };

  const deleteContactFromList = idContact => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== idContact)
    );
  };

  const filterContacts = value => {
    return setFilter(value.toLowerCase());
  };

  const filterChange = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterChange();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 24,
        color: 'antiquewhite',
        flexDirection: 'column',
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'unset',
        backgroundPosition: 'center center',
      }}
    >
      <h1>Phonebook</h1>
      <FormCreateContact onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <FilterContacts filterContacts={filterContacts} />
      <CreateListContact
        contact={filteredContacts}
        deleted={deleteContactFromList}
      />
    </div>
  );
};

export default App;
