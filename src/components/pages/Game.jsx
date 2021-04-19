import tree from "../../story/DecisionTree";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Game = () => {
  //set State
  const [gameState, setGameState] = useState(tree.root);

  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const incrementFrame = () => {
      console.log(`./warrior/${gameState.animation}/WALK${frame}.png`);
      if (frame === 9) {
        setFrame(0);
      } else {
        setFrame(frame + 1);
      }
    };
    const interval = setInterval(incrementFrame, 70);
    return () => {
      clearInterval(interval);
    };
  }, [frame]);

  return (
    <div className="story-container">
      <div className="story-text">
        <div className="story-paragraph">{gameState.story}</div>
      </div>

      <div className="story-background">
        <img src={gameState.backgroundImg} alt="background" />
      </div>
      <div className="animation">
        <img
          src={`./warrior/${gameState.animation}/${gameState.animation}${frame}.png`}
          alt="animation"
        />
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
