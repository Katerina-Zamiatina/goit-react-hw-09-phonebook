import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import styles from './Form.module.scss';

const Form = () => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onSubmit = contact => dispatch(addContact(contact));

  const handleChangeContact = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const handleFormSubmit = e => {
    e.preventDefault();
    const existingContact = contacts.find(item => item.name === contact.name);
    if (existingContact) {
      resetForm();
      return alert(`${contact.name} is already in contacts`);
    }
    onSubmit(contact);
    resetForm();
  };

  const resetForm = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <label className={styles.label}>
        <span className={styles.label__text}>Name</span>

        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={contact.name}
          onChange={handleChangeContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={styles.label}>
        <span className={styles.label__text}>Number</span>

        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Enter number"
          value={contact.number}
          onChange={handleChangeContact}
          // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          // title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
