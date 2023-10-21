
import React from 'react';
import '../styles/Navbar.css';

function Navbar({ children }) {
    return (
        <header className="header">
        <div className="logo">O-FIGHTER</div>
        <nav className="nav">
            <ul>
                <li><button><a href="#">Home</a></button></li>
                <li><button><a href="#">Sign Up</a></button></li>
                <li><button><a href="#">Login</a></button></li>
                <li><button><a href="#">Options</a></button></li>
            </ul>
        </nav>
    </header>

    );
  }
  
  export default Navbar;