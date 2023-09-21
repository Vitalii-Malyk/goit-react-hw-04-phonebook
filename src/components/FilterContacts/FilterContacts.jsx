import React from 'react';
import { nanoid } from 'nanoid';

import {
  WrapElementStyle,
  InputElementStyle,
} from 'components/FilterContacts/FilterContacts.styled';

const FilterContacts = ({ value, handleChange }) => {
  let nameInputId = nanoid();

  return (
    <WrapElementStyle>
      <label htmlFor={nameInputId}>Filter contacts:</label>
      <InputElementStyle
        onChange={handleChange}
        id={nameInputId}
        type="text"
        name="name"
        value={value}
      />
    </WrapElementStyle>
  );
};

export default FilterContacts;
