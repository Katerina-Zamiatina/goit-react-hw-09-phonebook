import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './LoginBar.module.scss';

const LoginBar = () => {
  return (
    <div>
      <NavLink
        to={routes.register}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign In
      </NavLink>
    </div>
  );
};

export default LoginBar;
