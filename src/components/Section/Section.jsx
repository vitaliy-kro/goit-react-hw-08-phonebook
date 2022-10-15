import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
