import React from 'react'
import './index.scss';
import {Link} from 'react-router-dom'
import Logo from '../../assets/VladimirOrtega.png'
const Homepage = () => (
    <>
        <div className="welcome-container">
            <img src={Logo} alt="Logo Vladimir"></img>
            <p className="welcome-test">
                Bienvenido(a) a la mejor plataforma de peliculas.
            </p>
            <button className="welcome-button">
                <Link to="/peliculas">
                    Ver Peliculas
                </Link>
                
            </button>
        </div>
    </>
);

export default Homepage;

