var color;

function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke(0);
}

function touchMoved() {
	fill(45, 76, 56);
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
