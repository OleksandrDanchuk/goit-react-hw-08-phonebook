import { Avatar, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/operationsAuth';
import { selectUserName } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  return (
    <>
      <Avatar mr={2} boxSize={7} />
      <Text mr={2} fontSize="xl" color="var(--chakra-colors-white)">
        {userName}
      </Text>
      <Button
        type="button"
        onClick={() => dispatch(logout()).then(() => navigate('/'))}
        colorScheme="blue"
        variant="solid"
        border="1px"
        borderColor="var(--chakra-colors-white)"
      >
        Logout
      </Button>
    </>
  );
};
