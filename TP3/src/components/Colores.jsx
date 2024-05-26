import React, { useState } from 'react'
import './colores.css'

export const Colores = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const generarColorAleatorio = () => {
    // Generar valores aleatorios para los componentes RGB (rojo, verde, azul)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Construir el color en formato hexadecimal
    const color = `rgb(${red}, ${green}, ${blue})`;
    // Actualizar el estado del color de fondo
    setBackgroundColor(color);
  };

  return (
    <div className="color-generator-container">
      <div
        className="color-square"
        style={{ backgroundColor: backgroundColor }}
      ></div>
      <button className="color-button" onClick={generarColorAleatorio}>
        Generar Color
      </button>
    </div>
  );
}