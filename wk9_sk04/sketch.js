let width = 2000;
let height = 1200;
let img;

let x = width / 2;
let y = height - 200;
let r, g, b;
let system;

let EXPORT = false;

function setup() {
  createCanvas(width, height, WEBGL);
  smooth();
  img = loadImage("texture.png");
  frameRate(2);

  system = new ParticleSystem(createVector(x, y));
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  noStroke();
  translate(-width / 2, -height / 2, 0);
  fill(255);
  ellipse(width / 2, height - 180, 90, 25);
  directionalLight(255, 255, 255, -1025, -1073);
  system.addParticle();
  system.run();
  r = 100;
  b = 20;

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 800);
  }
  if (frameCount > 800) {
    noLoop();
  }

  console.log(frameCount);
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
let Particle = function(position) {
  this.acceleration = createVector(0, -0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration *= 0;
};

Particle.prototype.display = function() {
  push();
  translate(this.position.x, this.position.y);
  specularMaterial(r, 70, b);
  if (b >= 255) {
    b--;
    r++;
  } else {
    b++;
    r--;
  }

  sphere(20);
  pop();
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
  }
};
