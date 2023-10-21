import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/operations';
import { getToUpdate } from 'redux/selectors';
import { createPortal } from 'react-dom';
import {
  Input,
  InputGroup,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const rootModalRef = document.querySelector('#modal');

export const EditForm = ({ onClose, showModal }) => {
  const dispatch = useDispatch();
  const editingContact = useSelector(getToUpdate);

  const [nameCurrent, setName] = useState(editingContact.name);
  const [numberCurrent, setNumber] = useState(editingContact.number);

  const handleEditForm = evt => {
    evt.preventDefault();
    dispatch(
      updateContact({
        id: editingContact.id,
        name: nameCurrent,
        number: numberCurrent,
      })
    );

    onClose();
  };
  return createPortal(
    <Modal isOpen={showModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Center>
          <ModalHeader>Contact</ModalHeader>
        </Center>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup>
            <Input
              label="Name"
              value={nameCurrent}
              onChange={evt => setName(evt.target.value)}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              mb={2}
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Phone Number"
              value={numberCurrent}
              onChange={evt => setNumber(evt.target.value)}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Button type="submit" onClick={handleEditForm} colorScheme="blue">
            Update
          </Button>
          <Button type="button" onClick={onClose} colorScheme="blue">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>,
    rootModalRef
  );
};
