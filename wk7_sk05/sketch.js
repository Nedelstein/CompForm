let myTurtle;
let axiom = "F";
let step = 20;
let numLoops = 4;
let theRules = [];
theRules[0] = ["F", "F+F-F-F-G+F+F+F-F"];
theRules[1] = ["G", "GGG"];
let angle = 90;
let currentAngle = 0;
let x, y;
let whereInString = 0;
let h;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 100);
  myTurtle = new Turtle();
  background(0);
  x = 20;
  y = height / 2;

  myTurtle.penUp();
  myTurtle.moveTo(x, y);
  myTurtle.penDown();

  for (let i = 0; i < numLoops; i++) {
    axiom = lSystem(axiom);
  }
}

function draw() {
  h = map(x, 0, height, 0, 100);
  stroke(h, 100, 100);
  myTurtle.moveTo(x, y);
  let k = axiom[whereInString];
  if (k == "F") {
    x1 = x + step * cos(radians(currentAngle));
    y1 = y + step * sin(radians(currentAngle));
    myTurtle.moveTo(x1, y1);
    x = x1;
    y = y1;
  } else if (k == "+") {
    currentAngle += angle;
  } else if (k == "-") {
    currentAngle -= angle;
  }
  whereInString++;

  if (whereInString > axiom.length - 1) {
    whereInString = 0;
  }
}

function lSystem(s) {
  let outputString = "";

  //iterate through the rules looking for matches
  for (let i = 0; i < s.length; i++) {
    let isMatch = 0;
    for (let j = 0; j < theRules.length; j++) {
      if (s[i] == theRules[j][0]) {
        outputString += theRules[j][1];
        isMatch = 1;
        break;
      }
    }

    //if nothing matches, copy symbol over
    if (isMatch == 0) {
      outputString += s[i];
    }
  }
  return outputString;
}
