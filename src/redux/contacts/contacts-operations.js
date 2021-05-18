import axios from 'axios';
import * as actions from './contacts-actions';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error.message));
  }
};

export const addContact = payload => dispatch => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', payload)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error.message)));
};

export const deleteContact = payload => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${payload}`)
    .then(() => dispatch(actions.deleteContactSuccess(payload)))
    .catch(error => dispatch(actions.deleteContactError(error.message)));
};
