import { useState, useEffect } from "react";
import Card from "./Card";
import { RestartButton } from "./Button";
function Cards({ onResetGame }) {
    const [items, setItems] = useState([
        { id: 1, img: "/img/angry-birds.png", stat: "" },
        { id: 1, img: "/img/angry-birds.png", stat: "" },
        { id: 2, img: "/img/block.png", stat: "" },
        { id: 2, img: "/img/block.png", stat: "" },
        { id: 3, img: "/img/game-boy.png", stat: "" },
        { id: 3, img: "/img/game-boy.png", stat: "" },
        { id: 4, img: "/img/game-console.png", stat: "" },
        { id: 4, img: "/img/game-console.png", stat: "" },
        { id: 5, img: "/img/game-over.png", stat: "" },
        { id: 5, img: "/img/game-over.png", stat: "" },
        { id: 6, img: "/img/gamer.png", stat: "" },
        { id: 6, img: "/img/gamer.png", stat: "" },
        { id: 7, img: "/img/ghost.png", stat: "" },
        { id: 7, img: "/img/ghost.png", stat: "" },
        { id: 8, img: "/img/joystick.png", stat: "" },
        { id: 8, img: "/img/joystick.png", stat: "" },
        { id: 9, img: "/img/mushroom.png", stat: "" },
        { id: 9, img: "/img/mushroom.png", stat: "" },
        { id: 10, img: "/img/video-game.png", stat: "" },
        { id: 10, img: "/img/video-game.png", stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [gameCompleted, setGameCompleted] = useState(false)
       useEffect(() => {
        const allMatched = items.every(item => item.stat === "correct");
        console.log("Items:", items); // Debug: Log the items array
        console.log("All matched:", allMatched); // Debug: Log if all items are matched
        if (allMatched && items.length > 0) {
            setGameCompleted(true);
        }
    }, [items]);
    function check(current) {
    // Prevent matching a card with itself
    if (current === prev) {
        items[current].stat = "";
        setItems([...items]);
        setPrev(-1);
        return;
    }

    if (items[current].id === items[prev].id) {
        items[current].stat = "correct";
        items[prev].stat = "correct";
        setItems([...items]);
        setPrev(-1);
    } else {
        items[current].stat = "wrong";
        items[prev].stat = "wrong";
        setItems([...items]);
        setTimeout(() => {
            items[current].stat = "";
            items[prev].stat = "";
            setItems([...items]);
            setPrev(-1);
        }, 1000);
    }
}   
    
    function handleClick(id) {
    // Prevent clicking on already revealed cards or the same card twice
    if (items[id].stat === "correct" || prev === id) {
        return;
    }

    if (prev === -1) {
        items[id].stat = "active";
        setItems([...items]);
        setPrev(id);
    } else {
        check(id);
    }
}

   return (
        <div className="container">
            {gameCompleted ? (
                <div className="game-completed">
                    <h2>Félicitations ! Vous avez gagné !</h2>
                    <RestartButton onResetGame={onResetGame} />
                </div>
            ) : (
                items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                ))
            )}
        </div>
    )
    
}
export default Cards;