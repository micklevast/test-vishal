import React from 'react';
import './Navbar.scss';

const Navbar = () => {

    const toggle = () => {
        const nav = document.getElementById("topnav");
        nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
    };
    return (<>
        <nav className="topnav" id="topnav">
            <a href="#" className="logo">
                <img src="https://static.thenounproject.com/png/603655-200.png" alt="Logo" />
            </a>
            <a href="/" >Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>

            <button className="icon" onClick={toggle}><i className="fa fa-bars"></i></button>
        </nav>

    </>
    );
}

export default Navbar;