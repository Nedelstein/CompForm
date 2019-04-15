let x, y;
radius = 280;
let fft;

function preload() {
  badBunny = loadSound("laromana.mp3");
}

function setup() {
  createCanvas(512, 512);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  fft = new p5.FFT(0.6, 256);
  fft.setInput(badBunny);

  startButton = createButton("start");
  startButton.mousePressed(start);

  stopButton = createButton("stop");
  stopButton.mousePressed(stop);
}

function start() {
  badBunny.loop();
}

function stop() {
  badBunny.pause();
}

function draw() {
  //   background(0);
  fill(0, 15);
  rect(0, 0, width, height);
  noStroke();

  const data = fft.analyze();

  push();
  translate(width / 2, height / 2);

  for (let i = 0; i < data.length; i++) {
    let amp = data[i];
    radius = map(amp, 0, 512, 100, 200);
    let angle = map(i, 0, data.length, 0, 360);
    x = radius * cos(angle);
    y = radius * sin(angle);

    let r = map(x, 0, 200, 10, 255);
    let b = map(y, 0, 200, 20, 255);

    fill(r, 50, b);
    rect(x, y, 20, 2);

    radius2 = map(amp, 0, 512, 240, 80);
    x2 = radius2 * cos(angle);
    y2 = radius2 * sin(angle);

    fill(100, b, r);
    rect(y2, x2, 20, 10);
    triangle(x2, y2, 0, 0, 10, -10);
  }
  pop();
}
