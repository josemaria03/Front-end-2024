import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; 


export const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/presentacion" activeclassname="active">Presentación</NavLink>
        </li>
        <li>
          <NavLink to="/contador" activeclassname="active">Contador</NavLink>
        </li>
        <li>
          <NavLink to="/colores" activeclassname="active">Colores</NavLink>
        </li>
        <li>
          <NavLink to="/emojis" activeclassname="active">Emojis</NavLink>
        </li>
        <li>
          <NavLink to="/adivinar" activeclassname="active">Adivinar</NavLink>
        </li>
      </ul>
    </div>
    
  )
}
