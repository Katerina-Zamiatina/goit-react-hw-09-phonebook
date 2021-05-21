import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../redux/login/login-selectors';
import routes from '../../routes';

import styles from './Nvigation.module.scss';

const Navigation = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      {isLogged && (
        <NavLink
          to={routes.contacts}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
