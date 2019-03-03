let bNoise = 0;
let indexMultiplerSetup;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  frameRate(30);

  createP("Index Multiplier");
  indexMultiplerSetup = createSlider(0, 30, 9);
}

function draw() {
  background(0);
  loadPixels();
  let indexMultiplier = indexMultiplerSetup.value();
  // let sec = second();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      index *= indexMultiplier;

      pixels[index] = map(mouseX, 0, width, 0, 255) + y / 2;
      pixels[index + 1] = map(mouseX, width, 0, 0, 255) * random(10);
      pixels[index + 2] = map(mouseY, 0, height, 0, 255) + x / 2;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  console.log(indexMultiplier);
}
