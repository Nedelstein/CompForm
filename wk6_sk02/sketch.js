let lastSupper;
let rotation;
let rectSubtractor = 1;

function preload() {
  lastSupper = loadImage("last_supper.jpg");
  noLoop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  lastSupper.loadPixels();
}

function draw() {
  background(0, 50, 127);
  // image(lastSupper, 0, 0, width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let pixelRed = getQuick(lastSupper, x, y)[0];
      // let pixelGreen = getQuick(lastSupper, x, y)[1];
      // let pixelBlue = getQuick(lastSupper, x, y)[2];
      // let pixelAlpha = getQuick(lastSupper, x, y)[3];

      if (pixelRed > random(255)) {
        drawCircles(255, x, y);
      } else {
        drawCircles(0, x, y);
      }
    }
  }
  updatePixels();
}

function drawCircles(col, x, y) {
  fill(random(255), col, random(255));
  noStroke();
  // push();
  // translate(x, y);
  // rotate(rotation);
  ellipse(x, y, 1, 1);
  // pop();
  // rotation += 0.05;
  // rectSubtractor += 0.1;
}

function getQuick(img, x, y) {
  var i = (y * img.width + x) * 4;
  return [
    img.pixels[i]
    // lastSupper.pixels[i + 1],
    // lastSupper.pixels[i + 2],
    // lastSupper.pixels[i + 3]
  ];
}
