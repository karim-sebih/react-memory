import React from 'react';
imp

const NewGameButton = ({ onNewGame }) => (
    <button  className='new-game-button' onClick={onNewGame}>
        Nouvelle Partie
    </button>
);



export default NewGameButton;