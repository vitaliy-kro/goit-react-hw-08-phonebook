import { useAuth } from 'hooks';
import { Link } from 'components/Link';
import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav" sx={{ display: 'flex' }}>
      <Link sx={{ color: 'white', display: 'block', py: 2 }} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link sx={{ color: 'white', display: 'block', py: 2 }} to="/contacts">
          Contacts
        </Link>
      )}
    </Box>
  );
};
