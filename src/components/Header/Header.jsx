import { Box, Spacer } from '@chakra-ui/react';
import { NavLoginIn } from 'components/NavLoginIn/NavLoginIn';
import { NavStatic } from 'components/NavStatic/NavStatic';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="var(--chakra-colors-blue-500)"
        p={15}
        h={20}
      >
        <NavStatic />
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <NavLoginIn />}
      </Box>
    </>
  );
};
