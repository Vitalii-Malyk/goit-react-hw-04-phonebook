import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  FormElementStyle,
  InputElementStyle,
  ButtonElementStyle,
} from 'components/Forms/FormCreateContact.styled';

const FormCreateContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');

  let nameInputId = nanoid();
  let telInputId = nanoid();

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
      setId(nanoid());
    }
    if (name === 'number') {
      setNumber(value);
      setId(nanoid());
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const сreateСontact = e => {
    e.preventDefault();
    resetForm();
    return onSubmit({ name, number, id });
  };

  return (
    <FormElementStyle onSubmit={сreateСontact}>
      <label htmlFor={nameInputId}>Name</label>
      <InputElementStyle
        onChange={handleChange}
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        required
      />
      <label htmlFor={telInputId}>Number</label>
      <InputElementStyle
        type="tel"
        id={telInputId}
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        value={number}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></InputElementStyle>
      <ButtonElementStyle type="submit">Add contact</ButtonElementStyle>
    </FormElementStyle>
  );
};

export default FormCreateContact;
