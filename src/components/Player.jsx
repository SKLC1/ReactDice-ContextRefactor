import "../style.css";
import { useContext } from 'react';
import { myContext } from '../context/myContext';

const Player = ({ playerName, totalScore, currentScore }) => {
  return (
    <div className="playersClass">
      <div>{playerName}</div>
      <div>{totalScore}</div>
      <div>{currentScore}</div>
    </div>
  );
};
export default Player;
