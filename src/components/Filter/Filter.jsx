import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { filterValue } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

import { Center, FormLabel, Heading, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={css.filter_container}>
      <Center>
        <Heading as="h3" size="lg">
          Contacts
        </Heading>
      </Center>
      <FormLabel>Find contact by name</FormLabel>
      <Input
        className={css.filter_input}
        type="text"
        name="filter"
        onChange={e => dispatch(filterValue(e.target.value))}
        value={filter}
      />
    </div>
  );
};
