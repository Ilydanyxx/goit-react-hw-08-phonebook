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
import { signupUser } from '../redux/operations';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(signupUser(formData));
  };

  return (
    <VStack spacing={4} align="center">
      <Heading>Please sign up:</Heading>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <VStack spacing={4} align="start">
          <FormControl>
            <FormLabel>Username:</FormLabel>
            <Input
              type="text"
              name="userName"
              placeholder="Enter your name"
              required
            />
          </FormControl>
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
            Sign Up
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default SignUpPage;
