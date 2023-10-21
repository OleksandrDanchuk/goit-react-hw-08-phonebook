import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  Center,
  Heading,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const RegisterUser = () => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);
  // console.log(newUser);

  const handleChange = ({ target: { name, value } }) => {
    setNewUser(prevState => ({ ...prevState, [name]: value }));
  };
  const sendRegisterForm = e => {
    e.preventDefault();
    dispatch(register(newUser));
    setNewUser({
      name: '',
      email: '',
      password: '',
    });
  };
  const onClickShow = () => setShow(!show);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="80vh"
      >
        <Center>
          <form onSubmit={sendRegisterForm}>
            <FormControl isRequired w={500}>
              <Center mb={10}>
                <Heading as="h3" size="lg" colorScheme="blue">
                  Register
                </Heading>
              </Center>

              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                // label="name"
                type="text"
                onChange={handleChange}
                value={newUser.name}
                placeholder="Name"
                pattern="^[a-zA-Z\s]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <FormLabel mt={5}>Email address</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                value={newUser.email}
                type="email"
                onChange={handleChange}
                required
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormLabel mt={5}>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={newUser.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement>
                  <Button type="button" onClick={onClickShow}>
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>We'll never share your password.</FormHelperText>
              <Center mt={10}>
                <Button type="submit" colorScheme="blue">
                  Register
                </Button>
              </Center>
            </FormControl>
          </form>
        </Center>
      </Box>
    </>
  );
};
