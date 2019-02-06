var x, y;
var radius;
// var h, s, b;
var col = [];

var circles = [];
var r, g, b, a;

var dirX, dirY;
var angle;
var xOffset, yOffset;

function setup() {
  angleMode(DEGREES);
  createCanvas(1000, 700);
  radius = 40;

  for (var i = 0; i < 60; i++) {
    r = 0;
    g = random(150);
    b = random(255);
    a = random(20, 200);
    col[i] = color(r, g, b, a);
    circles[i] = new Circle();
  }
}


function draw() {
  background(255);

  for (var i = 0; i < circles.length; i++) {
    fill(col[i]);
    circles[i].update();
    circles[i].drawCircle();

  }
}

function Circle() {
  this.x = random(width);
  this.y = random(height);
  this.dirX = random(-5, 5);
  this.dirY = random(-5, 5);

  this.update = function() {
    this.x += this.dirX;
    this.y += this.dirY;

    if (this.x >= width - radius / 2) {
      this.dirX *= -1;
    } else if (this.x <= 0 + radius / 2) {
      this.dirX *= -1;
    } else if (this.y >= height - radius / 2) {
      this.dirY *= -1;
    } else if (this.y <= 0 - radius / 2) {
      this.dirY *= -1;
    }
  }
  this.drawCircle = function() {
    angle = random(360);
    var distance = random(10);
    xOffset = cos(angle) * distance;
    yOffset = sin(angle) * distance;
    noStroke();

    ellipse(this.x + xOffset, this.y + yOffset, radius, radius);
  }
}