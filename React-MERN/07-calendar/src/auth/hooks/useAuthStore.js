import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../../api/calendarApi';
import { onChecking, onLogin, onLogout } from '../../store/auth/authSlice';

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
    }
  };

  return {
    // Props
    status,
    user,
    errorMsg,
    // Methods
    startLogin,
  };
};
