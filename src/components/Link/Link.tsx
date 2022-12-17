import { Button as MUILink } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface TStyle {
  color?: string;
  display?: string;
  ml?: number;
  py?: number;
}
interface ILink {
  sx?: TStyle;
  to: string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
}

export const Link: FC<ILink> = ({
  sx,
  to,
  children,
  size,
  variant = 'text',
}) => {
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
