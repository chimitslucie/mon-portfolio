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
                    <Link to={"/About"} className="navLink">
                        A propos
                    </Link>
                </li>
                <li className="navItem">
                    <Link to={"/Skills"} className="navLink">
                        Compétences
                    </Link>
                </li>
                <li className="navItem">
                    <Link to={"/Projects"} className="navLink">
                        Projets
                    </Link>
                </li>
                <li className="navItem">
                    <Link to={"/Contact"} className="navLink">
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