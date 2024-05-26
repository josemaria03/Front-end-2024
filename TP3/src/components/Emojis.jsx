import React, { useState } from 'react';
import './emojis.css';

export const Emojis = () => {
  const [emoji, setEmoji] = useState('😊');
  const [voto, setVoto] = useState(null);

  // Array de emojis disponibles
  const emojisList = ['😊', '😂', '😍', '🥳', '😎', '🤩', '😜', '😁', '😇', '😋'];

  const seleccionarEmojiAleatorio = () => {
    const indiceAleatorio = Math.floor(Math.random() * emojisList.length);
    const emojiAleatorio = emojisList[indiceAleatorio];
    setEmoji(emojiAleatorio);
    setVoto(null);
  };

  const handleVoto = (opcion) => {
    setVoto(opcion);
  };

  return (
    <div className="emojis-container">
      <span className="emoji" role="img" aria-label="Emoji actual">
        {emoji}
      </span>
      <button className="emoji-button" onClick={seleccionarEmojiAleatorio}>
        Mostrar Emoji Aleatorio
      </button>
      <div className="voto-section">
        <p>¿Te sientes como este emoji?</p>
        <div className="voto-buttons">
          <button
            className={`voto-button ${voto === 'si' ? 'voto-button-selected' : ''}`}
            onClick={() => handleVoto('si')}
          >
            Sí
          </button>
          <button
            className={`voto-button ${voto === 'no' ? 'voto-button-selected' : ''}`}
            onClick={() => handleVoto('no')}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

