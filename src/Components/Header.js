import React from "react";
import '../App.css'

const Header = () => {


    
if(window.innerWidth >= 1000) {
    return(
        <>
            <header className="headerContainer">
                <span className="logo">Ábner.</span>
                <nav>
                    <ul className="navContainer">
                        <li>SOBRE</li>
                        <li>CURSOS</li>
                        <li>EXPERIÊNCIA</li>
                        <li>CONTATO</li>
                    </ul>
                </nav>
            </header>
        </>
    )
} else return ;

}

export default Header