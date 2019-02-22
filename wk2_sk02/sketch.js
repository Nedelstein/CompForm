var x, y;
var pointSize;
var points = [];
var distance = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  // maxDistance = dist(width)
  distance = random(10, 60);
  for (var i = 0; i < 50; i++) {
    points[i] = new Points();
  }
}

function draw() {

  background(240, 234, 214);
  for (var i = 0; i < points.length; i++) {
    points[i].drawPoint();
    points[i].drawLine();
  }
}

function Points() {
  this.x = random(width);
  this.y = random(height);

  this.drawPoint = function() {
    strokeWeight(0.5);
    stroke(142, 151, 168);
    point(this.x, this.y);
  }

  this.drawLine = function() {
    for (var i = 0; i < points.length; i++) {
      var other = points[i];
      strokeWeight(1);
      stroke(142, 151, 168, 100);
      line(this.x, this.y, other.x, other.y);
    }
  }
}