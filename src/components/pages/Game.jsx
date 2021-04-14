import tree from "../../story/DecisionTree";
import { useState } from "react";
import { Link } from "react-router-dom";
import Canvas from "../Canvas";

const Game = () => {
  //set State
  const [gameState, setGameState] = useState(tree.root);
  console.log(gameState.results);

  //insert drawn fxn into CANVAS component
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className="story-container">
      <div className="story-text">
        <div className="story-paragraph">{gameState.story}</div>
      </div>

      <div className="story-background">
        <img src={gameState.backgroundImg} alt="background" />
      </div>

      {/* ------------------------------CANVAS HERE----------------------- */}
      <Canvas draw={draw} />

      <div className="button-container">
        {gameState.choiceOneText && (
          <button
            className="story-button"
            onClick={() => setGameState(gameState.choiceOne)}
          >
            {gameState.choiceOneText}
          </button>
        )}

        {gameState.choiceTwoText && (
          <button
            className="story-button"
            onClick={() => setGameState(gameState.choiceTwo)}
          >
            {gameState.choiceTwoText}
          </button>
        )}

        {gameState.results && (
          <Link to={"/"} className="results-link">
            {gameState.results}
          </Link>
        )}
      </div>
    </div>
  );
};
export default Game;
