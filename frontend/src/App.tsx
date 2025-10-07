import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';
import ProductCreate from './pages/products/ProductCreate';
import ProductEdit from './pages/products/ProductEdit';
import SalesReport from './pages/sales/SalesReport';
import SubscriptionManagement from './pages/subscriptions/SubscriptionManagement';
import './App.css'

function App() {
  return (

    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
