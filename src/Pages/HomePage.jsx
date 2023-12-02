import React from "react";
import Navbar from "../Components/Navbar";
import Header from '../Components/Header'
import Footer from "../Components/Footer";

function HomePage() {
    return (
        <div className="home">
            <Navbar />
            <Header text="Bienvenue sur mon site ! Je suis une développeuse front-end junior passionnée, 
            fraîchement formée et spécialisée dans React.js. Explorez mes projets innovants et suivez ma progression 
            dans le monde captivant du développement web." />
            <Footer />
        </div>
    )
}

export default HomePage;