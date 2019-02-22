let x, y;
let offset;
let totalVerts = 40;
let changeX = 0;
let changeY =3;

function setup(){
	createCanvas(windowWidth, windowHeight);
	offset = 0;
	cols = floor(width/scale);
	rows = floor(height/scale);
}

function draw(){
	background(0, 5);

  let r = 255 * noise(changeX+10);
  let g = 255 * noise(changeX+15);
  let b = 255 * noise(changeY+20);

  fill(g, b, r);
  stroke(r,g,b);
  strokeWeight(3);
// noStroke();	
// translate(width/2, height/2);
  beginShape();
  for(let i = 0; i < totalVerts; i++){
	let angle = map(i, 0, 40, 0, TWO_PI);
	let radius = width/5 * noise(i + offset);
	x = radius * cos(angle);
	y = radius * sin(angle);

	x += width * noise(changeX);
	y += height * noise(changeY);

	curveVertex(x,y);
	changeX +=0.0001;
	changeY +=0.0001;	
}
  endShape(CLOSE);
  offset +=0.01;
}