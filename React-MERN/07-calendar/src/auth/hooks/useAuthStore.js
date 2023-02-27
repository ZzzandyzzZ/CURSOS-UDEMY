import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../../api/calendarApi';
import {
  onChecking, onLogin, onLogout, clearErrorMsg,
} from '../../store/auth/authSlice';

export const useAuthStore = () => {
  const { status, user, errorMsg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data: { name, uid, token } } = await calendarApi.post('/auth', { email, password });
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name, uid }));
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'));
      setTimeout(() => { dispatch(clearErrorMsg()); }, 4);
    }
  };

  const startRegister = async ({
    name, email, password,
  }) => {
    dispatch(onChecking());
    try {
      const { data: { uid, token } } = await calendarApi.post('/auth/new', {
        name, email, password,
      });
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin(name, uid));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || 'Error al registrar'));
      setTimeout(() => { dispatch(clearErrorMsg()); }, 4);
    }
  };

  const checkAuthToken = async () => {
    const localToken = localStorage.getItem('token');
    if (!localToken) return dispatch(onLogout());
    try {
      const { data: { token, name, uid } } = await calendarApi.get('/auth/renew');
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin(name, uid));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    // Props
    status,
    user,
    errorMsg,
    // Methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
