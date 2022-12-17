import { Navigate } from 'react-router-dom/dist';
import { FC } from 'react';
import { useAuth } from 'hooks';

export const PrivateRoute: FC<IPrivateRoute> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

interface IPrivateRoute {
  component: React.ReactElement;
  redirectTo: string;
}
