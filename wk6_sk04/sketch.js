let cam;
let cols, rows;
let w, h;
let scale = 2;
let terrain = [];
let z;

function setup() {
  createCanvas(640, 480, WEBGL);
  pixelDensity(1);
  w = width;
  h = height;
  cols = w / scale;
  rows = h / scale;

  cam = createCapture(VIDEO);
  // cam.size(width / vScale, height / vScale);
  cam.size(cols, rows);

  for (let x = 0; x < cam.width; x++) {
    terrain[x] = [];
    for (let y = 0; y < cam.height; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  background(0);
  cam.loadPixels();
  cam.hide();

  // translate(0, 50);
  translate(-width / 2, -height / 2, 0);
  // rotateX(PI / 8);
  // translate(-width / 2, -height / 8);

  for (let y = 0; y < cam.height; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cam.width; x++) {
      let pixelRed = getQuick(cam, x, y)[0];
      let pixelGreen = getQuick(cam, x, y)[1];
      let pixelBlue = getQuick(cam, x, y)[2];
      let pixelAlpha = getQuick(cam, x, y)[3];
      let bright = (pixelRed + pixelBlue + pixelGreen) / 3;

      // z = terrain[x][y];
      z = map(bright, 0, 255, 0, 200);
      // z1 = terrain[x][y + 1];
      z1 = map(bright, 0, 255, 0, 200);
      fill(pixelRed, pixelGreen, pixelBlue);
      noStroke();
      vertex(x * scale, y * scale, z);
      vertex(x * scale, (y + 1) * scale, z1);
    }
    endShape();
  }
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
