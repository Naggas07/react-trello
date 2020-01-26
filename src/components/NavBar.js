import React from 'react';
import logo from '../logo.svg';
import '../Css/NavBar.css'

const NavBar = () => {
    return ( 
        <nav className="Navbar">
            <img src={logo} alt="logo"></img>
            <h1>Iron-Trello</h1>
        </nav>
     );
}
 
export default NavBar;