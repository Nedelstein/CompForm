var rotationX_1, rotationY, rotationY_1;

var rotX;
var rotY;
var rotY_1;
var rotX_1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  createP('Rotate Top Box');
  rotX = createSlider(0, 30, 0);
  
  createP('Rotate Left Box');
  rotY = createSlider(0, 30, 0);
  
  createP('Rotate Right Box');
  rotY_1= createSlider(0,30,0);
  
  createP('Rotate Bottom Box');
  rotX_1 = createSlider(0,30,0);
}

function draw() {
  background(0);

  var rot_x = rotX.value();
  var rot_y = rotY.value();
  var rot_y1 = rotY_1.value();
  var rot_x1 = rotX_1.value();


  push();
  fill(147, 255, 58);
  rotateX(rot_x);
  translate(0, 50);
  plane(100);
  pop();
  // resetMatrix();

  push();
  fill(166, 58, 255);
  translate(0, 150);
  rotateY(rot_y);
  translate(-100, 0);
  plane(100);
  pop();
  // resetMatrix();

  push();
  fill(255, 58, 147);
  translate(0, 50);
  rotateY(rot_y1);
  // rotate(rotationX);
  translate(100, 100);
  plane(100);
  pop();
  // resetMatrix();

  push();
  fill(58, 255, 166);
  translate(50, 100);
  rotateX(rot_x1);
  translate(-50, 150);
  plane(100);
  pop();

}