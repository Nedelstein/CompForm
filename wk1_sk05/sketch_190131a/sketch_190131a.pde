int scale = 60;
int w, h;
int r, g, b;
float rotation;
float rectSize = 60;
int xMultiplier, yMultiplier;
int ellapsedTime;


void setup() {
  size(900, 780);
  frameRate(40);
  w = width;
  h = height;
  rectMode(CENTER);
  r = 50;
  g = 100;
  b = 100;

  xMultiplier = 0;
  yMultiplier = 0;
  ellapsedTime = millis() + 780;
}


void draw() {
  background(0);

  for (int x = 0; x<w; x+=scale) {
    for (int y = 0; y<h; y+=scale) {

      if ( x == scale*xMultiplier && y == scale*yMultiplier) {
        fill(r+100, g, b);
      } else {
        fill(r, g, b);
      }


      if (millis() > ellapsedTime) {
        ellapsedTime = millis() + 780;
        xMultiplier+=1;
        yMultiplier+=1;
      }

      if (yMultiplier >= 13) {
        y+=random(1, 4);
        //yMultiplier+=1;
        //xMultiplier = 0;
      } else if (yMultiplier >=13) {
        yMultiplier = 0;
      }

      pushMatrix();
      translate(x+30, y+30);
      rotate(rotation);
      rect(0, 0, rectSize, rectSize);
      popMatrix();
    }
  }
  rotation +=0.05;
}
