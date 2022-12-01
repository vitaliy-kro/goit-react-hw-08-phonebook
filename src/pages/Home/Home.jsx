import { Container } from '@mui/material';
import { WelcomeMessage } from 'components/WelcomeMessage';
const Home = () => {
  return (
    <Container
      maxWidth="l"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <WelcomeMessage />
    </Container>
  );
};

export default Home;
