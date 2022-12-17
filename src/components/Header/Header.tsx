import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';
import { useAuth } from 'hooks';
import { Box } from '@mui/material';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const matches = useMediaQuery('(max-width:750px)');

  return (
    <AppBar position="static">
      <Container
        maxWidth={matches ? 'sm' : 'xl'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        <Box display="flex">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Container>
    </AppBar>
  );
};
