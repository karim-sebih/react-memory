import React from 'react';
import './Button.css';

const NewGameButton = ({ onNewGame }) => (
    <button  className='new-game-button' onClick={onNewGame}>
        Nouvelle Partie
    </button>
);



export default NewGameButton;