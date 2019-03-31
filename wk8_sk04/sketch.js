var width = 500;
var height = 500;

var squareX = getRandom(0, 700);
var squareY = getRandom(0, 700);

var square = new Path.Rectangle(squareX, squareY, 50, 50);

var circle = new Path.Circle(new Point(220, 100), 70);
// circle.strokeColor = "red";
var copy = circle.clone();
moreCircles();

function moreCircles() {
  for (i = 0; i < 25; i++) {
    // copy.fillColor = "cyan";
    // copy.strokeColor = new Color("rgb(150, 50, 100)");
    copy.position = new Point(getRandom(0, 700), getRandom(0, 700));

    var distance = square.position - copy.position;
    console.log(distance.length);
    // if (distance.length < 75) {
    //   copy.fillColor = "green";
    // } else {
    //   copy.fillColor = "cyan";
    // }
  }
}

square.strokeColor = "black";
square.fillColor = "blue";

function getRandom(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

var destination = Point.random() * view.size;
function onFrame(event) {
  var vector = destination - square.position;

  square.position += vector / 60;

  if (vector.length < 5) {
    destination = Point.random() * view.size;
  }
  var comboPath = square.subtract(circle);
  comboPath.style = {
    // strokeColor: "green",
    dashArray: [10, 5],
    fillColor: "cyan",
    shadowColor: new Color(0, 0, 0, 0.5),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5)
  };
}

function onKeyDown(event) {
  if (event.key === "s") {
    downloadAsSVG();
  }
}

function downloadAsSVG(fileName) {
  // use default name if not provided
  fileName = fileName || "output.svg";

  // create a data url of the file
  var svgData = project.exportSVG({ asString: true });
  var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

  // create a link to the data, and "click" it
  var link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();
}
