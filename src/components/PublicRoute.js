import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLogged } from '../redux/login/login-selectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isLogged = useSelector(getIsLogged);
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogged && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
