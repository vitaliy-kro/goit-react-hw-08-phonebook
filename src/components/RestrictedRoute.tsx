import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { FC } from 'react';

export const RestrictedRoute: FC<IRestrictedRoute> = ({
  component: Component,
  redirectedTo = '/',
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectedTo} /> : Component;
};

interface IRestrictedRoute {
  component: React.ReactElement;
  redirectedTo: string;
}
