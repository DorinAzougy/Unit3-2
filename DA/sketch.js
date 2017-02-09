var letter = "D";
var letter1 = "A";

function setup(){
  createCanvas(780, 780);
  background(100,80,230,2);
  stroke(255,40,255);
  noFill();
  textFont("Tahoma");
  textSize(12);
  textAlign(CENTER, CENTER);
}

function mouseMoved(){
  background(100,80,230,2);
  noStroke();
  fill(255,40,100);
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function mouseDragged(){

  stroke(255,0,255);
  noFill();
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
    text(letter1, width/4, mouseY);
}

function keyPressed() {
  if (keyCode == CONTROL) save("P_3_0_01.png");
}

function keyTyped(){
      letter = str(key);
    letter1 = str(key);
}