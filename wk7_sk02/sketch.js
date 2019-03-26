let myTurtle;
let h, s, b;
let time;

function setup() {
  createCanvas(800, 800);
  // frameRate(30);
  smooth();
  noFill();
  stroke(255);
  myTurtle = new Turtle();
  angle = 0.1;
}

function draw() {
  background(255);
  stroke(127);

  myTurtle.penUp();
  myTurtle.moveTo(width / 2, 750);
  myTurtle.turnTo(-90);
  myTurtle.penDown();
  drawBranch(70);
  angle += 0.5;

  myTurtle.penUp();
  myTurtle.moveTo(width / 2, 70);
  myTurtle.turnTo(90);
  myTurtle.penDown();
  drawBranch(70);

  myTurtle.penUp();
  myTurtle.moveTo(70, height / 2);
  myTurtle.turnTo(0);
  myTurtle.penDown();
  drawBranch(70);

  myTurtle.penUp();
  myTurtle.moveTo(width - 70, height / 2);
  myTurtle.turnTo(180);
  myTurtle.penDown();
  drawBranch(70);
}

function drawBranch(length) {
  if (length < 6) {
    return;
  }

  // draw this branch
  myTurtle.moveForward(length);

  // left child
  myTurtle.pushState();
  myTurtle.turnLeft(angle);
  myTurtle.turnLeft(35);
  drawBranch(length * 0.75);

  myTurtle.popState();

  // right child
  myTurtle.pushState();
  myTurtle.turnRight(angle);
  myTurtle.turnRight(35);
  drawBranch(length * 0.75);
  myTurtle.popState();
}
