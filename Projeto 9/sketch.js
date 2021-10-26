var quadrado
function setup() {
  createCanvas(400,400);
  quadrado = createSprite(200,200, 50, 50);
  quadrado.shapeColor = color("black");
}

function draw() {
  background("white");

  if (keyDown("w")){
    background("blue")
  }
  if (keyDown("s")){
    background("black");
  }
  if (keyDown("a")){
    background("red");
  }
  if (keyDown("d")){
    background("yellow");
  }
  drawSprites();
}




