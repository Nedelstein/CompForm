let h, s, b;
b = 100;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
}

function draw() {
  background(20);

  noStroke();
  ellipseMode(CENTER);

  let noiseFrequency = 1;

  for (let i = 0; i < 100; i++) {
    let x = noise(i * noiseFrequency, 0) * width;
    let y = noise(i * noiseFrequency, 1000) * height;

    let diameter = min(random(5, 20), random(5, 20));
    let h = map(diameter, 5, 20, 0, 100);

    fill(h, 100, b);

    ellipse(x, y, diameter, diameter);
  }

  noLoop();
}
