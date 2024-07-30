// components/AuthWrapper.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const AuthWrapper = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isLoggedIn && router.pathname !== '/login' && router.pathname !== '/signup') {
      router.push('/login');
    }
  }, [user.isLoggedIn, router]);

  return children;
};

export default AuthWrapper;
