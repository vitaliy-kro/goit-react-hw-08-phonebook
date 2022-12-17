import { Box, TextField } from '@mui/material';
import { setFilter } from 'redux/contacts/filterSlice';
import { useAppDispatch } from 'redux/store';

export const Filter = () => {
  const dispatch = useAppDispatch();

  return (
    <Box display="flex" flexDirection="column" width="300px">
      <TextField
        name="search"
        variant="standard"
        label="Find contacts by name"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Box>
  );
};
