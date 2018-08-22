var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of picked squares
    var clickedColor = this.style.backgroundColor;
    // compare color to picked one
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct"
      changeColors(clickedColor);
    } else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each colors
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors(num){
  // make an array
  var arr = [];
  // add num random colors to array
  for(var i = 0; i < num; i++){
    // get random colors and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick red 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick green 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick blue 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
