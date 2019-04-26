const synth = new Tone.Synth({
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.1,
    decay: 0.2,
    sustain: 0.5,
    release: 1
  }
});

Tone.Transport.bpm.value = 200;

synth.toMaster();

const cmajor = ["C5", "D5", "E5", "F5", "G5", "A5", "B5"];

const notes = cmajor;

let degree = 0;

let circles;

function setup() {
  createCanvas(600, 600);
  noStroke();
  colorMode(HSB, 100);
  circles = [];

  // circles.run();

  // for (let i = 0; i < circles.length; i++) {
  //   circles[i] = new Circle();
  // }
}

function draw() {
  background(0);

  for (i = 0; i < circles.length; i++) {
    circles[i].run();
    circles[i].addCircle();
  }

  // for (let i = 0; i < circles.length; i++) {
  //   circles[i].run();
  // }
}

function mousePressed() {
  const melody = generateNote();
  play(melody);

  this.c = new CircleSystem(createVector(mouseX, mouseY));
  circles.push(c);

  // this.i = new Circle(mouseX, mouseY);
  // circles.push(i);

  // for (let i = 0; i < circles.length; i++) {
  // circles[i] = new Circle(mouseX, mouseY);
  // // circles[i].update();
  // // circles[i].drawCircle();
  // circles[i].push(i);
  // // }
}

function generateNote() {
  degree = randomInt(0, 9);
  const m = [];

  const change = sample([-1, -2, 2, 1, -5, 2, 3, 5, -3]);
  degree = constrain(degree + change, 0, 6);
  const note = notes[degree];
  let length = Tone.Time("4n");
  if (Math.random() < 0.5) {
    length = Tone.Time("8n");
  }

  m.push([note, length]);
  return m;
}
function play(melody) {
  let t = Tone.now();

  for (const note of melody) {
    // if (note[0] !== "rest") {
    synth.triggerAttackRelease(note[0], Tone.Time(note[1]) - 0.1, t);
    //   // }
    t += Tone.Time(note[1]);
  }
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function sample(data) {
  const index = Math.floor(Math.random(data.length));
  return data[index];
}

// function constrain(v, min, max) {
//   return Math.min(max, Math.max(min, v));
// }

let Circle = function(position) {
  this.position = position.copy();
  this.vel = createVector(random(-1, 1), random(-1, 1));
  this.acceleration = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
  this.radius = random(5, 20);
};

Circle.prototype.run = function() {
  this.update();
  this.display();
};

Circle.prototype.update = function() {
  this.vel.add(this.acceleration);
  this.position.add(this.vel);
};

Circle.prototype.display = function() {
  fill(random(10, 100), 80, 90);
  noStroke();
  ellipse(this.position.x, this.position.y, this.radius, this.radius);
};

Circle.prototype.isDead = function() {
  if (this.position.x > width) {
    return true;
  } else {
    return false;
  }
};

let CircleSystem = function(position) {
  this.origin = position.copy();
  this.circles = [];
};

CircleSystem.prototype.addCircle = function() {
  c = new Circle(this.origin);
  this.circles.push(c);
};

CircleSystem.prototype.run = function() {
  for (let i = this.circles.length - 1; i >= 0; i--) {
    let p = this.circles[i];
    p.run();
    if (p.isDead()) {
      this.circles.splice(i, 1);
    }
  }
};

// class Circle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.velx = random(-2, 2);
//     this.vely = random(-2, 2);

//     this.run = function() {
//       this.update();
//       this.drawCircle();
//     };

//     this.update = function() {
//       this.x += this.velx;
//       this.y += this.vely;
//     };

//     this.drawCircle = function() {

//     };
//   }
// }
