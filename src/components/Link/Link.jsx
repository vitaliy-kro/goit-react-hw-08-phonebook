import { Button as MUILink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
export const Link = ({ sx, to, children, size, variant = 'text' }) => {
  return (
    <MUILink
      to={to}
      sx={sx}
      component={RouterLink}
      variant={variant}
      size={size}
    >
      {children}
    </MUILink>
  );
};
