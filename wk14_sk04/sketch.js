let balloonW = 80;
let balloonH = 100;

let pop, inflate;

let playsound = false;

function preload() {
  pop = loadSound("pop.mp3");
  inflate = loadSound("inflate.mp3");
}

function setup() {
  createCanvas(700, 700);

  pop.setVolume(1);
  inflate.setVolume(0.4);
}

function draw() {
  background(70);

  if (playsound) {
    inflate.play();
  }
  if (playsound == false) {
    inflate.pause();
  }

  stroke(255);
  strokeWeight(2);
  line(width / 2, height - 100, width / 2, height);

  noStroke();
  fill(240, 0, 0, 150);
  ellipse(width / 2, height - 100 - balloonH / 2, balloonW, balloonH);

  console.log(balloonH);

  if (balloonH >= 600) {
    inflate.stop();
    pop.play();
    balloonH *= 0;
    balloonW *= 0;
    return;
  }

  if (keyIsDown(UP_ARROW)) {
    balloonW += random(0.3, 0.6);
    balloonH += random(0.4, 0.7);
    playsound = true;
  } else {
    playsound = false;
  }
}

function keyReleased() {
  inflate.stop();
}
