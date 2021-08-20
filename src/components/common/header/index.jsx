import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <>
            <header className="header-container">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>            
                    </li>
                    <li>
                        <Link to="/peliculas">Peliculas</Link>
                    </li>
                    <li>
                        <Link to="/peliculas/crear">Crear Peliculas</Link>
                    </li>                        
                </ul>
                <div className="search-container">
                    <input type="text" name="search" placeholder="Busca una pelicula">                        
                    </input>                
                </div>
            </header>
        </>
    )
}
export default Header;