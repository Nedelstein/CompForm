var x1, y1, x2, y2;

var xPlus, yPlus;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width / 2;
  y1 = height / 2;

  x2 = random(width / 2, width - 30);
  y2 = random(height / 2, height - 30);

  xPlus = 0;
  yPlus = 0;
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  for (var i = 0; i < 200; i += 20) {

    var xEnd = x2 + (i / 16) + xPlus;
    var yEnd = y2 + (i / 8) + yPlus
    if (xEnd > width || xEnd < 0) {
      xEnd = xEnd * -1;
    }
    if (yEnd > height || yEnd < 0) {
      yEnd = yEnd * -1;
    }
    bezier(x1 + i, y1 + i, x1 + 40, y1 + 70, x1 + 90, y1 + 170, xEnd, yEnd);
    
  }
xPlus += random(1);
    yPlus += random(1);
}