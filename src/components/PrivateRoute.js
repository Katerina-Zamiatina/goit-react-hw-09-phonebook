import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLogged } from '../redux/login/login-selectors';

// if user is logged than render PrivateComponent, if not redirect to loginPage
/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isLogged = useSelector(getIsLogged);
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogged ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

export default PrivateRoute;
