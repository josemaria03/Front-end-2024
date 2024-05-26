import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import { Presentacion } from './components/Presentacion';
import { Contador } from './components/Contador';
import { Colores } from './components/Colores';
import { Emojis } from './components/Emojis';
import { Adivinar } from './components/Adivinar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/presentacion" element={<Presentacion nombre="Jose Maria" edad="20" imagenSrc="./public/Captura de pantalla 2024-05-25 190015.png" />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/colores" element={<Colores />} />
        <Route path="/emojis" element={<Emojis />} />
        <Route path="/adivinar" element={<Adivinar />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;