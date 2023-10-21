import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const NavLoginIn = () => {
  return (
    <>
      <nav>
        <Box display="flex">
          <NavLink to="/register">
            <Button
              type="button"
              mr={2}
              colorScheme="blue"
              variant="solid"
              border="1px"
              borderColor="var(--chakra-colors-white)"
            >
              Register
            </Button>
          </NavLink>

          <NavLink to="/login">
            <Button
              type="button"
              colorScheme="blue"
              variant="solid"
              border="1px"
              borderColor="var(--chakra-colors-white)"
            >
              Log In
            </Button>
          </NavLink>
        </Box>
      </nav>
    </>
  );
};
