import { NavLink } from 'react-router-dom';
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

const LoginBar = () => {
  return (
    <div>
      <NavLink
        to={routes.register}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default LoginBar;
