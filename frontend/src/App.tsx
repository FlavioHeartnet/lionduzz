import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';
import ProductCreate from './pages/products/ProductCreate';
import ProductEdit from './pages/products/ProductEdit';
import SalesReport from './pages/sales/SalesReport';
import SubscriptionManagement from './pages/subscriptions/SubscriptionManagement';

function App() {
  const [theme, setTheme] = useState('light');
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<ProductCreate />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/edit" element={<ProductEdit />} />
          <Route path="/sales" element={<SalesReport />} />
          <Route path="/subscriptions" element={<SubscriptionManagement />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
