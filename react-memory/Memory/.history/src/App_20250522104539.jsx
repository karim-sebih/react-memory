import { useState } from 'react'
import './App.css'
import NewGameButton from './components/Button.jsx'
import Cards from './components/Cards';

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  

  const startNewGame = () => {
    /   
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