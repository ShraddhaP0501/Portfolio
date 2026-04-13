import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">MyPortfolio</h2>

            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <a href="/resume.pdf" download className="btn">
                Download Resume
            </a>
        </nav>
    );
};

export default Navbar;
