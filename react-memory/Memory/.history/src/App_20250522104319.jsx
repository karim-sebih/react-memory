import { useState } from 'react'
import './App.css'
import NewGameButton from './components/Button.jsx'
import Cards from './components/Cards';

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  // Dummy cards for demonstration
  const initialCards = [
    { id: 1, value: 'A', flipped: false, matched: false },
    { id: 2, value: 'A', flipped: false, matched: false },
    { id: 3, value: 'B', flipped: false, matched: false },
    { id: 4, value: 'B', flipped: false, matched: false },
  ]

  const startNewGame = () => {
    // Shuffle and reset cards
    const shuffled = [...initialCards].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setGameStarted(true)
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
          <div className="App">
        <h1>Memory Game</h1>
        {/* <h3>Welcome to the Memory Game!</h3> */}
        <h3>Try to match all the pairs of cards!</h3>
        <Cards />
        
    </div>
        </div>
      )}
      
    </>
  )
}

export default App