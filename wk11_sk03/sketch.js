let blobs = [];

let synthLoop;
let trigger;

function preload() {
  synthLoop = loadSound("synth.mp3");
  // trigger = loadSound("trigger.mp3");
}

function setup() {
  createCanvas(400, 400);

  synthLoop.loop();

  pixelDensity(1);
  colorMode(HSB);

  for (let i = 0; i < 5; i++) {
    blobs.push(new Blob(random(400), random(400)));
  }
}

function draw() {
  // background(0);
  loadPixels();

  for (let x = 0; x < 400; x++) {
    for (let y = 0; y < 400; y++) {
      let sum = 0;
      for (let i = 0; i < blobs.length; i++) {
        let xDif = x - blobs[i].x;
        let yDif = y - blobs[i].y;

        let distance = sqrt(xDif * xDif + yDif * yDif);

        // if (distance < blobs[i].r - 10) {
        //   console.log("working");
        // }
        console.log(distance);
        sum += (20 * blobs[i].r) / distance;
      }
      set(x, y, color(sum, 255, 255));
    }
  }

  for (let i = 0; i < blobs.length; i++) {
    // blobs[i].show();
    blobs[i].update();
  }
  updatePixels();
}
class Blob {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, TWO_PI);
    this.xSpeed = random(3, 7) * Math.cos(angle);
    this.ySpeed = random(3, 7) * Math.sin(angle);
    this.r = random(30, 55);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
  show() {
    noFill();
    strokeWeight(3);
    ellipse(this.x, this.y, this.r, this.r);
  }

  intersects(other) {
    let distance = dist(this.x, this.y, other.x, other, y);

    if (distance < this.r) {
      return true;
    } else {
      return false;
    }
  }
}
