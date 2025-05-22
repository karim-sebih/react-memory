import React from 'react';

const NewGameButton = ({ onNewGame }) => (
    <button  className='new-game-button' onClick={onNewGame}>
        Nouvelle Partie
    </button>
);



export default NewGameButton;