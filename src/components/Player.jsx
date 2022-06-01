import "../style.css";
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
