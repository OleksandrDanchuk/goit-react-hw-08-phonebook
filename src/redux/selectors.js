export const getContacts = state => state.contacts.contacts.items;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
export const getFilter = state => state.contacts.filter;
export const getToUpdate = state => state.contacts.edit;

export const contactsToRender = state => {
  const getTrimmedFilter = getFilter(state).trim().toLowerCase();
  const currentContacts = getContacts(state);

  if (getTrimmedFilter) {
    console.log(getTrimmedFilter);
    return currentContacts.filter(({ name }) =>
      name.toLowerCase().includes(getTrimmedFilter)
    );
  } else {
    return currentContacts;
  }
};
