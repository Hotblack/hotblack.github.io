var color;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(50);
  stroke(0);
  fill(45, 76, 56, 255);
}

function touchMoved() {

 //line(mouseX, mouseY, pmouseX, pmouseY);
 fill(mouseX/2, (mouseX), mouseY/2);
    ellipse(mouseX, mouseY, abs(pmouseX-mouseX)+10, abs(pmouseY-mouseY)+10);

  return false;
}
