var color;
var button;
var flag;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //what? ab
  noStroke();
  fill(45, 76, 56, 255);
  //background(0);

  button = createButton('BLACK');
  button.position(20,20);
  button.mousePressed(changeBrush);

  button = createButton('GRADIENT');
  button.position(20,50);
  button.mousePressed(changeGradient);
  flag = false;
}

function touchMoved() {

 //line(mouseX, mouseY, pmouseX, pmouseY);

 	if (flag == true) {
 		fill(mouseX/2, (mouseX), mouseY/2);
	}
 
    ellipse(mouseX, mouseY, abs(pmouseX-mouseX)+10, abs(pmouseY-mouseY)+10);

  return false;
}

function changeBrush() {
	fill(0,0,0);
}

function changeGradient() {
	flag = true;

}
