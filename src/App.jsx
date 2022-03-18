import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Register from './pages/register';
import Products from './pages/products';
import AddProducts from './pages/addProducts';
import EditProducts from './pages/editProducts';
import Categories from './pages/categories';
import AddCategories from './pages/addCategories';
import EditCategories from './pages/editCategories';
import Brands from './pages/brands';
import AddBrands from './pages/addBrands';
import EditBrands from './pages/editBrands';
import Login from './pages/login/index.jsx';
import NotFound from './pages/notfound/index.jsx';
import { useSelector } from 'react-redux';

export default function App() {

  const token = useSelector(state => state.UserReducer.token);

  function PrivateRoute(props) {
    return token ? props.children : <Navigate to="/login" />
  }

  function HiddenLoggedRoute(props) {
    return token ? <Navigate to="/" /> : props.children
  }

  return <>

    <BrowserRouter>

      <Header />

      <Layout>

        <Routes>

          <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path="/login" element={<HiddenLoggedRoute> <Login /> </HiddenLoggedRoute>} />
          <Route path="/register" element={<HiddenLoggedRoute> <Register /> </HiddenLoggedRoute>} />
          <Route path="/products" element={<PrivateRoute> <Products /> </PrivateRoute>} />
          <Route path="/products/add" element={<PrivateRoute> <AddProducts /> </PrivateRoute>} />
          <Route path="/products/edit/:id" element={<PrivateRoute> <EditProducts /> </PrivateRoute>} />
          <Route path="/categories" element={<PrivateRoute> <Categories /> </PrivateRoute>} />
          <Route path="/categories/add" element={<PrivateRoute> <AddCategories /> </PrivateRoute>} />
          <Route path="/categories/edit/:id" element={<PrivateRoute> <EditCategories /> </PrivateRoute>} />
          <Route path="/brands" element={<PrivateRoute> <Brands /> </PrivateRoute>} />
          <Route path="/brands/add" element={<PrivateRoute> <AddBrands /> </PrivateRoute>} />
          <Route path="/brands/edit/:id" element={<PrivateRoute> <EditBrands /> </PrivateRoute>} />
          <Route path="*" element={<NotFound/>} />

        </Routes>

      </Layout>

      <Footer />

    </BrowserRouter>

  </>

}

