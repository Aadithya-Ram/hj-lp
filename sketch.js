var robber, cop, copImage, robberImage, bgImage
function preload(){
  robberImage = loadImage("Robber.png")
  copImage = loadAnimation("Images/1 (1).png","Images/2 (1).png","Images/4 (1).png","Images/5 (1).png","Images/6 (1).png","Images/7 (1).png" )
  bgImage = loadImage("Images/Bg.jpg")
}
function setup() {
  createCanvas(displayWidth-20, displayHeight-120);
  robber = createSprite(50,displayHeight-250)
  robber.addImage(robberImage)
  robber.scale = 0.6
  ground = createSprite(displayWidth/2,640,displayWidth,2)
  //ground.visible = false
  ground.velocityX = -5
  
}

function draw() {
  background(bgImage);  
  cops()
  if(keyDown("space")&& robber.y>510){
    robber.velocityY = -12
  }
  console.log(robber.y)
  robber.velocityY += 0.5
  robber.collide(ground)
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  drawSprites();
}
function cops() {
if(frameCount%60===0){
  var cop = createSprite(displayWidth-100, displayHeight-180)
  cop.addAnimation("cops", copImage)
  cop.velocityX = -10
}
}