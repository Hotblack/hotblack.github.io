var colors = [];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

	setupModeButtons();

	setupSquares();

	reset();

}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	//add intital colors to squares
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		//var clickedColor = this.style.background;

		var clickedColor = this.style.background;
		console.log("backgroudn is " +this.style.background);
		// console.log("background color: " +this.style.background);
		// clickedColor = colorToHex(clickedColor);

	    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(clickedColor);
	    
	    var red = parseInt(digits[2]);
	    var green = parseInt(digits[3]);
	    var blue = parseInt(digits[4]);
    
	    var rgb = blue | (green << 8) | (red << 16);
	    clickedColor = digits[1] + '#' + rgb.toString(16).padStart(6, '0');

		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			
		}
		else {
			this.style.background = "#232323";	
			messageDisplay.textContent = "try again";
		}
		});

	}
}

function setupModeButtons(){

for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		// if (this.textContent === Easy) {
		// 	numSquares = 3;
		// }
		// else {
		// 	numSquares = 6;
		// }
		reset();

		//figure out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes
		});
	}
}



function reset() {

	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new randon color
	pickedColor = pickColor();
	//console.log("pickcolor is" +pickedColor);
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change the colors of the squares
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	

		if (colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
		}
		else {
		squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

}


var numSquares = 6;

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0; i < squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}

// 	}

// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0; i < squares.length; i++){
		
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";

// 	}
// });

resetButton.addEventListener("click", function(){
	reset()

});

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16).padStart(6, '0');
};

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add intital colors to squares
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.background;
		console.log("backgroudn is " +this.style.background);
		// console.log("background color: " +this.style.background);
		// clickedColor = colorToHex(clickedColor);

	    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(clickedColor);
	    
	    var red = parseInt(digits[2]);
	    var green = parseInt(digits[3]);
	    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    clickedColor = digits[1] + '#' + rgb.toString(16).padStart(6, '0');


	
		console.log("clickedColor is " +clickedColor);
		console.log("pickedColor is " +pickedColor);

		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			
		}
		else {
			this.style.background = "#232323";	
			messageDisplay.textContent = "try again";
		}
	});

}


function changeColors (color) {
	//loop through all the squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}


}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var array = [];
	//add num random color to array
	for (var i = 0; i < num; i++){
		//get random color and push into array
		array.push(randomColor());
	}
	console.log(array);
	return array;
	//return array
}

function randomColor() {

	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	
	return '#'+Math.floor(Math.random()*16777215).toString(16);
	// return "rgb(" + r + ", " + g + ", " + b + ")";

}