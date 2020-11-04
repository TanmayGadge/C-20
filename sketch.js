var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  /*fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 50);
*/
/*
fixedrect = createSprite(200, 200, 50, 80);
movingrect = createSprite(400, 200, 80, 50);

movingrect.velocityX = -5;
fixedrect.velocityX = 5;
*/
fixedrect = createSprite(400, 50, 50, 80);
movingrect = createSprite(400, 350, 80, 50);

movingrect.velocityY = -5;
fixedrect.velocityY =5;

fixedrect

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  movingrect.debug = true;
  fixedrect.debug = true;
}

function draw() {
  background(0);
 /* movingrect.x = mouseX;
  movingrect.y = mouseY;
*/
  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2
    && movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2
    && fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2
    ){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }

  if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x-movingrect.x < movingrect.width/2 + fixedrect.width/2
    ){
    movingrect.velocityX *= -1;
    fixedrect.velocityX *= -1;
  }

  if(movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2
    && fixedrect.y-movingrect.y < movingrect.height/2 + fixedrect.height/2
    ){
      movingrect.velocityY *= -1;
      fixedrect.velocityY *= -1;
    }

  drawSprites();
}