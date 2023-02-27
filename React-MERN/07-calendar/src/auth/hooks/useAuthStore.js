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

  return {
    // Props
    status,
    user,
    errorMsg,
    // Methods
    startLogin,
  };
};
