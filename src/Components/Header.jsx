import React from "react";

function Header({ text }) {
    return (
        <header className="header">
            <h1 className="headerTitle">Lucie Chimits</h1>
            <h2 className="headerSubtitle">Développeuse Front-end</h2>
            <div className="headerLine"></div>
            <p className="headerText">{text}</p>
        </header>
    )
}

export default Header