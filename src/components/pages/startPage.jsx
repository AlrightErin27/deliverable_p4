import story from "../../story/story.json";

const startPage = () => (
  <div className="startPg-container">
    <div className="story-text">
      <p>{story.startStory.story}</p>
    </div>
  </div>
);
export default startPage;
