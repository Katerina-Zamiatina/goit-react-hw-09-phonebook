import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/AppBar';

import routes from './routes';

import { onGetUser } from './redux/login/login-operations';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(onGetUser()), [dispatch]);

  return (
    <>
      <AppBar />
      <Switch>
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#4c4e59"
              height={80}
              width={80}
              className="Loader"
            />
          }
        >
          <PublicRoute exact path={routes.home} component={HomePage} />
          <PublicRoute
            path={routes.register}
            component={RegisterPage}
            redirectTo={routes.contacts}
            restricted
          />
          <PublicRoute
            path={routes.login}
            component={LoginPage}
            restricted
            redirectTo={routes.contacts}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsPage}
            redirectTo={routes.login}
          />
        </Suspense>
      </Switch>
    </>
  );
};

export default App;
