import { nanoid } from 'nanoid';

import {
  ListElementStyle,
  ItemElementStyle,
  ButtonElementStyle,
} from 'components/CreateListContact/CreateListContact.styled';

const CreateListContact = ({ contact, deleted }) => {
  const deleteId = Id => {
    deleted(Id);
  };

  const createContactItem = () => {
    return contact.map(contact => {
      return (
        <ItemElementStyle key={nanoid()}>
          {`${contact.name} : ${contact.number}`}
          <ButtonElementStyle
            data-id={contact.id}
            onClick={() => deleteId(contact.id)}
          >
            x
          </ButtonElementStyle>
        </ItemElementStyle>
      );
    });
  };
  return <ListElementStyle>{createContactItem()}</ListElementStyle>;
};

export default CreateListContact;
