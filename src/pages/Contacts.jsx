import { Filter } from 'components/Filter/Filter';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { ListContacts } from 'components/ListContacts/ListContacts';

export const Contacts = () => {
  return (
    <>
      <FormAddContacts />
      <Filter />
      <ListContacts />
    </>
  );
};
