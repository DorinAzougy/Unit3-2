
var stepX;
var stepY;

function setup(){
  createCanvas(400, 400);
  background(0);
}

function draw(){
  noStroke();
noFill();
colorMode(RGB, 255, 200, 100, 1);


  
  stepX = mouseX+2;
  stepY = mouseY+2;
  for (var gridY=0; gridY<height; gridY+=stepY){
    for (var gridX=0; gridX<width; gridX+=stepX){
      fill(gridX, height-gridY, 100);
      ellipse(gridX, gridY, stepX, stepY);
    }
  }
}
