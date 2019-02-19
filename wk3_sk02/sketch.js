var cam;
var radio;

var pixSize;

var redPix, greenPix, bluePix;

function setup() {
  createCanvas(720, 480);
  cam = createCapture(VIDEO);
  cam.size(400, 300);
  cam.hide();
  noStroke();

  radio = createRadio();
  radio.option('Circle');
  radio.option('Square');
  radio.option('Triangle');
  radio.value('Square');

  createP('Shape Size');
  pixSize = createSlider(0, 25, 0);

  createP('Red Value');
  redPix = createSlider(0, 255, 0);

  createP('Green Value');
  greenPix = createSlider(0, 255, 0);

  createP('Blue Value');
  bluePix = createSlider(0, 255, 0);

}

function draw() {
background(255);
  cam.loadPixels();
  var val = radio.value();
  var shapeSize = pixSize.value();

  var skip = 4 + shapeSize;
  for (var x = 0; x < cam.width; x += skip) {
    for (var y = 0; y < cam.height; y += skip) {
      var index = ((y * cam.width) + x) * 4;

      var red_pix = redPix.value();
      var green_pix = greenPix.value();
      var blue_pix = bluePix.value();


      var redVal = cam.pixels[index] + red_pix;
      var greenVal = cam.pixels[index + 1] + green_pix;
      var blueVal = cam.pixels[index + 2] + blue_pix;

      fill(redVal, greenVal, blueVal);
      if (val === 'Triangle') {
        triangle(x, y, x + 20, y, x + 10, y - 20);
      } else if (val === 'Circle') {
        ellipse(x, y, skip, skip);
      } else {
        rect(x, y, skip, skip);
      }

    }
  }

}