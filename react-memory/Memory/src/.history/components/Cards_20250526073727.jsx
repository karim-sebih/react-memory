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
        if (items[current].id === items[prev].id) {
            setItems(prevItems => {
                const newItems = [...prevItems];
                newItems[current] = { ...newItems[current], stat: "correct" };
                newItems[prev] = { ...newItems[prev], stat: "correct" };
                return newItems;
            });
            setPrev(-1);
        } else {
            setItems(prevItems => {
                const newItems = [...prevItems];
                newItems[current] = { ...newItems[current], stat: "wrong" };
                newItems[prev] = { ...newItems[prev], stat: "wrong" };
                return newItems;
            });
            setTimeout(() => {
                setItems(prevItems => {
                    const newItems = [...prevItems];
                    newItems[current] = { ...newItems[current], stat: "" };
                    newItems[prev] = { ...newItems[prev], stat: "" };
                    return newItems;
                });
                setPrev(-1);
            }, 1000);
        }
    }

    function handleClick(id) {
        if (prev === -1) {
            setItems(prevItems => {
                const newItems = [...prevItems];
                newItems[id] = { ...newItems[id], stat: "active" };
                return newItems;
            });
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