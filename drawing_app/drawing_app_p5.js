var color;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(50);
  stroke(0);
  fill(45, 76, 56, 255);
}

function touchMoved() {

 //line(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX, mouseY, pmouseX, pmouseY);

  return false;
}
