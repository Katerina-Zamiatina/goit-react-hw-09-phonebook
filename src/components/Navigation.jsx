import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../redux/login/login-selectors';
import routes from '../routes';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#6c6767',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Home
      </NavLink>
      {isLogged && (
        <NavLink
          to={routes.contacts}
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
