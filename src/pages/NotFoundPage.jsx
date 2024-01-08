import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import { HOME_ROUTE } from '../config/routes';

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt="8">
      <Heading fontSize="4xl" mb="4">
        Error 404
      </Heading>
      <Text mb="4">The page you are looking for does not exist.</Text>
      <ChakraLink as={Link} to={HOME_ROUTE} color="teal.500">
        Go back to Home
      </ChakraLink>
    </Box>
  );
};

export default NotFoundPage;
