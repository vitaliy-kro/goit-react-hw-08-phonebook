import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { ISection } from './Section.interface';
export const Section: FC<ISection> = ({ title, children }) => {
  return (
    <Box sx={{ py: 3 }}>
      <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
