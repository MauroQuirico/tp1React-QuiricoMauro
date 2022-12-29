import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

export default function NavBar({number}){
    return(
        <ul>
            <li><a href="#Cerveceria">Cerveceria</a></li>
            <li><a href="#Inicio">Inicio</a></li>
            <li><a href="#Nosotros">Nosotros</a></li>
            <li><a href="#Tienda">Tienda</a></li>
            <li><a href="#Contacto">Contacto</a></li>
            <div className='cart-widget'>
                <CartWidget/>
            </div>
            <span>
                {number}
            </span>
        </ul>
    )
}