let vid;
let vScale = 4;
let pixelRed;
let red = 0;
let blue = 0;
let alpha = 0;

function preload() {
  vid = createVideo("colorbubblies.mp4");
  vid.hide();

  sound = loadSound("colorbubblies_sound.m4a");
}

function setup() {
  createCanvas(600, 330);
  vid.size(width, height);
  noStroke();
  smooth();

  sound.addCue(4.0, addRed);
  sound.addCue(4.4, addRed2);
  sound.addCue(4.83, addRed3);
  sound.addCue(5.26, addRed4);
  sound.addCue(5.67, addBlue);
  sound.addCue(6.08, addBlue2);
  sound.addCue(6.49, addBlue3);
  sound.addCue(6.9, addBlue4);

  sound.addCue(10.58, addRed);
  sound.addCue(10.98, addRed2);
  sound.addCue(11.39, addRed3);
  sound.addCue(11.79, addRed4);

  sound.addCue(12.18, addBlue);
  sound.addCue(12.57, addBlue2);
  sound.addCue(12.99, addBlue3);
  sound.addCue(13.4, addBlue4);

  sound.addCue(7.7, clearCol);
  sound.addCue(14.0, clearCol);
}

function draw() {
  background(0);
  image(vid, 0, 0);

  fill(red, 0, blue, alpha);
  // alpha ;
  rect(0, 0, width, height);

  // loadPixels();
  // vid.loadPixels();
  // for (let y = 0; y < vid.height; y++) {
  //   for (let x = 0; x < vid.width; x++) {
  //     pixelRed = getQuick(vid, x, y)[0];
  //     let pixelGreen = getQuick(vid, x, y)[1];
  //     let pixelBlue = getQuick(vid, x, y)[2];
  //     sound.addCue(3.0, addRed);
  //     fill(pixelRed, pixelGreen, pixelBlue);
  //     rect(x * vScale, y * vScale, vScale, vScale);
  //   }
  // }
  // vid.updatePixels();
  // updatePixels();
}

function mousePressed() {
  vid.loop();
  sound.loop();
}

// function getQuick(img, x, y) {
//   var i = (img.width - x + 1 + img.width * y) * 4;
//   return [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]];
// }

function clearCol() {
  alpha = 0;
  red = 0;
  blue = 0;
}

function addRed() {
  alpha = 100;
  red = 255;
}

function addRed2() {
  alpha = 150;
  red = 255;
}

function addRed3() {
  alpha = 170;
  red = 255;
}

function addRed4() {
  alpha = 220;
  red = 255;
}

function addBlue() {
  alpha = 100;
  blue = 255;
  red = 0;
}

function addBlue2() {
  alpha = 150;
  blue = 255;
  red = 0;
}
function addBlue3() {
  alpha = 170;
  blue = 255;
  red = 0;
}
function addBlue4() {
  alpha = 220;
  blue = 255;
  red = 0;
}
