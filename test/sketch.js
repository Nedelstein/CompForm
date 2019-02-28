let x = 0;
let y = 0;

let noiseIndex = 0;

let circles = [];

function setup() {
  createCanvas(500, 500);

  x = random(0, width);
  y = random(0, height);

  for (let i = 0; i < 20; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(0);
  fill(255);

  for (let i = 0; i < circles.length; i++) {
    let size = map(circles[i].y, height, 0, 5, 20);
    let lerpSpeed = map(size, 5, 20, 0.1, 0.05);

    circles[i].x += (mouseX - circles[i].x) * lerpSpeed;
    circles[i].y += (mouseY - circles[i].x) * lerpSpeed;

    // circles[i].x = lerp(x, mouseX, 0.1);
    // circles[i].y = lerp(y, mouseY, 0.1);

    noiseIndex += 0.01;
    let noiseOffset = (noise(noiseIndex) - 0.5) * 50;

    ellipse(circles[i].x, circles[i].y, size, size);
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }
}
