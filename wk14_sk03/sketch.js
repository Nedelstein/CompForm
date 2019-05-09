let face;
let sadFace;
let faces;
let sadFaces;

function setup() {
  frameRate(20);
  createCanvas(850, 650);

  face = createSprite(100, 100);
  face.addAnimation("normal", "face-1.png", "face-2.png");
  face.setCollider("rectangle", -5, -5, 60, 60);
  face.scale = 1.3;
  face.mass = face.scale;

  sadFaces = new Group();

  for (let i = 0; i < 70; i++) {
    sadFace = createSprite(random(width), random(height));
    sadFace.addAnimation("normal", "face-3.png", "face-4.png");
    sadFace.setCollider("rectangle", -5, 5, 60, 60);
    sadFace.setSpeed(random(-2, 2), random(0, 360));
    sadFace.scale = random(0.3, 1);
    sadFace.mass = sadFace.scale;

    sadFaces.add(sadFace);
  }
}

function draw() {
  background(0);
  noCursor();

  //   animation(face, mouseX, mouseY);
  sadFaces.bounce(face);
  sadFaces.bounce(sadFaces);

  // faces.bounce(faces);
  face.bounce(sadFaces);

  face.position.x = mouseX;
  face.position.y = mouseY;

  for (let i = 0; i < allSprites.length; i++) {
    let s = allSprites[i];
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if (s.position.x > width) {
      s.position.x = width - 1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if (s.position.y < 0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if (s.position.y > height) {
      s.position.y = height - 1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }

  drawSprites();
}
