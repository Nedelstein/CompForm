let myTurtle;

let h, s, b;
let thickness;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 100);
  myTurtle = new Turtle();
  s = 100;
  b = 100;
  h = 100;
}

function draw() {
  background(0);

  myTurtle.pushState();
  myTurtle.moveTo(0, 0);
  myTurtle.penDown();
  for (let i = 0; i < 15000; i++) {
    h = map(myTurtle.y, 0, height, 1, 100);
    // s = map(myTurtle.y, 0, height, 1, 100);
    stroke(h, s, b, 30);
    squares();
  }
  myTurtle.popState();

  myTurtle.penUp();
  myTurtle.moveTo(width / 4, height / 1.5);

  myTurtle.penDown();
  myTurtle.pushState();
  for (let i = 0; i < 500; i++) {
    h = map(myTurtle.x, 0, width, 1, 100);
    // thickness = map(myTurtle.x, width / 4, (width * 2) / 3, 4, 1);
    stroke(h, s, b);
    strokeWeight(1);
    myTurtle.moveForward(width / 2);
    myTurtle.pushState();
    h = map(myTurtle.x, width, 0, 30, 100);
    stroke(h, s, b);
    // strokeWeight(0.5);
    innerLine();
    myTurtle.popState();
    myTurtle.turnLeft(99);

    // myTurtle.turnLeft(random(90, 99));
  }
  muTurtle.popState();
  // noLoop();
}

function innerLine() {
  myTurtle.turnLeft(135);
  myTurtle.moveForward(350);
}

function squares() {
  // myTurtle.penDown();
  checkEdges();
  myTurtle.moveForward(random(1, 10) * 5);
  myTurtle.turnRight(90);
  myTurtle.moveForward(random(1, 10) * 5);
  myTurtle.turnLeft(90);
  myTurtle.moveForward(random(1, 10) * 5);
  myTurtle.turnRight(90);
  myTurtle.moveForward(random(1, 10) * 5);
  myTurtle.turnLeft(90);
  myTurtle.moveForward(random(1, 10) * 5);
  myTurtle.turnRight(90);
}

function checkEdges() {
  if (myTurtle.x < 0 || myTurtle.x > width) {
    myTurtle.turnLeft(180);
  } else if (myTurtle.y < 0 || myTurtle.y > height) {
    myTurtle.turnLeft(180);
  }
}
