import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { selectFilteredContacts } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box mt={4}>
      <UnorderedList listStyleType="none" p={0}>
        {contacts.map((contact) => (
          <ListItem key={contact.id} mb={2}>
            <ContactListItem contact={contact} />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
