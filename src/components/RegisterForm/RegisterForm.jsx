import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { useFormik } from 'formik';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    onSubmit: ({ username: name, email, password }, { resetForm }) => {
      dispatch(register({ name, email, password }));
      resetForm();
    },
  });
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Avatar sx={{ mb: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Sign up
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="username"
              required
              fullWidth
              id="username"
              label="Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button sx={{ mt: 3 }} type="submit" fullWidth variant="contained">
          Register
        </Button>
      </form>
    </Box>
  );
};
