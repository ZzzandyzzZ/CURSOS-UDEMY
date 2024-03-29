import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../auth/hooks/useAuthStore';
import { LoginPage } from '../auth/pages/LoginPage';
import { CalendarPage } from '../calendar/pages/CalendarPage';

export function AppRouter() {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return (
      <h3>Cargando...</h3>
    );
  }
  return (
    <Routes>
      {
        (status === 'not-authenticated')
          ? (
            <>
              <Route path="/auth/*" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/auth/login" />} />
            </>
          )
          : (
            <>
              <Route path="/" element={<CalendarPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )
      }
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
