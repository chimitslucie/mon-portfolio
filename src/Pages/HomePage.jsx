import React from "react";
import Navbar from "../Components/Navbar";
import Header from '../Components/Header'
import Footer from "../Components/Footer";

function HomePage() {
    return (
        <div className="home">
            <Navbar />
            <Header text="Qui ideo nefariis est haec ideo quod autem vocibus insaniam haec insaniam conatibus heiulans longe vocibus est longe visus: insaniam." />
            <Footer />
        </div>
    )
}

export default HomePage;