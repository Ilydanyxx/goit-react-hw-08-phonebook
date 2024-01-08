import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/operations';
import {
  Input,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.number);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleEditMode = () => {
    setIsEditMode((prevState) => !prevState);

    if (isEditMode) {
      const editedContact = {
        name: name.trim(),
        number: phone.trim(),
        id: contact.id,
      };
      dispatch(editContact(editedContact));
    }
  };

  return (
    <Flex align="center" justify="space-between" mb={2}>
      {isEditMode ? (
        <Flex align="center">
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            mr={2}
          />
          <Input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
            mr={2}
          />
        </Flex>
      ) : (
        <Text>{`${contact.name}: ${contact.number}`}</Text>
      )}
      <Flex>
        <Button onClick={handleEditMode} mr={2}>
          {isEditMode ? 'Save' : 'Edit'}
        </Button>
        <Button onClick={() => dispatch(deleteContact(contact.id))}>
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};
