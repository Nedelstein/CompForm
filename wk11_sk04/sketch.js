let curveHorz, curveVert;
let curveStart, curveStop, curveY;

let r, g, b;
let backCol;
let voices;
let reverb;

let frequency;
let delay;
function preload() {
  voices = loadSound("voices.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backCol = 0;
  voices.disconnect();
  reverb = new p5.Reverb();
  delay = new p5.Delay();

  curveStart = 20;
  curveStop = width - 20;
  curveY = height / 2;

  createP("Y Point");
  curveVert = createSlider(10, height - 10, height / 2);

  createP("X Point");
  curveHorz = createSlider(curveStart + 20, curveStop, curveStop / 2);
}

function draw() {
  background(backCol);

  let reverbVal = map(curveHorz.value(), 41, 1276, 1, 30);
  let delayVal = map(curveVert.value(), 10, 717, 0.1, 0.5);

  reverb.process(voices, 0, reverb.process(voices, reverbVal));
  delay.process(voices, 0.12, delayVal, 220);
  delay.setType("pingPong");

  voices.loop();

  let curvePtX = curveHorz.value();
  let curvePtY = curveVert.value();
  noFill();

  r = map(curvePtY, 10, height - 10, 50, 200);
  g = map(curvePtX, curveStart + 20, curveStop, 50, 200);
  b = map(curvePtY, 10, height - 10, 255, 20);
  backCol = map(curvePtX, 10, height - 10, 255, 0);

  strokeWeight(3);
  stroke(r, 255, b);
  stroke(map());
  beginShape();
  curveVertex(curveStart, curveY);
  curveVertex(curveStart, curveY);
  curveVertex(curvePtX, curvePtY);
  curveVertex(curveStop, curveY);
  curveVertex(curveStop, curveY);
  endShape();

  stroke(r, g, 238);
  beginShape();
  curveVertex(curveStart, curveY + 10);
  curveVertex(curveStart, curveY + 10);
  curveVertex(curvePtX, curvePtY + 10);
  curveVertex(curveStop, curveY + 10);
  curveVertex(curveStop, curveY + 10);
  endShape();

  stroke(r, g, 126);
  beginShape();
  curveVertex(curveStart, curveY + 20);
  curveVertex(curveStart, curveY + 20);
  curveVertex(curvePtX, curvePtY + 20);
  curveVertex(curveStop, curveY + 20);
  curveVertex(curveStop, curveY + 20);
  endShape();

  stroke(238, g, 126);
  beginShape();
  curveVertex(curveStart, curveY + 30);
  curveVertex(curveStart, curveY + 30);
  curveVertex(curvePtX, curvePtY + 30);
  curveVertex(curveStop, curveY + 30);
  curveVertex(curveStop, curveY + 30);
  endShape();
}
