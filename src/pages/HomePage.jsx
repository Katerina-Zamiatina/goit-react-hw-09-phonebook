import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../routes';
import { getIsLogged } from '../redux/login/login-selectors';

const styles = {
  container: { color: '#6c6767' },
  text: {
    textAlign: 'center',
  },
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    marginLeft: 10,
    padding: 8,
    fontWeight: 700,
    backgroundColor: 'rgb(225, 183, 183)',
    border: '1px solid rgb(225, 183, 183)',
    borderRadius: 5,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const HomePage = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>PnoneBook App</h1>
      {!isLogged && (
        <>
          <p style={styles.text}>
            Doesn't have an account yet, than
            <NavLink
              to={routes.register}
              exact
              style={styles.link}
              activeStyle={styles.activeLink}
            >
              Register
            </NavLink>
          </p>
          <p style={styles.text}>
            Allready has an account, than
            <NavLink
              to={routes.login}
              exact
              style={styles.link}
              activeStyle={styles.activeLink}
            >
              Sign In
            </NavLink>
          </p>
        </>
      )}
    </div>
  );
};

export default HomePage;
