import { combineReducers } from 'redux';
import showContactsReducer from 'features/showContacts/showContactsSlice';
import addContactsReducer from 'features/addContact/addContactSlice';
import contactManagerReducer from 'features/contactManager/contactManagerSlice';
import editContactReducer from 'features/modalEditContact/modalEditSlice.js';

export default combineReducers({
  contacts: contactManagerReducer,
  addContact: addContactsReducer,
  showContacts: showContactsReducer,
  editContact: editContactReducer
});
