var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(800, 100, 50, 80);
   fixedRect.shapeColor = "green";
   fixedRect.debug =true;
   fixedRect.velocityY=5;

   movingRect = createSprite(800, 500, 80, 30);
   movingRect.shapeColor = "green";
   movingRect.debug =true;
   movingRect.velocityY=-5;
}

function draw() {
  background(0); 
  bounceOff(movingRect,fixedRect);
  
  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2)

  drawSprites();
}

