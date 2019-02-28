let amplitude_slider;
let frequency_slider;
let timeSpeed_slider;

let startX = 50;
let startY = 250;
let endX = 450;
let endY = 50;

let timeChange = 3;

function setup() {
  createCanvas(500, 300);

  createP("Frequency");
  frequency_slider = createSlider(0, 200, 10);

  createP("Amplitude");
  amplitude_slider = createSlider(0, 200, 50);

  createP("Time Speed");
  timeSpeed_slider = createSlider(0, 50, 40);
}

function draw() {
  background(50);
  ellipseMode(CENTER);

  let freq = frequency_slider.value() / 1000;

  let amplitude = amplitude_slider.value() / 50;

  let time = timeSpeed_slider.value() / 100;

  noiseDetail(1, 0.5);

  fill(255);
  noStroke();

  for (i = 0; i < 1; i += 0.02) {
    let x = lerp(startX, endX, i);
    let y = lerp(startY, endY, i);

    // let offsetX = noise(x, y) * amplitude * 20;
    // let offsetY = noise(x, y) * amplitude * 20;

    // let offsetX_freq = offsetX * freq;
    // let offsetY_freq = offsetY * freq;'
    let noiseTime = (noise(0.5) * frameCount * time) / 2;

    let offsetX =
      noise(x * freq + noiseTime, x * freq + noiseTime) * 20 * amplitude;
    let offsetY =
      noise(y * freq + noiseTime, y * freq + noiseTime) * 40 * amplitude;

    // let offsetX = (random() - 0.5) * amplitude * 10;
    // let offsetY = (random() - 0.5) * amplitude * 10;
    // let offsetX_freq = noise(offsetX) * freq;
    // let offsetY_freq = noise(offSetY) * freq;

    ellipse(x + offsetX, y + offsetY, 10, 10);
    noiseTime *= 0.5;
  }
}
