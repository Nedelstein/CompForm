var values = {
  paths: 30,
  radius: 370,
  points: 17
};

// function onFrame(event) {
//   var radius = values.radius - 20 * Math.random();
//   createPaths(radius);
// }

// function onFrame(event) {
//   radius = radius + Math.random() * 10;
// }

createPaths();

function createPaths() {
  for (var i = 0; i < values.paths; i++) {
    var radius = values.radius - i * 30;
    var points = values.points;
    var path = createBlob(view.size / 2, radius, points);
    var lightness = (Math.random() - 0.5) * 0.4 + 0.4;
    var hue = Math.random() * 230 + i;
    path.fillColor = {
      hue: hue,
      saturation: 1,
      lightness: lightness,
      alpha: 1 - i * 0.06
    };
  }
}
function createBlob(center, radius, points) {
  var path = new Path();
  path.closed = true;
  for (var i = 0; i < points; i++) {
    var delta = new Point({
      length: radius * 0.6 + Math.random() * radius * 0.6,
      angle: (360 / points) * i
    });
    path.add(center + delta);
  }
  path.smooth();
  return path;
}
