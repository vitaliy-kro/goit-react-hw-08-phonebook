import { useAuth } from 'hooks';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'components/Link';

export const WelcomeMessage = () => {
  const matches = useMediaQuery('(max-width:750px)');
  const { isLoggedIn, user } = useAuth();

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ContactPhoneIcon
          sx={matches ? { fontSize: 40, mr: 2 } : { fontSize: 70, mr: 2 }}
        />
        <Typography component="h1" variant={matches ? 'h3' : 'h1'}>
          Phonebook
        </Typography>
      </Box>

      {isLoggedIn ? (
        <Typography component="h2" variant={matches ? 'h5' : 'h3'}>
          Welcome,{user.name}
        </Typography>
      ) : (
        <Box sx={{ display: 'flex' }}>
          <Link to="/login" variant="contained" size="large">
            Log In
          </Link>
          <Link to="/register" variant="contained" size="large" sx={{ ml: 5 }}>
            Register
          </Link>
        </Box>
      )}
    </Box>
  );
};
