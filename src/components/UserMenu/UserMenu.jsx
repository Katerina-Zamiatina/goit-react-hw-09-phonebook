import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/login/login-selectors';
import { onLogout } from '../../redux/login/login-operations';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome to your Phonebook, {name}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(onLogout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
