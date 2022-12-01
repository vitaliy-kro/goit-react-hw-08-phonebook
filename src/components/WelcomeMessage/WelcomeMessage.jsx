import { useAuth } from 'hooks';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Box, Typography } from '@mui/material';
import { Link } from 'components/Link';
export const WelcomeMessage = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ContactPhoneIcon sx={{ fontSize: 70, mr: 2 }} />
        <Typography component="h1" variant="h1">
          Phonebook
        </Typography>
      </Box>

      {isLoggedIn ? (
        <Typography component="h2" variant="h3">
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
