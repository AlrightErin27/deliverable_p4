import tree from "../../story/DecisionTree";
import { useState } from "react";
import { Link } from "react-router-dom";
import Canvas from "../Canvas";
// import image_local from "../../warrior";

const Game = () => {
  //set State
  const [gameState, setGameState] = useState(tree.root);

  //fxn makes canvas controllable via css
  function resizeCanvasToDisplaySize(canvas) {
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true; // here you can return some useful info like delta width and
      //delta height instead of just true
      // this information can be used in the next redraw...
    }
    return false;
  }

  //insert drawn fxn into CANVAS component
  //   Draw fxn: Takes the frame counter
  //   as argument & radius of the circle changes/ time.
  //   We also clear the canvas with clearRect fxn, otherwise it
  //   would draw over the previous draw every iteration.
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.drawImage();
    // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
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
      <Canvas draw={draw} className="canvas" />

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
