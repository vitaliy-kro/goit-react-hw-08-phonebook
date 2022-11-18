import { Box } from 'components/Box';
import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column" width="300px">
      <Label htmlFor="search">Find contacts by name</Label>
      <Input
        name="search"
        as="input"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Box>
  );
};
