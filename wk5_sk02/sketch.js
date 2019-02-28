let h, s, b;
b = 100;

let x, y;
let diameter;

let cursorRad = 10;

let mousePos;
let circPos;
let dir;
let distance;

let attraction = p5.createVector;
let repulsion = p5.createVector;

let circles = [];
let attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  ellipseMode(CENTER);

  //   for (let i = 0; i < circles.length; i++) {
  //     diameter = min(random(5, 20), random(5, 20));
  //     let h = map(diameter, 5, 20, 0, 100);
  //     fill(h, 100, b);
  //   }
}

function draw() {
  background(20);
  attractor = createVector(mouseX, mouseY);
  noStroke();

  for (let i = 0; i < 300; i++) {
    let noiseFrequency = 1;
    x = noise(i * noiseFrequency, 0) * width;
    y = noise(i * noiseFrequency, 1000) * height;

    circles.push(new Circle(x, y));
    if (circles.length > 300) {
      circles.splice(0, 1);
    }
  }

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.attracted(attractor);

    circle.update();
    circle.show();
  }

  // noLoop();
}

function Circle(x, y) {
  this.pos = createVector(x, y);
  // this.prev = createVector(x, y);
  this.acc = createVector();
  this.vel = createVector();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.show = function() {
    diameter = min(random(5, 20), random(5, 20));
    let h = map(diameter, 5, 20, 0, 100);
    fill(h, 100, b);
    ellipse(this.pos.x, this.pos.y, diameter, diameter);
  };

  this.attracted = function(target) {
    let force = p5.Vector.sub(target, this.pos);
    let d = force.mag();
    // d = constrain(d, 1, 25);
    // let G = 50;
    // let strength = G / (d * d);
    // force.setMag(strength);
    if (d < 100) {
      force.mult(-10);
    }
    this.acc.add(force);
  };
}
