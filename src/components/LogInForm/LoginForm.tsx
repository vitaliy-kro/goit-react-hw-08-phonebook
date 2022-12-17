import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { notificationError } from 'helpers/notification';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { login } from 'redux/auth/operations';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { logInSchema } from 'helpers/validationSchemas';
import { useAppDispatch } from 'redux/store';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: logInSchema,
    onSubmit: async (userInfo, { resetForm }) => {
      const fetch = await dispatch(login(userInfo));
      fetch.meta.requestStatus === 'rejected'
        ? notificationError()
        : resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  const emailError = formik.errors.email;
  const passwordError = formik.errors.password;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
      }}
    >
      <Avatar sx={{ bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Sign in
      </Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={Boolean(emailError)}
              helperText={emailError}
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
              error={Boolean(passwordError)}
              helperText={passwordError}
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
          sx={{ mt: 3, mb: 1 }}
        >
          Log In
        </Button>
      </form>
      <Link to="/register" component={RouterLink} variant="body2">
        Don't have an account? Sign Up
      </Link>
    </Box>
  );
};
