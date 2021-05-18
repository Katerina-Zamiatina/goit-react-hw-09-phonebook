import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import styles from './Contacts.module.scss';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      ))}
    </ul>
  );
};

export default Contacts;
