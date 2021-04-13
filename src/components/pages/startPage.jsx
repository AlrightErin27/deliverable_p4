import tree from "../../story/DecisionTree";
import { useState } from "react";

const StartPage = () => {
  //set State
  const [gameState, setGameState] = useState(tree.root);
  // console.log(gameState);

  return (
    <div className="startPg-container">
      <div className="story-text">
        <div className="paragraph">{gameState.story}</div>
      </div>
      <div className="start-canvas">
        <button className="adventure-button" onClick={() => setGameState(gameState.choiceOne)}>
          {gameState.choiceOneText}
        </button>
        <button className="adventure-button" onClick={() => setGameState(gameState.choiceTwo)}>
          {gameState.choiceTwoText}
        </button>
      </div>
    </div>
  );
};
export default StartPage;
