var pathLeft = new Path();
var pathRight = new Path();
var radius = 30;

var pathCirc = new Path.Circle([200, 270], radius);

var startY = 40;

var startPoint = new Point(0, 10);
var center = new Point(200, 200);
var bottomLeft = new Point(200, 400);
var bottomRight = new Point(200, 400);
var topCenter = new Point(200, 0);

pathLeft.strokeColor = "blue";
for (var i = 0; i < 20; i++) {
  pathLeft.add(startPoint);
  pathLeft.add(center);

  pathLeft.add(topCenter);
  pathLeft.add(bottomLeft);
  startPoint.y += 20;
  bottomLeft.x += 10;
  //   center.y += 20;
}

var startPointRight = new Point(400, 10);

pathRight.strokeColor = "red";
for (var i = 0; i < 20; i++) {
  pathRight.add(startPointRight);
  pathRight.add(center);
  pathRight.add(topCenter);
  pathRight.add(bottomRight);
  startPointRight.y += 20;
  bottomRight.x -= 10;
}

var pathCutout = pathCirc.subtract(pathRight);

pathCirc.style = {
  strokeColor: "Orange",
  strokeWidth: 4,
  dashArray: [2, 2],
  shadowColor: new Color(0, 0, 0, 0.5),
  shadowBlur: 12,
  shadowOffset: new Point(5, 5)
};

function onFrame(event) {
  // background(0)
  pathRight.strokeColor.hue += 1;
  pathLeft.strokeColor.hue += 1;
  pathCirc.strokeColor.hue -= 1;
  topCenter.x += 1;
  pathCirc.rotate(10);

  //   pathRight.rotate(1);
  //   pathLeft.rotate(-1);
}
