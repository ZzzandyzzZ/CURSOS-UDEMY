import { useDispatch } from 'react-redux'
import { Link as RouterLink} from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'
import { useForm } from '../../hooks'

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'andy@gmail.com',
    password: '12345',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('GOOGLE');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='contraseña'
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
            />
          </Grid>
          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs={12} md={6}>
              <Button type='submit' variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button onClick={onGoogleSignIn} variant='contained' fullWidth>
                <Google />
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link color='inherit' to='/auth/register' component={RouterLink}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
