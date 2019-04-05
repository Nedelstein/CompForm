let w = 1500;
let h = 900;

let firstLetterX;
let firstLetterY;
let speed = 1;

let cUpX = 30;
let cUpY = h / 3 - 50;
let cDownX = cUpX;
let cDownY = cUpY + 5;

let oDownLeftX = 400;
let oDownLeftY = 69;
let oDownRightX = oDownLeftX;
let oDownRightY = oDownLeftY;

let oUpLeftX = 229;
let oUpLeftY = 240;
let oUpRightX = 400;
let oUpRightY = 411;

let mDownLeftX = 600;
let mDownLeftY = 69;

let mSmallDownRightX = mDownLeftX;
let mSmallDownRightY = mDownLeftY;

let mSmallUpRightX = 771;
let mSmallUpRightY = 240;

let mDownRightX = 942;
let mDownRightY = 69;

let pLeftX = 1000;
let pLeftY = 69;
let pDownX = 1171;
let pDownY = 69;
let pRightX = pDownX;
let pRightY = 240;

let fDownX = 30;
let fDownY = h * (2 / 3) - 50;

let ftopRightX = 30;
let ftopRightY = h * (2 / 3) - 50;

let fbottomRightX = 30;
let fbottomRightY = h * (2 / 3) + 70;

let oOfFormDownLeftX = 400;
let oOfFormDownLeftY = h * (2 / 3) - 50;

let oOfFormDownRightX = 400;

let oOfFormBottomLeftX = 571;
let oOfFormBottomLeftY = 721;

let oOfFormBottomRightX = 400;
let oOfFormBottomRightY = 892;

let rBaseY = h * (2 / 3) - 50;

let rTopRightX = 700;
let rTopDownY = h * (2 / 3) - 50;
let rBottomLeftX = 922.2999999999922;

let rBottomRightX = 700;
let rBottomRightY = 669.7000000000078;

let mFormLeftDownY = h * (2 / 3) - 50;

let mFormSmallLeftDownX = 1000;
let mFormSmallLeftDownY = h * (2 / 3) - 50;

let mFormSmallLeftUpX = 1171;
let mFormSmallLeftUpY = 721;

let mFormRightDownY = h * (2 / 3) - 50;

let EXPORT = false;

function setup() {
  createCanvas(w, h);
  background(0);
  frameRate(2);
}

function draw() {
  console.log(frameCount);
  stroke(255);
  strokeWeight(15);
  cOfComp();
  oOfComp();
  mOfComp();
  pOfComp();

  fOfForm();
  oOfForm();
  rOfForm();
  mOfForm();

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 171);
  }
  if (frameCount > 171) {
    noLoop();
  }
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

function cOfComp() {
  line(30, h / 3 - 50, cUpX, cUpY);
  cUpX += speed;
  cUpY -= speed;
  if (cUpX > 200) {
    noLoop();
  }
  line(30, h / 3 + 5 - 50, cDownX, cDownY);
  cDownX += speed;
  cDownY += speed;
}

function oOfComp() {
  line(400, 69, oDownLeftX, oDownLeftY);
  oDownLeftX--;
  oDownLeftY++;

  line(400, 69, oDownRightX, oDownRightY);
  oDownRightX++;
  oDownRightY++;

  line(oUpLeftX, oUpLeftY, 229, 240);
  oUpLeftX++;
  oUpLeftY++;

  line(400, 411, oUpRightX, oUpRightY);
  oUpRightX++;
  oUpRightY--;
}

function mOfComp() {
  line(mDownLeftX, mDownLeftY, 600, 69);
  // mDownLeftX--;
  mDownLeftY += 2;

  line(600, 69, mSmallDownRightX, mSmallDownRightY);
  mSmallDownRightX++;
  mSmallDownRightY++;

  line(771, 240, mSmallUpRightX, mSmallUpRightY);
  mSmallUpRightX++;
  mSmallUpRightY--;

  line(942, 69, mDownRightX, mDownRightY);
  mDownRightY += 2;
}

function pOfComp() {
  line(1000, 69, 1000, mDownRightY);

  line(1000, 69, pLeftX, pLeftY);
  pLeftX++;

  line(1171, 69, pDownX, pDownY);
  pDownY++;

  line(1171, 240, pRightX, pRightY);
  pRightX--;
}

function fOfForm() {
  line(30, h * (2 / 3) - 50, fDownX, fDownY);
  fDownY += 2;

  line(30, h * (2 / 3) - 50, ftopRightX, ftopRightY);
  ftopRightX += 1.5;

  line(30, h * (2 / 3) + 70, fbottomRightX, fbottomRightY);
  fbottomRightX += 1.1;
}

function oOfForm() {
  line(400, h * (2 / 3) - 50, oOfFormDownLeftX, oOfFormDownLeftY);
  oOfFormDownLeftX--;
  oOfFormDownLeftY++;

  line(400, h * (2 / 3) - 50, oOfFormDownRightX, oOfFormDownLeftY);
  oOfFormDownRightX++;

  line(571, 721, oOfFormBottomLeftX, oOfFormBottomLeftY);
  oOfFormBottomLeftX--;
  oOfFormBottomLeftY++;

  line(400, 892, oOfFormBottomRightX, oOfFormBottomRightY);
  oOfFormBottomRightX--;
  oOfFormBottomRightY--;
}

function rOfForm() {
  line(620, h * (2 / 3) - 50, 620, rBaseY);
  rBaseY += 2;

  line(620, h * (2 / 3) - 50, rTopRightX, h * (2 / 3) - 50);
  rTopRightX += 1.3;

  line(922.2999999999922, h * (2 / 3) - 50, 922.2999999999922, rTopDownY);
  rTopDownY += 0.7;

  line(922.2999999999922, 669.7000000000078, rBottomLeftX, 669.7000000000078);
  rBottomLeftX -= 1.3;

  line(700, 669.7000000000078, rBottomRightX, rBottomRightY);
  rBottomRightX += 1.3;
  rBottomRightY += 1.3;
}

function mOfForm() {
  line(1000, h * (2 / 3) - 50, 1000, mFormLeftDownY);
  mFormLeftDownY += 2;

  line(1000, h * (2 / 3) - 50, mFormSmallLeftDownX, mFormSmallLeftDownY);
  mFormSmallLeftDownX++;
  mFormSmallLeftDownY++;

  line(1171, 721, mFormSmallLeftUpX, mFormSmallLeftUpY);
  mFormSmallLeftUpX++;
  mFormSmallLeftUpY--;

  line(1342, h * (2 / 3) - 50, 1342, mFormRightDownY);
  mFormRightDownY += 2;
}
