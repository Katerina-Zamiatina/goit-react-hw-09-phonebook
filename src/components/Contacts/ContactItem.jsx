import styles from './Contacts.module.scss';

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <div>
        <span className={styles.name}>{name} : </span>
        <span className={styles.number}>{number}</span>
      </div>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
