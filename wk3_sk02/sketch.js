let cam;
let radio;

let pixSize;

let redPix, greenPix, bluePix;

function setup() {
  createCanvas(720, 480);
  cam = createCapture(VIDEO);
  cam.size(300, 300);
  // cam.hide();
  noStroke();

  radio = createRadio();
  radio.option('Circle');
  radio.option('Square');
  radio.option('Triangle');
  radio.value('Square');

  createP('Shape Size');
  pixSize = createSlider(0, 25, 3);

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
  let val = radio.value();
  let shapeSize = pixSize.value();

  let skip = 4 + shapeSize;
  for (let x = 0; x < cam.width; x += skip) {
    for (let y = 0; y < cam.height; y += skip) {
      let index = ((y * cam.width) + x) * 4;

      let red_pix = redPix.value();
      let green_pix = greenPix.value();
      let blue_pix = bluePix.value();


      let redVal = cam.pixels[index] + red_pix;
      let greenVal = cam.pixels[index + 1] + green_pix;
      let blueVal = cam.pixels[index + 2] + blue_pix;

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