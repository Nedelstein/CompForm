let myTurtle;
let n;

let x;
let r, g, b;

function setup() {
  createCanvas(700, 700);
  myTurtle = new Turtle();
  // noLoop();
  x = 80;
}

function draw() {
  background(0);

  n = 10 + noise(frameCount * 0.006, frameCount * 0.006) * -2;

  for (let i = 0; i < 30; i++) {
    r = map(i, 19, 0, 255, 10);
    g = map(i, 0, 19, 30, 150);
    b = map(i, 19, 0, 70, 200);

    stroke(r, g, b);
    myTurtle.penUp();
    myTurtle.moveTo(x + i * 20, height - 50);
    myTurtle.turnTo(-135 * n);
    myTurtle.penDown();

    drawFeather(100);
  }
}

function drawFeather(length) {
  if (length < 2) {
    return;
  }
  strokeWeight(length / 10);

  myTurtle.moveForward(length * 0.5);

  myTurtle.turnRight(n);
  myTurtle.moveForward(length * 0.5);

  myTurtle.pushState();
  myTurtle.turnRight(n * -length);
  drawFeather(length * 0.9);
  myTurtle.popState();
}

function drawLeft() {
  // myTurtle.pushState();
  myTurtle.penDown();
  strokeWeight(length / 10);
  myTurtle.moveForward(length * 0.1);
  myTurtle.turnLeft(random(10, 70));
  myTurtle.moveForward(length / 4);
  // myTurtle.popState();
}

function drawRight() {
  // myTurtle.pushState();
  myTurtle.penDown();
  strokeWeight(length / 10);
  myTurtle.moveForward(length * 0.1);
  myTurtle.turnLeft(random(10, 70));
  myTurtle.moveForward(length / 4);
  // myTurtle.popState();
}
