var dots = [];
var img;

function setup() {
  createCanvas(500,500, WEBGL);
  img = loadImage("sprinkles1.jpg");
}

function draw() {
  background(255,255,102,95);
  


  ambientLight(150);
  directionalLight(13, 13, 30, 20, 20, 0.25);
  ambientMaterial(250, 125, 100);
  
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  torus(70,40,24,16);
 
  
  
  for(var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    resetMatrix();
    
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    translate(dot.x, dot.y, -500);
    
    cylinder(1, 3);
  }
}