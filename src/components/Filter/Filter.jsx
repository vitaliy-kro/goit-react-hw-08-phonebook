import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Label, Input } from './Filter.styled';

export const Filter = ({ filter }) => {
  return (
    <Box display="flex" flexDirection="column" width="300px">
      <Label htmlFor="search">Find contacts by name</Label>
      <Input name="search" as="input" onChange={filter} />
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
