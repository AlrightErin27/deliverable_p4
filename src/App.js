import "./App.css";
import React from "react";
import Canvas from "./components/Canvas";

function App() {
  /////////////////////////////
  function resizeCanvasToDisplaySize(canvas) {
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true; // here you can return some useful info
      //like delta width and delta height instead of just true
      // this info can be used in the next redraw...
    }
    return false;
  }
  //////////////////////

  //insert drawn fxn into canvas component
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return <Canvas draw={draw} />;
}

export default App;
