import "../style.css";
const Tools = ({ imgNumber1, imgNumber2, handleClick, handleHold }) => {
  return (
    <div className="toolsClass">
      <img src={imgNumber1} width="70px" height="70px" alt="#" />
      <img src={imgNumber2} width="70px" height="70px" alt="#" />
      <button onClick={handleClick} style={{ margin: "1rem" }}>
        Roll dice
      </button>
      <button onClick={handleHold}>Hold</button>
      <div>
        <h3>Max Score</h3>
        <input type="number" />
      </div>
    </div>
  );
};
export default Tools;
