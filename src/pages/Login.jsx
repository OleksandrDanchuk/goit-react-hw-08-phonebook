import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Center,
  Heading,
  Box,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { Field, Form, Formik } from 'formik';

export const Login = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [show, setShow] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const sendUserForm = e => {
    // console.log(userData);
    e.preventDefault();
    dispatch(login(userData));
    setUserData({
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
          <form onSubmit={sendUserForm}>
            <FormControl isRequired w={500}>
              <Center mb={10}>
                <Heading as="h3" size="lg">
                  Log In
                </Heading>
              </Center>

              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                value={userData.email}
                type="email"
                onChange={handleChange}
                required
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormLabel mt={5}>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={userData.password}
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
                  Log in
                </Button>
              </Center>
            </FormControl>
          </form>
        </Center>
      </Box>
    </>
  );
};
