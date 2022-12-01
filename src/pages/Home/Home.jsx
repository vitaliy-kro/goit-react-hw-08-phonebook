import { Container } from '@mui/material';
import { WelcomeMessage } from 'components/WelcomeMessage';
const Home = () => {
  return (
    <Container maxWidth="l">
      <WelcomeMessage />
    </Container>
  );
};

export default Home;
