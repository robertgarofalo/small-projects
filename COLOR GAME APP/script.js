
let numSquares = 6;
let colors = generateRandomColors(numSquares);


let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset")
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected"); // add the "selected" class to the easy button on click
    hardBtn.classList.remove("selected"); // remove the "selected" class to the hard button on click
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected"); // add the "selected" class to the easy button on click
    hardBtn.classList.add("selected"); // remove the "selected" class to the hard button on click
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    

})


resetButton.addEventListener("click", function(){
    //generate all new colors in the array
    colors = generateRandomColors(numSquares);

    //pick a new random color from the array
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    //Change colors of squares
    for (let i = 0; i < squares.length; i++){
  
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
    this.textContent = "New colors";

    messageDisplay.textContent = "";
})

let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor; 


for (let i = 0; i < squares.length; i++){
  
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){  
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
           h1.style.backgroundColor = pickedColor;
           resetButton.textContent = "Play Again?";
            
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


function changeColors(color){
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
   let random = Math.floor(Math.random() * colors.length);
   return colors[random]; 
}

function generateRandomColors(num){
    let arr = [];
    for(let i = 0; i < num; i++){
     arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}