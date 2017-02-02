var dot = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0,

 };

function setup() {
  createCanvas(600,400);
  background(20,140,100,65);
}

function draw() {
  col.r = random(100,250);
  col.g = 0;
  col.b = random(50,250);
  dot.x = random(0,width);
  dot.y = random(0,height);
  noStroke(col.r, col.g, col.b);
  fill(col.r, col.g, col.b, 60);
  rect(dot.x, dot.y, 24, 24);
}
  
