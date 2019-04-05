let muscle;
let muscle_create;
let stickMan;
let stickMan_create;
let blueGirl;
let blueGirl_create;

let EXPORT = false;

function preload() {
  muscle = createImg("muscle.gif");
  stickMan = createImg("stickMan.gif");
  blueGirl = createImg("blueGirl.gif");
  //   muscle_create = createImg
}

function setup() {
  //   createCanvas(1500, 1000);
  noCanvas();
  frameRate(2);
  //   background(0);
}

function draw() {
  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 200);
  }
  if (frameCount > 200) {
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
