import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
import { getIsLogged } from '../../redux/login/login-selectors';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>PnoneBook App</h1>
      {!isLogged && (
        <>
          <p className={styles.text}>
            Doesn't have an account yet, than
            <NavLink to={routes.register} exact className={styles.link}>
              Register
            </NavLink>
          </p>
          <p className={styles.text}>
            Allready has an account, than
            <NavLink to={routes.login} exact className={styles.link}>
              Sign In
            </NavLink>
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
