let cols, rows;
let scale = 30;
let w;
let h;
let xOffset, yOffset;
let terrain = [];
let flying = 0;
let r;
let z;

// let colorFrom = color(87,59,12);
// let colorTo = color(34, 139, 34);
// let colorLerp = lerpColor(colorFrom, colorTo, );

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  w = width;
  h = height;
  cols = w / scale;
  rows = h / scale;

  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  background(0);

  flying -= 0.02;
  yOffset = flying;
  for (let y = 0; y < rows - 1; y++) {
    xOffset = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xOffset, yOffset), 0, 1, -100, 100);
      xOffset += 0.3;
    }
    yOffset += 0.3;
  }

  translate(0, 50);
  rotateX(PI / 3);
  translate(-width / 2, -height / 6);
  // fill(255, 0, 0, 70);

  for (let y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      z = terrain[x][y];
      z1 = terrain[x][y + 1];

      r = map(z, -100, 100, 0, 255);
      r1 = map(z1, -100, 100, 0, 255);

      fill(r, 40, 40);
      vertex(x * scale, y * scale, z);
      vertex(x * scale, (y + 1) * scale, z1);
    }
    endShape();
  }
}
