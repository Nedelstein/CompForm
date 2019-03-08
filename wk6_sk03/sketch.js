let cam;
let vScale = 16;

let particles = [];

function setup() {
  createCanvas(640, 480);
  frameRate(15);
  pixelDensity(1);
  cam = createCapture(VIDEO);
  cam.size(width / vScale, height / vScale);

  for (let i = 0; i < 1; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  background(0, 5);
  noStroke();
  // stroke(70, 102, 255);

  cam.loadPixels();
  cam.hide();
  // loadPixels();
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let pixelRed = getQuick(cam, x, y)[0];
      let pixelGreen = getQuick(cam, x, y)[1];
      let pixelBlue = getQuick(cam, x, y)[2];
      let pixelAlpha = getQuick(cam, x, y)[3];

      let bright = (pixelRed + pixelBlue + pixelGreen) / 3;

      var threshold = 150;
      for (let i = 0; i < particles.length; i++) {
        if (bright < threshold) {
          particles[i] = new Particle(x * vScale, y * vScale);
          particles[i].update();
          particles[i].show();
        }
      }
    }
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

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(1, 20);

    this.update = function() {
      this.y += random(-10, 10);
      this.x += random(-10, 10);
    };
    this.show = function() {
      let px = floor(this.x / vScale);
      let py = floor(this.y / vScale);
      let col = getQuick(cam, px, py);
      fill(col[0], col[1], col[2]);

      ellipse(this.x, this.y, this.r, this.r);
    };
  }
}
