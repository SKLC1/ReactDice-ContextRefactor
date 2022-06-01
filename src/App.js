import React from "react";
import Player from "./components/Player";
import { useState } from "react";
import "./style.css";
import Tools from "./components/Tools";
function App() {
  const [totalScore1, setTotalScore1] = useState(0);
  const [currentScore1, setCurrentScore1] = useState(0);
  const [totalScore2, setTotalScore2] = useState(0);
  const [currentScore2, setCurrentScore2] = useState(0);
  const [imgNumber1, setImgNumber1] = useState("/images/pic-0.png");
  const [imgNumber2, setImgNumber2] = useState("/images/pic-0.png");
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);
  const [player1name, setPlayer1name] = useState("player1");
  const [player2name, setPlayer2name] = useState("player2");

  const handleClick = () => {
    const rand1 = Math.ceil(Math.random() * 6);
    const rand2 = Math.ceil(Math.random() * 6);
    setImgNumber1(`/images/pic-${rand1}.png`);
    setImgNumber2(`/images/pic-${rand2}.png`);
    if (player1 === true) {
      setCurrentScore1((prev) => {
        return prev + rand1 + rand2;
      });
      if (totalScore1 > 100) {
        setPlayer2name("win");
      }
    }
    if (player2 === true) {
      setCurrentScore2((prev) => {
        return prev + rand1 + rand2;
      });
    }
  };
  const handleHold = () => {
    setPlayer1((prev) => !prev);
    setPlayer2((prev) => !prev);
    setTotalScore1((prev) => prev + currentScore1);
    setCurrentScore1(0);
    setTotalScore2((prev) => prev + currentScore2);
    setCurrentScore2(0);
  };
  return (
    <div className="container">
      <div className="playerinfo">
        <Player
          playerName={player1name}
          totalScore={totalScore1}
          currentScore={currentScore1}
        />
      </div>
      <div className="toolsContainer">
        <Tools
          imgNumber1={imgNumber1}
          imgNumber2={imgNumber2}
          handleClick={handleClick}
          handleHold={handleHold}
        />
      </div>
      <div className="playerinfo">
        <Player
          playerName="player2"
          totalScore={totalScore2}
          currentScore={currentScore2}
        />
      </div>
    </div>
  );
}

export default App;
