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
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    console.log(data);
    return repeatControl(data);
  };

  const repeatControl = newContact => {
    console.log(newContact);
    let nameArr = [];
    nameArr = contacts.map(el => el.name);
    console.log(nameArr);
    if (!nameArr.includes(newContact.name)) {
      let newArrContacts = [
        ...contacts,
        { id: newContact.id, name: newContact.name, number: newContact.number },
      ];
      return setContacts({ ...contacts, newArrContacts });
    } else {
      Notify.info('The contact is already in the phone book!', {
        position: 'center-center',
        timeout: '1500',
      });
    }
  };

  const elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  const deleteContactFromList = idContact => {
    let newArrAfterDel = elementDelete(contacts, idContact);
    setContacts({ ...contacts, ...newArrAfterDel });
  };

  const filterContacts = value => {
    console.log(value);
    return setFilter(`${value.toLowerCase()}`);
  };

  const filterChange = data => {
    let newArr = data.filter(el => el.name.toLowerCase().includes(filter));
    console.log(newArr);
    return newArr;
  };

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
        contact={filterChange(contacts)}
        deleted={deleteContactFromList}
      />
    </div>
  );
};

export default App;
