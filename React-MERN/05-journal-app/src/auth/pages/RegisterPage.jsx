import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Alert, Button, Grid, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

const formData = {
  email: 'andy@gmail.com',
  password: '1234',
  displayName: 'Andy Ñaca'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras'],
  displayName: [(value) => value.length > 0, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false)
  const {
    email, password, displayName,
    emailValid, passwordValid, displayNameValid,
    onInputChange, isFormValid,
  } = useForm(formData, formValidations);
  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword({email, password, displayName}));
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Nombre Completo'
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted} // Si el display name no es nulo
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item
              xs={12}
              display={!!errorMessage ? '': 'none'}
            >
              <Alert severity='error'>
                { errorMessage }
              </Alert>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                disabled={isCheckingAuthentication}
                type='submit'
                variant='contained'
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
            <Link color='inherit' to='/auth/login' component={RouterLink}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
