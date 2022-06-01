import { createContext, useState, useContext } from 'react';

export const myContext = createContext();

function ContextProvider({ children }) {
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

  return (
    <myContext.Provider value={
      {totalScore1, setTotalScore1,
        currentScore1, setCurrentScore1,
        totalScore2, setTotalScore2,
        currentScore2, setCurrentScore2,
        imgNumber1, setImgNumber1,
        imgNumber2, setImgNumber2,
        player1, setPlayer1,
        player2, setPlayer2,
        player1name, setPlayer1name,
        player2name, setPlayer2name,
      }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;