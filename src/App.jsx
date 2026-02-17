import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import LandingPage from './pages/LandingPage';
import ComingSoon from './pages/ComingSoon';
import LocationModal from './components/LocationModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { LocationProvider } from './context/LocationContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
// We'll skip ToastContainer for now to avoid dependency errors if not installed using `npm i`.

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LocationProvider>
          <CartProvider>
            <LocationModal />
            <CartDrawer />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/service/:id" element={<ServiceDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </LocationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
