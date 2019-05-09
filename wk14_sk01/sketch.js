let guy;

let maxSpeed = 10;

let hamburger, hotdog;

let xPos = 100;
let yPos = 200;
let randY;
let x = 20;
let y = 20;
let dx = 5;
let dy = 5;

let hotdogs, hamburgers;

function preload() {
  guy = loadAnimation("guy-1.png", "guy-2.png");

  hamburger = loadImage("hamburger.png");
  hotdog = loadImage("hotdog.png");
}

function setup() {
  //   frameRate(15);
  createCanvas(750, 650);

  hotdog.resize(50, 30);
  hamburger.resize(50, 50);
  y = random(10, height - 30);
  x = random(width / 3, width);
}
function draw() {
  background(0);
  animation(guy, 90, mouseY);
  x += dx;
  y += dy;

  food(x, y);

  if (x < 0 || x > width - 50) {
    dx *= -1;
  }
  if (y < 0 || y > height - 50) {
    dy *= -1;
  }

  if (
    (x <= 90) & (y <= mouseY) & (dist(x, y, 90, mouseY) <= 45) ||
    (x > 90) & (y <= mouseY) & (dist(x, y, 90, mouseY) <= 45)
  ) {
    dx *= -1;
    dy *= -1;
  }
}

function food(x, y) {
  image(hamburger, x, y);
  //   image(hotdog, x + 20, y - 50);
}

function keyPressed() {
  x = random(20, width - 20);
  y = random(20, width - 20);
  dx = 5;
  dy = 5;
}
