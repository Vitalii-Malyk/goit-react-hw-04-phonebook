import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  WrapElementStyle,
  InputElementStyle,
} from 'components/FilterContacts/FilterContacts.styled';

const FilterContacts = ({ filterContacts }) => {
  const [filter, setFilter] = useState('');

  const handleChange = ({ target: { value } }) => {
    setFilter({ value });
    return filterContacts(value);
  };

  let nameInputId = nanoid();

  return (
    <WrapElementStyle>
      <label htmlFor={nameInputId}>Filter contacts:</label>
      <InputElementStyle
        onChange={handleChange}
        id={nameInputId}
        type="text"
        name="name"
        value={filter}
      />
    </WrapElementStyle>
  );
};

export default FilterContacts;
