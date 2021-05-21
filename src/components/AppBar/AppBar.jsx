import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import LoginBar from '../LoginBar';
import { getIsLogged } from '../../redux/login/login-selectors';
import styles from './AppBar.module.scss';

const AppBar = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLogged ? <UserMenu /> : <LoginBar />}
    </header>
  );
};

export default AppBar;
