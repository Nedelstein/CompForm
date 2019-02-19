var x, y;
var squareSize;
var squares = [];
var lastSquare;

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  lastSquare = millis() - 200;
  // var listOfColors = [color('#aabf12'), color('#33ab12'), color('#165512'), color('#fe3fa2'), color('#a345cd')];
  for (var i = 0; i < squares.length; i++) {
    // var colorArray = [color('#FF6633'), color('#FFB399'), color('#FF33FF'), color('#FFFF99'), color('#00B3E6'),
    //   color('#E6B333'), color('#3366E6'), color('#999966'), color('#99FF99'), color('#B34D4D'),
    //   color('#80B300'), color('#809900'), color('#E6B3B3'), color('#6680B3'), color('#66991A'),
    //   color('#FF99E6'), color('#CCFF1A'), color('#FF1A66'), color('#E6331A'), color('#33FFCC'),
    //   color('#66994D'), color('#B366CC'), color('#4D8000'), color('#B33300'), color('#CC80CC'),
    //   color('#66664D'), color('#991AFF'), color('#E666FF'), color('#4DB3FF'), color('#1AB399'),
    //   color('#E666B3'), color('#33991A'), color('#CC9999'), color('#B3B31A'), color('#00E680'),
    //   color('#4D8066'), color('#809980'), color('#E6FF80'), color('#1AFF33'), color('#999933'),
    //   color('#FF3380'), color('#CCCC00'), color('#66E64D'), color('#4D80CC'), color('#9900B3'),
    //   color('#E64D66'), color('#4DB380'), color('#FF4D4D'), color('#99E6E6'), color('#6666FF')
    // ];
    // fill(colorArray[int(random(0, colorArray.length))]);
    squares[i] = new Square();
  }
}

function newSquare() {
  var timeEllapsed = millis() - lastSquare;
  if (timeEllapsed > 200) {
    squares.push(new Square());
    lastSquare = millis();
  }
}

function draw() {
  rectMode(CENTER);
  // color myColors = colorArray[int(random(colorArray.length))];
  for (var i = 0; i < squares.length; i++) {
    // fill(col);
    col = color(random(255), random(255), random(255));

    fill(202, 44, 146);
    stroke(random(255), random(255), random(255));
    squares[i].drawSquare();

  }
  newSquare();
}

function Square() {
  this.x = width / 2;
  this.y = height / 2;
  this.squareSize = 10;

  this.drawSquare = function() {
    rect(this.x, this.y, this.squareSize, this.squareSize);

    this.squareSize += 2;
    // this.x +=random(-2,2);
  }
}