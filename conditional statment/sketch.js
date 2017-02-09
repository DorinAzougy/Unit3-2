var circleX = 0


function setup() {
  createCanvas(600,400)
  background(0)
}

function draw() {
fill(244,250,230,20);
stroke(1)
ellipse(circleX*3,mouseY,30,30);


circleX= circleX+1;
  
}
