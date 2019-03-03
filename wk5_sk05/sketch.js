let x, y;
let prevX, prevY;

let hue, sat;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  colorMode(HSB, 100, 100, 100);
}

function draw() {
  background(50, 100, hue);
  // fill(hue, sat, 100);
  noFill();
  // x = mouseX;
  // y = mouseY;
  prevX = pmouseX;
  prevY = pmouseY;
  strokeWeight(2);

  for (let i = 0; i < 1; i++) {
    beginShape();

    for (let x = 0; x < mouseX; x += 15) {
      // let x = mouseX;
      let n = noise(x * 0.001 * frameCount, i * 0.001 * frameCount);
      let y = map(n, 0, 1, 0, height);
      // let y = mouseY;

      hue = map(x, 0, width, 0, 100);
      sat = 70;
      stroke(hue, sat, 100);
      curveVertex(x, y);
      // curveVertex(x - mouseX, y - mouseY);
      curveVertex(mouseX, mouseY);
    }
    endShape();
  }
}
