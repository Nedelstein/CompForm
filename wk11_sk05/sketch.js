let mouthX, mouthY;

let mic;
let bubbles;

function setup() {
  createCanvas(600, 600);
  ellipseMode(CENTER);

  mouthX = 150;
  mouthY = 75;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  noStroke();

  micLevel = mic.getLevel();

  fill(255, 255, 0);
  ellipse(width / 2, height / 2, 400, 400);

  fill(255);
  ellipse(width / 2 - 80, height / 2 - 80, 80, map(micLevel, 0, 0.15, 50, 25));

  ellipse(width / 2 + 80, height / 2 - 80, 80, map(micLevel, 0, 0.15, 50, 25));

  fill(0);
  ellipse(width / 2 + 80, height / 2 - 80, 15, 15);
  ellipse(width / 2 - 80, height / 2 - 80, 15, 15);

  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(
    width / 2,
    height / 2 + 80,
    map(micLevel, 0, 0.15, 50, 140),
    map(micLevel, 0, 0.15, 30, 130)
  );

  // console.log(micLevel);
  //   mouthX = constrain(400 - micLevel, 40, 300);
}
