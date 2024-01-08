import { Audio } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ChakraProvider, CSSReset, Box, Flex, Text, Button } from '@chakra-ui/react';
import { Suspense, lazy, useEffect } from 'react';
import { logoutUser, refreshUser } from './redux/operations';
import {
  selectUserAuthentication,
  selectUserData,
} from './redux/selectors';
import {
  CONTACTS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  appRoutes,
} from 'config/routes';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectUserAuthentication);
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">
            Phonebook App
          </Text>
          <Flex>
            <NavLink to={HOME_ROUTE} activeClassName='active-link' className='link'>Home</NavLink>
            {authenticated ? (
              <>
                <NavLink to={CONTACTS_ROUTE} activeClassName='active-link' className='link'>Phonebook</NavLink>
                <Text ml={4}>Hello, {userData.name}</Text>
                <Button ml={4} onClick={handleLogout} className='link'>Log Out</Button>
              </>
            ) : (
              <>
                <NavLink to={SIGNUP_ROUTE} activeClassName='active-link' className='link'>Sign Up</NavLink>
                <NavLink to={LOGIN_ROUTE} activeClassName='active-link' className='link'>Log In</NavLink>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
      <hr />
      <Box p={4}>
        <Suspense
          fallback={
            <Audio height="80" width="80" color="grey" ariaLabel="loading" />
          }
        >
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route path={path} element={element} key={path} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Box>
    </ChakraProvider>
  );
}
