import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';
import { useAuth } from 'hooks';
import { Box } from '@mui/material';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container
        maxWidth="l"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          py: 2,
        }}
      >
        <Navigation />
        <Box display="flex">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Container>
    </AppBar>
  );
};
