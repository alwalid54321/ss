import React, { useState } from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import Home from './components/Home';
    import Products from './components/Products';
    import Data from './components/Data';
    import AboutUs from './components/AboutUs';
    import ContactUs from './components/ContactUs';
    import SignIn from './components/SignIn';
    import SignUp from './components/SignUp';
    import QuotationForm from './components/QuotationForm';
    import SampleForm from './components/SampleForm';

    function App() {
      return (
        <div className="container">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/data" element={<Data />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/quotation" element={<QuotationForm />} />
              <Route path="/sample" element={<SampleForm />} />
            </Routes>
          </div>
          <Footer />
        </div>
      );
    }

    export default App;
