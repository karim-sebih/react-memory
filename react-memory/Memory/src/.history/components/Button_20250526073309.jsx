import React from 'react';
import './Button.css';

const NewGameButton = ({ onNewGame }) => (
    <button className='new-game-button' onClick={onNewGame}>
        Nouvelle Partie
    </button>
);

const RestartButton = ({ onResetGame }) => (
    <button className='new-game-button' onClick={onResetGame}>
        Rejouer
    </button>
);

export { NewGameButton, RestartButton };