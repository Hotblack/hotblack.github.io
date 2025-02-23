var color;
var button;
var changeColor;
var clear;
var changeGradient;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //what? ab
  noStroke();
  fill(45, 76, 56, 255);
  //background(0);

  button = createButton('BLACK');
  button.position(20,20);
  button.mousePressed(changeBlack);

  button = createButton('GRADIENT');
  button.position(20,50);
  button.mousePressed(changeGradient);

  button = createButton('RED');
  button.position(20,80);
  button.mousePressed(changeRed);

  button = createButton('CLEAR');
  button.position(20,110);
  button.mousePressed(clear);


    changeColor = false;
    clear = false;
    changeEllipse = false;

}

function touchMoved() {

 //line(mouseX, mouseY, pmouseX, pmouseY);

 	if (changeColor == true) {
 		fill(mouseX/2, (mouseX), mouseY/2);
	}

	
	ellipse(mouseX, mouseY, abs(pmouseX-mouseX)+10, abs(pmouseY-mouseY)+10);


	// if(changeLine == true) {
	// 	line 
	// }
	
	// if (clear == true) {
	// 	clear();
	// }
 

  return false;
}

function changeBlack() {
	changeColor = false;
	fill(0,0,0);
}

function changeRed() {
	changeColor = false;
	fill(255,0,0);
}

function changeGradient() {
	changeColor = true;

}

function clear() {
	clear();
}
