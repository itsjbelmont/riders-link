import { AuthContext } from '@/wrappers/AuthSessionProvider';
import { useContext } from 'react';

/**
 * @brief Gain access to the authentication context
 */
export function useAuthSession() {
  const context = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!context) {
      throw new Error('useAuthSession must be wrapped in a <AuthSessionProvider>');
    }
  }
  return context;
}
