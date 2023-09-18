import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  ListElementStyle,
  ItemElementStyle,
  ButtonElementStyle,
} from 'components/CreateListContact/CreateListContact.styled';

class CreateListContact extends Component {
  deleteId = Id => {
    this.props.deleted(Id);
  };

  createContactItem = () => {
    return this.props.contact.map(contact => {
      return (
        <ItemElementStyle key={nanoid()}>
          {`${contact.name} : ${contact.number}`}
          <ButtonElementStyle
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            x
          </ButtonElementStyle>
        </ItemElementStyle>
      );
    });
  };

  render() {
    return <ListElementStyle>{this.createContactItem()}</ListElementStyle>;
  }
}

export default CreateListContact;
