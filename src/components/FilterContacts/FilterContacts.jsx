import React, { Component } from 'react';

import {
  WrapElementStyle,
  InputElementStyle,
} from 'components/FilterContacts/FilterContacts.styled';

class FilterContacts extends Component {
  state = {
    filter: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value });
    this.props.filterContacts(value);
  };

  render() {
    return (
      <WrapElementStyle>
        <label htmlFor={this.nameInputId}>Filter contacts:</label>
        <InputElementStyle
          onChange={this.handleChange}
          id={this.nameInputId}
          type="text"
          name="name"
          value={this.state.filter}
        />
      </WrapElementStyle>
    );
  }
}

export default FilterContacts;
