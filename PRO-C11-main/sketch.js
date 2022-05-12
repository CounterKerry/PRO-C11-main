// Variáveis

var ship, ship_animation;
var sea, sea_image;

function preload() {
// Carregar imagens

  // Mar
  sea_image = loadImage("sea.png");

  // Barco
  ship_animation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400, 400);
  
  sea = createSprite("200, 200, 30, 30");
  sea.addImage("sea.png", sea_image);
  sea.scale = 0.5;

  ship = createSprite(200, 200, 50, 50);
  ship.addAnimation("Movimento", ship_animation);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
  drawSprites();

 
}
