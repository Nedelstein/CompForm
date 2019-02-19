var posX, posY, zoomZ, rotation;
var cam;
var pos_Z = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  cam = createCapture(VIDEO);
  cam.size(320, 240);
  noStroke();
  cam.hide();

  createP('Rotation X');
  posX = createSlider(1, 30, 0);

  createP('Rotation Y');
  posY = createSlider(1, 30, 0);

  createP('Zoom ');
  zoomZ = createSlider(1, 500, 250);
}

function draw() {
  background(0);

  cam.loadPixels();

  // fill(redVal, greenVal, blueVal);



  var pos_Y = posY.value();
  var pos_X = posX.value();
  var zoom = zoomZ.value();
  for (var x = -500; x < 500; x += 110) {
    for (var y = -500; y < 500; y += 110) {
      push();
      translate(x, y, zoom);
      rotateY(pos_Y);
      rotateX(pos_X);
      rotateZ(pos_Z);
      texture(cam);
      box(80);
      pos_Z += 0.001;
      pop();
    }
  }
}