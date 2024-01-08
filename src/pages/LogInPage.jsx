import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
} from '@chakra-ui/react';
import { loginUser } from '../redux/operations';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginUser(formData));
  };

  return (
    <VStack spacing={4} align="center">
      <Heading>Please log in:</Heading>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <VStack spacing={4} align="start">
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              name="userEmail"
              placeholder="Enter your email"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              name="userPassword"
              minLength={7}
              placeholder="Enter your password"
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Log In
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default LogInPage;
