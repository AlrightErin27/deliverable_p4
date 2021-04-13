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
    this.choiceTwo = null; //refers to next page (node)
    this.choiceOneText = choiceOneText; //text on the button
    this.choiceTwoText = choiceTwoText; //text on the button
    this.backgroundImg = backgroundImg;
  }
}

//ROOT
const start = new Node(
  story.startStory.story,
  story.startStory.choiceA,
  story.startStory.choiceB,
  "/backgrounds/START.jpeg"
);

//LEFT SIDE OF TREE
const aStory = new Node(
  story.aStory.story,
  story.aStory.choiceA,
  story.aStory.choiceB,
  "/backgrounds/A.jpeg"
);

//RIGHT SIDE OF TREE
const bStory = new Node(
  story.bStory.story,
  story.bStory.choiceA,
  story.bStory.choiceB,
  "/backgrounds/B.jpeg"
);

//END STORY: WINNER!!!
//LEFT-left TREE BRANCH
const cStory = new Node(
  story.cStory.story,
  story.cStory.choiceA,
  story.cStory.choiceB,
  "/backgrounds/C.jpeg"
);

//END STORY: LOSER!!!
//LEFT-right TREE BRANCH
const dStory = new Node(
  story.dStory.story,
  story.dStory.choiceA,
  story.dStory.choiceB,
  "/backgrounds/D.jpeg"
);

//END STORY: LOSER!!!
//RIGHT-left TREE BRANCH
const eStory = new Node(
  story.eStory.story,
  story.eStory.choiceA,
  story.eStory.choiceB,
  "/backgrounds/E.jpeg"
);

//END STORY: WINNER!!!
//RIGHT-right TREE BRANCH
const fStory = new Node(
  story.fStory.story,
  story.fStory.choiceA,
  story.fStory.choiceB,
  "/backgrounds/F.jpeg"
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
