import tree from "../../story/DecisionTree";
import { useState } from "react";
import { Link } from "react-router-dom";

const Game = () => {
  //set State
  const [gameState, setGameState] = useState(tree.root);
  console.log(gameState.results);

  return (
    <div className="story-container">
      <div className="story-text">
        <div className="story-paragraph">{gameState.story}</div>
      </div>

      <div className="story-background">
        <img src={gameState.backgroundImg} alt="background" />
      </div>

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
