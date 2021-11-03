var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}



var garden,rabbit;
var gardenImg,rabbitImg;
var carrot, carrot1;
var orangeLeaf, orangeLeaf1;
var redLeaf, redLeaf1;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrot1 = loadImage("carrot.png");
  orangeLeaf1 = loadImage("orangeLeaf.png");
  redLeaf1 = loadImage("redLeaf.png");
  sound = l
}

function setup(){
  
  createCanvas(500,500);



  garden=createSprite(250,250);
  garden.scale = 1.15
  garden.addImage(gardenImg);


  rabbit = createSprite(180,360,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  
}


function draw() {
  background(180);
  rabbit.x = mouseX;
  var select_sprites = Math.round(random(1, 3));
  if(frameCount%140 == 0){
  if(select_sprites == 1) {
      spawnRedLeaf();
  }
  }
  if(frameCount%140 == 0){
    if(select_sprites == 2){
    spawnCarrots();
  }
  }
  if(frameCount%140 == 0){
  if(select_sprites == 3) {
    spawnOrangeLeaf();
  }
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function spawnCarrots() {
  carrot = createSprite(random (50, 350), 40, 10, 10);
  carrot.addImage(carrot1);
  carrot.scale = 0.09;
  carrot.velocityY = 3;
  rabbit.depth = carrot.depth;
  rabbit.depth = carrot.depth + 4;
}
function spawnOrangeLeaf() {
  orangeLeaf = createSprite(random (50, 350), 40, 10,10);
  orangeLeaf.addImage(orangeLeaf1);
  orangeLeaf.scale = 0.06;
  orangeLeaf.velocityY = 3;  
}  
function spawnRedLeaf() {
  redLeaf = createSprite(random (50, 350), 40, 10, 10);
  redLeaf.addImage(redLeaf1);
  redLeaf.scale = 0.04;
  redLeaf.velocityY = 3;  
}
  
