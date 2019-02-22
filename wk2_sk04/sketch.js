var x;
var y;
var squareSize;
var squares = [];
var startSquare;

function setup() {
  createCanvas(windowWidth, windowHeight);
  squareSize = 10;
  for (var i = 0; i < squares.length; i++) {
    squares[i] = new Square();

  }
}

function mousePressed() {
  squares.push(new Square);
}

function draw() {
  background(0);
  rectMode(CENTER);
  for (var i = 0; i < squares.length; i++) {
    squares[i].drawSquare();
  }
}


function Square() {
  this.x = width / 2;
  this.y = height / 2;
  this.squareSize = 10;

  this.drawSquare = function() {

    noFill();
    stroke(random(255),random(255), random(255));
    rect(this.x, this.y, this.squareSize, this.squareSize);
    this.squareSize += 3;
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
  }
}