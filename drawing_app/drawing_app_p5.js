var color;

function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke(0);
}

function touchMoved() {
	fill(mouseX, mouseX, mouseX);
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
