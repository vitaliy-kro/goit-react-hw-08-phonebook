import { Avatar, Typography, Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { stringAvatar } from 'helpers/chooseAvatarColorByName';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar {...stringAvatar(user.name)} />
      <Typography component="p" variant="p" sx={{ ml: 2 }}>
        {user.email}
      </Typography>
      <Button
        type="button"
        sx={{ ml: 2, color: 'white' }}
        variant="outlined"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Box>
  );
};
