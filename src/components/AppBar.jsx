import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import LoginBar from './LoginBar';
import { getIsLogged } from '../redux/login/login-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '2px solid rgb(225, 183, 183)',
  },
};

const AppBar = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLogged ? <UserMenu /> : <LoginBar />}
    </header>
  );
};

export default AppBar;
