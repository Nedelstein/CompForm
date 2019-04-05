import gifAnimation.*;


Gif muscle;
Gif blueGirl;
Gif stickMan;

void setup() {
  size(1000, 800);
  muscle = new Gif(this, "muscle.gif");
  blueGirl = new Gif(this, "blueGirl.gif");
  stickMan = new Gif(this, "stickMan.gif");

  muscle.play();
  blueGirl.play();
  stickMan.play();
}

void draw() {
  background(0);

  image(muscle, width/2, height/2);
  image(blueGirl, 80, 0);
  
  image(stickMan, 0, 100);
}
