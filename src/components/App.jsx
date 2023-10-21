import css from './App.module.css';
// import { FormAddContacts } from './FormAddContacts/FormAddContacts';
// import { Filter } from './Filter/Filter';
// import { ListContacts } from './ListContacts/ListContacts';
import { Header } from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { RegisterUser } from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshCurrentUser } from 'redux/auth/operationsAuth';
import { RestrictedRoute } from './Routes/PuplicRoute';
import { PrivatRoute } from './Routes/PrivateRoute';
import { Footer } from './Footer/Footer';
import { Box, Flex } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Flex minHeight="100vh" direction="column" className={css.container}>
      <Box as="main" flexGrow="1">
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterUser />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
      <Box as="footer" h={10} bg="var(--chakra-colors-blue-500)" mt={10}>
        <Footer />
      </Box>
    </Flex>
  );
};
