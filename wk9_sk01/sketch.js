let circ;
let x, y;
let w = 1280;
let h = 720;

let xDir = 0;
let yDir = 2;

let xRand, yRand;
let ydiag = false;

let EXPORT = false;

function setup() {
  pixelDensity(1);
  createCanvas(w, h);
  frameRate(60);
  background(0);
  ellipseMode(CENTER);
  x = w / 3;
  y = h - 50;
}

function draw() {
  // fill(0, 10);
  // rect(0, 0, w, h);
  console.log(frameCount);
  blendMode(ADD);
  y = y - yDir;
  x = x + xDir;
  if (y < 100) {
    yDir *= -1;
    xDir = 1;
  }
  if (y > h - 50) {
    yDir *= -1;
    xDir = 0;
  }
  if (x == 396 && y == 60) {
    x *= 0;
    y *= 0;
    // fill(1, 1);
  }

  for (let i = 0; i < 600; i++) {
    fill(255, random(0, 2));
    let xRand = x + map(noise(i * 0.5, frameCount * 0.01, 0), 0, 0.5, -50, 40);
    // let xRand = x + random(-40, 40);
    // let yRand = y + random(-150, -50);
    let yRand = y + map(noise(i * 0.5, frameCount * 0.01, 5), 0, 0.5, -50, 40);

    ellipse(xRand, yRand, random(3, 20), random(3, 20));
  }

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 865);
  }
  if (frameCount > 865) {
    noLoop();
  }
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
