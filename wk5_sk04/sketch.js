let amplitude_slider;
let frequency_slider;
let timeSpeed_slider;

let x = 0;
let y = 0;
let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

let hue;
let saturation;

let size;
let strokeHue;

let timeChange = 3;

let lerpSpeed;

let circles = [];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  hue = 0;
  saturation = 0;

  size = 10;

  createP("Frequency");
  frequency_slider = createSlider(0, 200, 10);

  createP("Amplitude");
  amplitude_slider = createSlider(0, 200, 50);

  createP("Time Speed");
  timeSpeed_slider = createSlider(0, 50, 40);

  for (let i = 0; i < 20; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(50);
  ellipseMode(CENTER);

  let freq = frequency_slider.value() / 1000;

  let amplitude = amplitude_slider.value() / 50;

  let time = timeSpeed_slider.value() / 100;

  noiseDetail(1, 0.5);

  noStroke();

  for (let i = 0; i < circles.length; i++) {
    // let x = lerp(startX, endX, i);
    // let y = lerp(startY, endY, i);

    size = map(i, 0, circles.length - 1, 10, 40);
    let lerpSpeed = map(size, 10, 40, 0.1, 0.03);

    // let lerpX = mouseX * lerpSpeed;
    // let lerpY = mouseY * lerpSpeed;

    circles[i].x += (mouseX - circles[i].x) * lerpSpeed;
    circles[i].y += (mouseY - circles[i].y) * lerpSpeed;

    // circles[i].x = lerp(circles[i].x, mouseX, 0.05) * lerpSpeed;
    // circles[i].y = lerp(circles[i].y, mouseY, 0.05) * lerpSpeed;

    hue = map(circles[i].x, 0, width, 0, 100);
    saturation = map(circles[i].y, 0, height, 0, 100);

    strokeHue = map(x, width, 0, 10, 100);

    fill(hue, 100, 100);
    // stroke(strokeHue, 100, 100);

    let noiseTime = (noise(0.5) * frameCount * time) / 2;

    let offsetX =
      noise(circles[i].x * freq + noiseTime, circles[i].x * freq + noiseTime) *
      20 *
      amplitude;
    let offsetY =
      noise(circles[i].y * freq + noiseTime, circles[i].y * freq + noiseTime) *
      40 *
      amplitude;

    ellipse(circles[i].x + offsetX, circles[i].y + offsetY, size, size);

    noiseTime *= 0.5;
  }
}

class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
  }
}
