import React from 'react';
import logo from '../logo.svg';
import '../Css/NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <Link to="/">
        <nav className="Navbar">
            <img src={logo} alt="logo"></img>
            <h1>Iron-Trello</h1>
        </nav>
        </Link>
     );
}
 
export default NavBar;