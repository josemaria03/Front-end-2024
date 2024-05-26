import React from 'react'
import './adivinar.css'
import { useState } from 'react';

export const Adivinar = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  const [numeroIngresado, setNumeroIngresado] = useState('');
  const [mensaje, setMensaje] = useState('');

  const generarNumeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 100) + 1; 
    setNumeroAleatorio(numero);
    setMensaje('');
  };

  const handleChange = (event) => {
    setNumeroIngresado(event.target.value);
    setMensaje('');
  };

  const verificarAdivinanza = () => {
    const numero = parseInt(numeroIngresado);
    if (!isNaN(numero)) {
      const diferencia = Math.abs(numero - numeroAleatorio);
      if (diferencia === 0) {
        setMensaje('¡Correcto! ¡Adivinaste el número!');
      } else if (diferencia <= 10) {
        setMensaje('Estás muy cerca.');
      } else if (diferencia <= 20) {
        setMensaje('Estás cerca.');
      } else if (diferencia <= 30) {
        setMensaje('Estás algo cerca.');
      } else {
        setMensaje('Estás lejos.');
      }
    } else {
      setMensaje('Por favor ingresa un número válido.');
    }
  };

  return (
    <div className="adivinar-container">
      <h2>Adivina el número</h2>
      <button className="adivinar-button" onClick={generarNumeroAleatorio}>Generar Número Aleatorio</button>
      {numeroAleatorio && (
        <div>
          <input className="adivinar-input" type="text" value={numeroIngresado} onChange={handleChange} />
          <button className="adivinar-button" onClick={verificarAdivinanza}>Verificar</button>
          {mensaje && <p className="adivinar-message">{mensaje}</p>}
        </div>
      )}
    </div>
  );
};
