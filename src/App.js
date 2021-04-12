import "./App.css";
import React from "react";
// import Canvas from "./components/Canvas";
import candle from "./game-imgs/candle.gif";

function App() {
  //////////////////Logical Size Fxn///////////////////////////////
  //this fxn allows css to determine the size of the the canvas
  // function resizeCanvasToDisplaySize(canvas) {
  //   const { width, height } = canvas.getBoundingClientRect();

  //   if (canvas.width !== width || canvas.height !== height) {
  //     canvas.width = width;
  //     canvas.height = height;
  //     return true; // here you can return some useful info
  //     //like delta width and delta height instead of just true
  //     // this info can be used in the next redraw...
  //   }
  //   return false;
  // }
  ////////////////////////////////////////////////////////////////
  //this fxn makes the image not appear blurry or pixelated at any size
  // function resizeCanvas(canvas) {
  //   const { width, height } = canvas.getBoundingClientRect();

  //   if (canvas.width !== width || canvas.height !== height) {
  //     const { devicePixelRatio: ratio = 1 } = window;
  //     const context = canvas.getContext("2d");
  //     canvas.width = width * ratio;
  //     canvas.height = height * ratio;
  //     context.scale(ratio, ratio);
  //     return true;
  //   }

  //   return false;
  // }
  ////////////////////////////////////////////////////////////////

  // const predraw = (context, canvas) => {
  //   context.save();
  //   resizeCanvasToDisplaySize(context, canvas);
  //   const { width, height } = context.canvas;
  //   context.clearRect(0, 0, width, height);
  // };
  //////////////////////////////////////////////
  //insert drawn fxn into canvas component
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //controls ball's color
    ctx.fillStyle = "#800000";
    ctx.beginPath();
    //first two arguments control where the circle is on the canvas
    //third argument controls balls largest size
    //what frame count is multiplied by controls what frequency the ball enlarges
    ctx.arc(150, 100, 30 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  //////////////////////////////////////////////
  // const postdraw = (index, ctx) => {
  //   index++;
  //   ctx.restore();
  // };

  return (
    <div className="app-main-container">
      <h1>Choose Your Own Adventure!</h1>
      <h2 className="h2-title-text">The Tale of a Wondering Soul</h2>
      <h3 className="h3-title-text">In the Withering Kingdom of Halyth</h3>
      <img src={candle} alt="flickeringCandle" className="candle" />
      <div>
        <button className="simple-button">Begin Adventure</button>
      </div>
      {/* <Canvas draw={draw} className="canvas-one" /> */}
    </div>
  );
}

export default App;
