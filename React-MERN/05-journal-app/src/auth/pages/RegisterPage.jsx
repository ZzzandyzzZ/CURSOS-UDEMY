import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Link as RouterLink} from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder='Nombre Completo'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{mt:2}}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='contraseña'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{mb:2, mt:1}}>
            <Grid item xs={12} md={6}>
              <Button variant='contained' fullWidth>
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
