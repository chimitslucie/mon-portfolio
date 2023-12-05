import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const [showLinks, setshowLinks] = useState(false);

    const handleShowLinks = () => {
        setshowLinks(!showLinks)
    }

    return (
        <nav className={`nav ${showLinks ? "showNav" : "hideNav"}`}>
            <div className="navLogo">
                <Link to={"/mon-portfolio"} className="navLogoLink">
                    Lucie Chimits
                </Link>
            </div>
            <ul className="navLinks">
                <li className="navItem">
                    <Link to={"/mon-portfolio/about"} className="navLink">
                        A propos
                    </Link>
                </li>
                <li className="navItem">
                    <Link to={"/mon-portfolio/skills"} className="navLink">
                        Compétences
                    </Link>
                </li>
                <li className="navItem">
                    <Link to={"/mon-portfolio/projects"} className="navLink">
                        Projets
                    </Link>
                </li>
                <li className="navItem">
                    <Link to={"/mon-portfolio/contact"} className="navLink">
                        Contact
                    </Link>
                </li>
            </ul>
            <button className="navBurger" onClick={handleShowLinks}>
                <span className="burgerBar"></span>
            </button>
        </nav>
    );
}

export default Navbar;