import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

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
