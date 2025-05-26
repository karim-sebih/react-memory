import { useState } from 'react'
import './App.css'
import { NewGameButton, RestartButton } from './components/Button.jsx'
import Cards from './components/Cards';

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  const startNewGame = () => {
    setGameStarted(true)
  }

  const resetGame = () => {
    setGameStarted(false) // Reset to initial state to restart the game
  }

  return (
    <>
      <div className='title'>
        improve your memory and have some fun
      </div>
      {!gameStarted ? (
        <NewGameButton onNewGame={startNewGame} />
      ) : (
        <div>
          <div className="title">
            <h1>Memory Game</h1>
            <h3>Try to match all the pairs of cards!</h3>
            <Cards onResetGame={resetGame} />
          </div>
        </div>
      )}
    </>
  )
}

export default App