import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import CreateListContact from 'components/CreateListContact/CreateListContact';
import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';

import bgImage from 'helper/image/telefon-bgc.jpg';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    } else {
      this.setState({ filters: '' });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    this.repeatControl(data);
  };

  repeatControl = newContact => {
    let nameArr = [];
    nameArr = this.state.contacts.map(el => el.name);
    if (!nameArr.includes(newContact.name)) {
      let newArrContacts = [
        ...this.state.contacts,
        { id: newContact.id, name: newContact.name, number: newContact.number },
      ];
      return this.setState({ ...this.state, contacts: newArrContacts });
    } else {
      Notify.info('The contact is already in the phone book!', {
        position: 'center-center',
        timeout: '1500',
      });
    }
  };

  elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  deleteContactFromList = idContact => {
    let newArrAfterDel = this.elementDelete(this.state.contacts, idContact);
    this.setState({
      ...this.state,
      contacts: [...newArrAfterDel],
    });
  };

  filterContacts = value => {
    this.setState({ ...this.state, filter: `${value.toLowerCase()}` });
  };

  filterChange = data => {
    console.log(data);
    let newArr = data.filter(el =>
      el.name.toLowerCase().includes(this.state.filter)
    );
    return newArr;
  };

  render() {
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
        <FormCreateContact onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <FilterContacts filterContacts={this.filterContacts} />
        <CreateListContact
          contact={this.filterChange(this.state.contacts)}
          deleted={this.deleteContactFromList}
        />
      </div>
    );
  }
}
