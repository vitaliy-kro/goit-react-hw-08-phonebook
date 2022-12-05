import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { register } from 'redux/auth/operations';
import { SignSchema } from 'helpers/validationSchemas/signInValidation';
import { notificationError } from 'helpers/notification';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: SignSchema,
    onSubmit: async ({ username: name, email, password }, { resetForm }) => {
      const fetch = await dispatch(register({ name, email, password }));
      fetch.error.message === 'Rejected' ? notificationError() : resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  const nameError = formik.errors.username;
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
      <Avatar sx={{ mb: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
        Sign up
      </Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              error={Boolean(nameError)}
              helperText={nameError}
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
              error={Boolean(emailError)}
              helperText={emailError}
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
              error={Boolean(passwordError)}
              helperText={passwordError}
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
        <Button
          sx={{ mt: 3, mb: 1 }}
          type="submit"
          fullWidth
          variant="contained"
        >
          Register
        </Button>
      </form>
      <Link to="/login" component={RouterLink} variant="body2">
        Already have an account? Sign in
      </Link>
    </Box>
  );
};
