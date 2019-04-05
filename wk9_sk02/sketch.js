let x, y;
let radius;
let col = [];

let circles = [];
let alpha;

let dirX, dirY;
let angle;
let xOffset, yOffset;

let width = 960;
let height = 720;

let noiseVal = 0;
let bigRadius;

let EXPORT = false;

function setup() {
  angleMode(DEGREES);
  frameRate(2);
  createCanvas(width, height);
  radius = 10;

  for (let i = 0; i < 7700; i++) {
    alpha = random(1, 100);
    col[i] = color(255, alpha);
    circles[i] = new Circle();
  }
}

function draw() {
  background(0);
  console.log(frameCount);
  // fill(0, 15);
  // rect(0, 0, width, height);

  for (let i = 0; i < circles.length; i++) {
    fill(col[i]);
    // circles[i].update();
    circles[i].drawCircle();
  }
  bigRadius = 400 * noise(noiseVal);
  noiseVal += 0.1;

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 250);
  }
  if (frameCount > 250) {
    noLoop();
  }
}

function Circle() {
  let centeroff = width / 2 + random(-100, 100) * TWO_PI;
  // bigRadius *= noise(noiseVal);

  // this.x = (width / 2) * cos(TWO_PI) + random(-200, 200);
  // this.y = (height / 2) * sin(TWO_PI) + random(-200, 200);

  this.drawCircle = function() {
    let r = bigRadius * sqrt(random());

    this.x = r * cos(centeroff) + width / 2;
    this.y = r * sin(centeroff) + height / 2;
    angle = random(360);
    let distance = random(10);
    xOffset = cos(angle) * distance;
    yOffset = sin(angle) * distance;
    noStroke();

    ellipse(this.x + xOffset, this.y + yOffset, radius, radius);
  };
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
