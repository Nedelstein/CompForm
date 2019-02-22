let r;
let total = 100;
let x, y, z;
let globe = [];


function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);

// colorMode(HSB);
  for(let i = 0; i < total; i++){
    globe[i] = [];
  
  for(let j = 0; j < total; j++){
    globe[i][j] = 0;
  }
  }

}

function draw() {
  // perspective(60 * PI/180, width/height, 1, 5000);
  background(0);
  // fill(255);

  r = 220;

  for(let i =0; i < total; i++){
    let lat = map(i, 0, total +1, -HALF_PI, HALF_PI);
    for(let j = 0; j< total +1; j++){
      let lon = map(j, 0, total, -PI, PI);
      x = r * sin(lon) * cos(lat);
      y = r * sin(lon) * sin(lat);
      z = r * cos(lon);

      globe[i][j] = new createVector(x,y,z);
    }
  }
  fill(255,0,0, 150);
  stroke(255);
  strokeWeight(4);
rotateX(PI/2.5);
// rotateY(PI/2);
  for(let i =0; i < total; i ++){
    beginShape(TRIANGLE_STRIP);
    for(let j = 0; j< total + 1; j++){

      // let n = noise(i, millis() * 0.001);
      // let n = noise(j, millis() * 0.001);
      let n = noise(i, j, millis() *0.001);

      // let nX = noise(j, millis()*0.001);
      // let nx = noise(i, millis()*0.001);
      let nx = noise(i, j, millis()*0.001);


      let v1 = globe[i][j];
      
      vertex(v1.x, v1.y, v1.z * n);
      // let v2 = globe[i + 1][j];
      vertex(v1.x + 1, v1.y + 1, (v1.z + 1) * n);
    }
    endShape();
  }
}


