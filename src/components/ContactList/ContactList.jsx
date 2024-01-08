import React, { useEffect } from 'react';
import {
  Box,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { selectFilteredContacts } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mt={4}>
      {contacts.length === 0 ? (
        <Text>No contacts found.</Text>
      ) : (
        <UnorderedList listStyleType="none" p={0}>
          {contacts.map((contact) => (
            <ListItem key={contact.id} mb={2}>
              <ContactListItem contact={contact} />
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
}
