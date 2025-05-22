import { useState } from 'react'
import './App.css'
import NewGameButton from './components/Button.jsx'

function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [cards, setCards] = useState([])

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
      <div>
        
        improve your memory and have some fun
      
      </div>
      {!gameStarted ? (
        <NewGameButton onNewGame={startNewGame} />
      ) : (
        <div>
          
          <h1>Memory Game</h1>
          <div className="memory-board">
            {cards.map(card => (
              <div key={card.id} className="memory-card">
                {card.flipped || card.matched ? card.value : "?"}
              </div>
            ))}
          </div>
        </div>
      )}
      
    </>
  )
}

export default App