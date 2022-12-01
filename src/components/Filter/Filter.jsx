import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

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
