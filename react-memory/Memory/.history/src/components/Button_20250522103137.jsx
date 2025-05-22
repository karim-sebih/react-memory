import React from 'react';
import './Button.css'; // Assuming you have 

const NewGameButton = ({ onNewGame }) => (
    <button  className='new-game-button' onClick={onNewGame}>
        Nouvelle Partie
    </button>
);



export default NewGameButton;