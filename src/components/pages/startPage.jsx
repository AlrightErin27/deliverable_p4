import story from "../../story/story.json";

const startPage = () => (
  <div className="startPg-container">
    <div className="story-text">
      <p className="paragraph">{story.startStory.story}</p>
    </div>
    <div className="start-canvas"></div>
  </div>
);
export default startPage;
