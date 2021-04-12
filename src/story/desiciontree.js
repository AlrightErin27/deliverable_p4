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
  "START.jpeg"
);

const aStory = new Node(
  story.aStory.story,
  story.aStory.choiceA,
  story.aStory.choiceB,
  "A.jpeg"
);

const bStory = new Node(
  story.bStory.story,
  story.bStory.choiceA,
  story.bStory.choiceB,
  "B.jpeg"
);

const cStory = new Node(
  story.cStory.story,
  story.cStory.choiceA,
  story.cStory.choiceB,
  "C.jpeg"
);

const dStory = new Node(
  story.dStory.story,
  story.dStory.choiceA,
  story.dStory.choiceB,
  "D.jpeg"
);

const eStory = new Node(
  story.eStory.story,
  story.eStory.choiceA,
  story.eStory.choiceB,
  "E.jpeg"
);

const fStory = new Node(
  story.fStory.story,
  story.fStory.choiceA,
  story.fStory.choiceB,
  "F.jpeg"
);

//connect start story to story "A"
//Start Choices:
start.choiceOne = aStory;
start.choiceTwo = bStory;
//A Story Choices
aStory.choiceOne = cStory; //WIN
aStory.choiceTwo = dStory; //LOSE
//B Story Choices
bStory.choiceOne = eStory; //LOSE
bStory.choiceTwo = fStory; //WIN

const tree = new DecisionTree(start);
console.log(tree);
module.exports = tree;
