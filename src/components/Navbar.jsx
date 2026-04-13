import { useState } from "react";
import "./Navbar.css";
import resume from "../assets/resume.pdf";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2 className="logo">Shraddha</h2>

            {/* HAMBURGER */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            {/* NAV LINKS */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <a href={resume} download="My_Resume.pdf">
                        Download Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
