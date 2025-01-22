import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    function Header() {
      const [isNavActive, setIsNavActive] = useState(false);

      const toggleNav = () => {
        setIsNavActive(!isNavActive);
      };

      return (
        <header>
          <nav className={isNavActive ? 'active' : ''}>
            <h1>SudaStock</h1>
            <div className="hamburger-menu" onClick={toggleNav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/data">Data</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
            <ul className={`nav-mobile ${isNavActive ? 'active' : ''}`}>
              <li><Link to="/" onClick={toggleNav}>Home</Link></li>
              <li><Link to="/products" onClick={toggleNav}>Products</Link></li>
              <li><Link to="/data" onClick={toggleNav}>Data</Link></li>
              <li><Link to="/about" onClick={toggleNav}>About Us</Link></li>
              <li><Link to="/contact" onClick={toggleNav}>Contact Us</Link></li>
              <li><Link to="/signin" onClick={toggleNav}>Sign In</Link></li>
              <li><Link to="/signup" onClick={toggleNav}>Sign Up</Link></li>
            </ul>
          </nav>
        </header>
      );
    }

    export default Header;
