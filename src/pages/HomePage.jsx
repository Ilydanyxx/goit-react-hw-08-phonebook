import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box textAlign="center" mt="8">
      <Heading fontSize="4xl" mb="4">
        Welcome to our Phonebook!
      </Heading>
      <Text>Please log in to continue.</Text>
    </Box>
  );
};

export default HomePage;
