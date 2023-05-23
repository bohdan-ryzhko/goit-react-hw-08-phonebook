export const selectContacts = state => state.contacts.items;
export const selectContactsLoad = state => state.contacts.isLoad;
export const selectContactsError = state => state.contacts.error;
export const selectIsCreatingLoad = state => state.contacts.isCreatingLoad;