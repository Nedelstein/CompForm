let myTurtle;
let x = 560;
let distance;

let r, g, b;

function setup() {
  createCanvas(600, 600);
  background(50);
  myTurtle = new Turtle();

  r = 255;
  g = 201;
  b = 34;
  time = millis();
}

function draw() {
  // background(0);
  time = millis();
  distance = dist(width, height, width / 2, height / 2);
  r = map(frameCount, 0, 300, 255, 99);

  if (g > 255) {
    g = map(time, 0, 50000, 255, 0);
  } else {
    g = map(time, 0, 50000, 0, 255);
  }
  if (b > 255) {
    b = map(time, 0, 4000, 255, 0);
  } else {
    b = map(time, 0, 4000, 0, 255);
  }

  stroke(r, g, b, 150);
  myTurtle.penUp();
  myTurtle.moveTo(width / 2, height / 2);
  myTurtle.penDown();
  for (let i = 0; i < 360; i++) {
    myTurtle.moveForward(2);
    myTurtle.turnLeft(cos(x));
    myTurtle.moveForward(2);
    myTurtle.turnLeft(sin(x));
    myTurtle.moveForward(2);
    myTurtle.turnLeft(tan(x));
  }

  console.log(time);
}
