import { Link } from 'components/Link';

export const AuthNav = () => {
  return (
    <>
      <Link sx={{ color: 'white' }} to="/login">
        Log In
      </Link>
      <Link sx={{ color: 'white', ml: 2 }} to="/register">
        Register
      </Link>
    </>
  );
};
