let cam;

let rVid, gVid, bVid;

let rotX, rotY;

let vScale = 4;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  rectMode(CENTER);
  imageMode(CENTER);

  cam = createCapture(VIDEO);
  // cam.size(width, height);
  cam.size(width / vScale, height / vScale);
  // rVid = image(cam, width / 2, height / 2);
  // gVid = image(cam, width / 2, height / 2);
  // bVid = image(cam, width / 2, height / 2);
}

function draw() {
  background(0);
  noStroke();
  loadPixels();
  cam.loadPixels();
  // rVid.loadPixels();
  // gVid.loadPixels();
  // bVid.loadPixels();

  cam.hide();

  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let pixelRed = getQuick(cam, x, y)[0];
      let pixelGreen = getQuick(cam, x, y)[1];
      let pixelBlue = getQuick(cam, x, y)[2];
      let pixelAlpha = getQuick(cam, x, y)[3];
      let bright = (pixelRed + pixelBlue + pixelGreen) / 3;

      let r = 255 - pixelRed;
      let g = 255 - pixelGreen;
      let b = 255 - pixelBlue;

      fill(r, g, b);
      rect(x * vScale, y * vScale, vScale, vScale);
      // fill(pixelRed, 0, 0);
      // image(cam, 0, 0);
      // cam.updatePixels();
      // updatePixels();
      // push();
      // fill(pixelRed, 0, 0);
      // rVid.updatePixels();
      // pop();

      // push();
      // fill(0, pixelGreen, 0);
      // gVid.updatePixels();
      // pop();

      // push();
      // fill(0, 0, pixelBlue);
      // bVid.updatePixels();
      // pop();
    }
  }
  // image(cam, 0, 0);'
  cam.updatePixels();
}
function getQuick(img, x, y) {
  var i = (img.width - x + 1 + img.width * y) * 4;
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3]
  ];
}
