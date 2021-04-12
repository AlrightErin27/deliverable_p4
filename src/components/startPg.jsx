import candle from "../game-imgs/candle.gif";

const startPg = () => (
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

export default startPg;
