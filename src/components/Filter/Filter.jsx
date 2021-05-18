import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.scss';
import { filterContact } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContact(e.target.value));
  const value = useSelector(getFilter);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contacts</h2>
      <label className={styles.label}>
        <span className={styles.label__text}>Filter by name</span>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name for search"
        />
      </label>
    </div>
  );
};

export default Filter;
