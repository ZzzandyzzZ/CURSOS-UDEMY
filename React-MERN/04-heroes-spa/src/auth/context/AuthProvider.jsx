import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {});
  return (
    <AuthContext.Provider value={{}} >
      { children }
    </AuthContext.Provider>
  )
}
