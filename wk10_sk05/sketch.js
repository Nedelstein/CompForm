let arby;
let url =
  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Arby%27s_logo.svg/1200px-Arby%27s_logo.svg.png";

const slogan = {
  sentence: "Arby's, #pronoun# #helpingVerb# #article# #noun#",
  pronoun: ["We", "They", "I", "You", "Somebody", "A friend I know"],
  helpingVerb: [
    "have",
    "had",
    "lost",
    "command",
    "demand",
    "require",
    "sweat",
    "want",
    "pray for",
    "lick",
    "sleep with",
    "believe",
    "miss"
  ],
  article: ["the", "those", "my", "your", "our", "hidden", "mystery"],
  noun: [
    "Meats",
    "Meat",
    "Gabagoo",
    "Cottage Cheese",
    "Mayonaise",
    "Pickles",
    "Head Cheese",
    "Meat Sweats",
    "Ham Hocks",
    "Loose Meat",
    "Hot Beef Sunday",
    "Scrapple"
  ]
};

let button;
function preload() {
  arby = loadImage(url);
}

function setup() {
  createCanvas(400, 400);
  arby.resize(300, 256);
  // button = createButton("Slogan Generator");
  // button.position(160, 350);
  // button.style("background-color", "red");
  // button.style("h", "blue");
}

function draw() {
  background(255);
  image(arby, 100, 100);
  // button.mousePressed(newSlogan);
  // let writeup = createP(newSlogan.value);
  // console.log(writeup);
}

function newSlogan() {
  let grammar = tracery.createGrammar(slogan);
  story = grammar.flatten("#sentence#");
  const storyP = document.createElement("createDiv");
  storyP.style = "font-size: 30px; color: red; text-align: center";
  // storyP.position(400, 200);

  // storyDiv;

  storyP.textContent = story;
  document.body.insertAdjacentElement("beforeend", storyP);
  // console.log(story);
}

setTimeout(newSlogan, 10);
