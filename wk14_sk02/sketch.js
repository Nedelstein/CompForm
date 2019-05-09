let llama;

let scene_w = 1400;
let scene_h = 1400;
let llamaPos;
let grass;
let grassPos;
let x, y;

let distance;

function preload() {
  llama = createImg("llama.gif");
  grass = loadImage("grass.jpg");
}

function setup() {
  noCursor();
  createCanvas(windowWidth, windowHeight);

  grass.resize(30, 30);
  //   llama.resize(50, 50);

  llamaPos = createVector(100, 100);

  for (let i = 0; i < 1500; i++) {
    grassPos = createVector(random(width), random(height));
    image(grass, grassPos.x, grassPos.y);
  }
}

function draw() {
  llama.position(llamaPos.x, llamaPos.y);

  llamaPos.x = camera.mouseX - 40;
  llamaPos.y = camera.mouseY - 40;

  camera.mouseX = llamaPos.x;
  camera.mouseY = llamaPos.y;

  noStroke();
  fill(255);
  rect(llamaPos.x + 100, llamaPos.y + 100, 50, 50);
}
