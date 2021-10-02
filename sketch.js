var ball;

function setup() {
  createCanvas(800,700);
  ball=createSprite(400,400,20,20);
  ball.shapeColor="red";
}


function draw() 
{
  background(0);

  if (keyDown("right")) {
    ball.x=ball.x+5;
  }

  if (keyDown("down")) {
    ball.y=ball.y+5;
  }

  if (keyDown("left")) {
    ball.x=ball.x-5;
  }

  if (keyDown("up")) {
    ball.y=ball.y-5;
  }
  drawSprites();
}




