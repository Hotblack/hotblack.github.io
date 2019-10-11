var color;
var button;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //what? ab
  noStroke();
  fill(45, 76, 56, 255);
  background(0);

  button = createButton('BLACK');
  button.position(19,19);
  button.mousePressed(changeBrush);

  button = createButton('GRADIENT');
  button.position(24,24);
  button.mousePressed(changeGradient);
//tfvgbhnj
}

function touchMoved() {

 //line(mouseX, mouseY, pmouseX, pmouseY);
 
    ellipse(mouseX, mouseY, abs(pmouseX-mouseX)+10, abs(pmouseY-mouseY)+10);

  return false;
}

function changeBrush() {
	fill(0,0,0);
}

function changeGradient() {
	fill(mouseX/2, (mouseX), mouseY/2);

}
