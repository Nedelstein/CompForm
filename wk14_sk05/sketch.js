let bot;
let bg;

let sceneW = 1600;
let sceneH = 1600;

function setup() {
  createCanvas(800, 800);
  frameRate(20);

  bot = createSprite(100, 100, 160, 160);

  bot.addAnimation("moving", "bot1.png", "bot2.png");

  bot.offY = 18;

  bg = new Group();

  for (let i = 0; i < 50; i++) {
    let grass = createSprite(
      random(-innerWidth, sceneW),
      random(-height, sceneH)
    );

    grass.addAnimation("normal", "grass.png");

    grass.setCollider("rectangle", 0, 0, 10, 10);
    bg.add(grass);
  }
}

function draw() {
  background(50);

  bot.velocity.x = (camera.mouseX - bot.position.x) / 15;
  bot.velocity.y = (camera.mouseY - bot.position.y) / 15;

  camera.position.x = bot.position.x;
  camera.position.y = bot.position.y;

  bot.collide(bg);

  drawSprites(bg);

  drawSprite(bot);
}
