import { Routes, Route } from 'react-router-dom/dist';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'components/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    const refresh = dispatch(refreshUser());

    return () => {
      refresh.abort();
    };
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectedTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectedTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route path="*" index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
