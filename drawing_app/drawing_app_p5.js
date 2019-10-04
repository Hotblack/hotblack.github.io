var color;

function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke(0);
  fill(45, 76, 56);
}

function touchMoved() {

  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
