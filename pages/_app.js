import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../features/store';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        
      <NavBar/>
          <Component {...pageProps} />
          
      </AuthWrapper>
      <Footer/>
    </Provider>
    
    
  );
}
function AuthWrapper({ children }) {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isLoggedIn && router.pathname !== '/login' && router.pathname !== '/signup') {
      router.push('/login');
    }

  }, [user.isLoggedIn, router]);

  return children;
}

export default App;



