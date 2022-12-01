import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';

import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (userInfo, { resetForm }) => {
      dispatch(login(userInfo));
      resetForm();
    },
  });

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Sign in
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ mt: 3 }}
        >
          Log In
        </Button>
      </form>
    </Box>
  );
};
