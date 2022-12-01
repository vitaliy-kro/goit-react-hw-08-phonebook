import { Avatar, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useAuth } from 'hooks';
import { stringAvatar } from 'helpers/chooseAvatarColorByName';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const matches = useMediaQuery('(max-width:750px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return matches ? (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleOpen}
      >
        <Avatar {...stringAvatar(user.name)} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>{user.email}</MenuItem>
        <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
      </Menu>
    </Box>
  ) : (
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
