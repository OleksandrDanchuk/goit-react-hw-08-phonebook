import { Box, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const NavStatic = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav>
        <Box display="flex">
          <NavLink to="/">
            <Text mr={2} fontSize="xl" color="var(--chakra-colors-white)">
              Home
            </Text>
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts">
              <Text fontSize="xl" color="var(--chakra-colors-white)">
                Contacts
              </Text>
            </NavLink>
          )}
        </Box>
      </nav>
    </>
  );
};
