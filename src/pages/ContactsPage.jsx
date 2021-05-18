import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Form from '../components/Form';
import ContactsList from '../components/Contacts';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { getLoading } from '../redux/contacts/contacts-selectors';

const styles = {
  container: {
    marginLeft: 30,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
    color: 'rgb(172, 106, 106)',
  },
};

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook</h1>
      <Form />
      <Filter />
      <ContactsList />
      {isLoading && (
        <Loader type="ThreeDots" color="#818181" height={80} width={80} />
      )}
    </div>
  );
};

export default ContactsPage;
