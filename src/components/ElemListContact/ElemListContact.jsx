import PropTypes from 'prop-types';
import css from './ElemListContact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { editContact } from 'redux/contactsSlice';
import { useState } from 'react';

import { EditForm } from 'components/modal/modal';

import { ListItem, ListIcon, Button, Text, Spacer } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons';

export const ElemListContact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    dispatch(editContact({ id, name, number }));
    setShowModal(true);
  };

  return (
    <>
      <ListItem className={css.list}>
        <ListIcon as={PhoneIcon} boxSize={5} mr={5} ml={0} />

        <Text fontSize="xl">
          {name}: {number}
        </Text>
        <Spacer />
        <Button
          colorScheme="blue"
          mr={2}
          className={css.btn}
          id={id}
          onClick={handleEditClick}
        >
          <EditIcon />
        </Button>
        <Button
          colorScheme="blue"
          className={css.btn}
          id={id}
          onClick={() => dispatch(deleteContact(id))}
        >
          <DeleteIcon />
        </Button>
      </ListItem>
      {showModal && (
        <EditForm onClose={() => setShowModal(false)} showModal={showModal} />
      )}
    </>
  );
};

ElemListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
