import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { FirebaseAuth } from '../firebase/config'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { login, logout } from '../store/auth'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  const disptach = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return disptach(logout());
      const { uid, displayName, photoURL, email } = user;
      disptach(login({uid, displayName, photoURL, email}))
    });
  }, [])

  if (status === 'checking') {
    return <CheckingAuth />
  }
  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />}/>
      <Route path='/*' element={<JournalRoutes />}/>
    </Routes>
  )
}
