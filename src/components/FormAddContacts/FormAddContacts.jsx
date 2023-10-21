import { useState } from 'react';
import css from './FormAddContacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getContacts } from '../../redux/selectors';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Heading,
} from '@chakra-ui/react';

export const FormAddContacts = () => {
  const dispatch = useDispatch();
  const currentContacts = useSelector(getContacts);

  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const submitAddContact = evt => {
    evt.preventDefault();
    const { name: currentName, number: currentNumber } = evt.target.elements;
    if (!state.name.trim() || !state.number.trim()) {
      alert('Please enter the correct values');
      return;
    }

    const сheckRepetition = currentContacts.find(
      ({ name, number }) =>
        name.toLowerCase() === currentName.value.toLowerCase() ||
        number === currentNumber.value
    );

    сheckRepetition
      ? alert(
          `${currentName.value} or  number: ${currentNumber.value} is already in contacts.`
        )
      : dispatch(addContact(state));

    setState({ name: '', number: '' });
  };

  return (
    <>
      <Center mt={30}>
        <form className={css.form} onSubmit={submitAddContact}>
          <Center>
            <Heading as="h3" size="lg">
              New contact
            </Heading>
          </Center>
          <FormControl isRequired>
            <FormLabel className={css.label}>Name </FormLabel>
            <Input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Z\s]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
              value={state.name}
            />

            <FormLabel mt={2} className={css.label}>
              Number
            </FormLabel>
            <Input
              className={css.input}
              type="tel"
              name="number"
              // pattern="^[0-9]+$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              value={state.number}
            />
            <Center mt={10}>
              <Button
                type="submit"
                className={css.form_button}
                colorScheme="blue"
              >
                Add contact
              </Button>
            </Center>
          </FormControl>
        </form>
      </Center>
    </>
  );
};
