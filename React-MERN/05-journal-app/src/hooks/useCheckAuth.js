import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth)
  const disptach = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return disptach(logout());
      const { uid, displayName, photoURL, email } = user;
      disptach(login({uid, displayName, photoURL, email}))
    });
  }, [])
  return {
    status
  }
}

