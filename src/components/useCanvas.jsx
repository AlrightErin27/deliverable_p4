import { useRef, useEffect } from "react";

const useCanvas = (draw, options = {}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext(options.context || "2d");
    // The frameCount variable: This is a control variable
    // that counts frames. If you prefer, you can use a counter
    // for time instead. The goal of this variable is provide a
    // clock to our draw function since the animation is time dependent.
    let frameCount = 0;
    let animationFrameId;

    /////////Render Fxn/////////////
    // Function render: All the steps that will be repeated in
    // the animation were wrapped in a function called render
    // which will be called recursively by the requestAnimationFrame method.
    const render = () => {
      frameCount++;
      //draw fxn
      // Draw function: The draw function now takes the frame counter
      // as argument and the radius of the circle changes over time.
      // We also clear the canvas with clearRect function, otherwise
      // it would draw over the previous draw every iteration.
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      // Cancel animation frame: The function returned in the useEffect
      // callback (aka clean up function) is called right before the
      // component un-mount. That way we can ensure that our animation
      // frame is cancelled after our canvas component un-mount.
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};
export default useCanvas;
