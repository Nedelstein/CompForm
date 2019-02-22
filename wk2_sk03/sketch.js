var x, y;
var pointSize;
var points = [];
var distance = [];
var vel;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15)
  distance = random(10, 60);
  for (var i = 0; i < 20; i++) {
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
    // vel = random(-3, 3);

    this.drawPoint = function() {
      strokeWeight(0.5);
      stroke(142, 151, 168);
      point(this.x, this.y);

    }

    this.drawLine = function() {
      for (var i = 0; i < points.length; i++) {
        var other = points[i];
        strokeWeight(1);
        // stroke(142, 151, 168, 100);
        stroke(random(200), 0, random(255), 100);
        noFill();
        bezier(this.x, this.y, this.x + 50, this.y - 50, other.x - 50, other.y + 50, other.x, other.y);
        this.x += random(-7,7);
        this.y += random(-7,7);
      }
    }
  }
