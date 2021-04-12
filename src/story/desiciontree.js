//import from json
const story = require("./story.json");
//makes root of tree
class DecisionTree {
  constructor(node) {
    this.root = node;
  }
}

// Node class
class Node {
  constructor(story, choiceOneText, choiceTwoText, backgroundImg) {
    this.story = story;
    this.choiceOne = null; //refers to next page (node)
    this.choiceTwo = null;
    this.choiceOneText = choiceOneText; //text on the button
    this.choiceTwoText = choiceTwoText;
    this.backgroundImg = backgroundImg;
  }
}

const start = new Node(
  story.startStory.story,
  story.startStory.choiceA,
  story.startStory.choiceB,
  "skullcave.jpeg"
);

const aStory = new Node(
  story.aStory.story,
  story.aStory.choiceA,
  story.aStory.choiceB,
  "witchhousecave.jpeg"
);

const bStory = new Node(
  story.bStory.story,
  story.bStory.choiceA,
  story.bStory.choiceB,
  "image.jpeg"
);

//connect start story to story "A"
start.choiceOne = aStory;
start.choiceTwo = bStory;

const tree = new DecisionTree(start);
console.log(tree);
module.exports = tree;
