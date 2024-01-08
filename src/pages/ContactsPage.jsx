import React from 'react';
import {
  Box,
  Heading,
  Text,
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import {
  selectUserError,
  selectUserIsLoading,
} from '../redux/selectors';

const ContactsPage = () => {
  const error = useSelector(selectUserError);
  const isLoading = useSelector(selectUserIsLoading);

  return (
    <Box p="4" maxW="600px" mx="auto">
      <ContactForm />

      <Heading fontSize="xl" mt="4">
        Contacts
      </Heading>
      <Filter />

      {error !== null && (
        <Text color="red.500" mt="2">
          Oops, an error has occurred...
        </Text>
      )}
      {isLoading && (
        <Spinner size="lg" color="teal.500" mt="2" />
      )}
      <ContactList />
    </Box>
  );
};

export default ContactsPage;
