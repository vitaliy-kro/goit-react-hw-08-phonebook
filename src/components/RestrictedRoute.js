import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectedTo = '/',
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectedTo} /> : Component;
};
