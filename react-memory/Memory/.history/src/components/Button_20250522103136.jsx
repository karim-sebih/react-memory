import React from 'react';
import './Button.css'; // Assuming you have some CSS for stylin

const NewGameButton = ({ onNewGame }) => (
    <button  className='new-game-button' onClick={onNewGame}>
        Nouvelle Partie
    </button>
);



export default NewGameButton;