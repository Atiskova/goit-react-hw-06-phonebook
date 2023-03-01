import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Button, ListItem } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/slice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        {visibleContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}
              <Button type="button" onClick={() => deleteContacts(contact.id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </ul>
      {contacts.length !== 0 && visibleContacts.length === 0 && (
        <p>Contact wasn't found.</p>
      )}
    </>
  );
};

export default ContactList;
