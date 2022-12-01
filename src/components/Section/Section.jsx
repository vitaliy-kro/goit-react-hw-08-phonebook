import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
export const Section = ({ title, children }) => {
  return (
    <Box sx={{ py: 3 }}>
      <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
