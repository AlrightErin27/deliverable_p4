import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  //   The frameCount variable: This is a control variable that counts frames.
  //   If you prefer, you can use a counter for time instead. The goal of this
  //   variable is provide a clock to our draw function since the animation
  //   is time dependent.
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Draws here
    // Fxn render: All the steps that will be repeated in
    // the animation were wrapped in a fxn called render which will be
    // called recursively by the requestAnimationFrame method.
    const render = () => {
      frameCount++;
      //   Draw function: The draw function now takes the frame counter
      //   as argument and the radius of the circle changes over time.
      //   We also clear the canvas with clearRect function, otherwise it
      //   would draw over the previous draw every iteration.
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      // Cancel animation frame: The function returned in the
      // useEffect callback (aka clean up function) is called right
      // before the component un-mount. That way we can ensure that
      // our animation frame is cancelled after our canvas component un-mount.
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
