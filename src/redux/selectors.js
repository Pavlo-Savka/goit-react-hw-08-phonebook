export const getContacts = state => {
//  console.log(state.contacts.items);
  return state.contacts.items;
};

export const getFilterValue = state => {
    return state.filter;
};

export const selectContacts = state => state.contacts.items;

export const selectIsLoadingContacts = state => state.contacts.isLoadingFetch;

export const selectIsLoadingAdd = state => state.contacts.isLoadingAdd;

  