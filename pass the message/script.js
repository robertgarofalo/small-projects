let userName = prompt("What is your name?");

let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");
let input = document.getElementById("input");
let message = document.getElementById("message");


submitButton.addEventListener("click", function(){
    let inputValue = input.value;
    if (userName === null || userName === "") {
    message.textContent = "Your message: " + inputValue;
    
    } else if (userName[userName.length - 1] === 's') {
        message.textContent = userName + "' message: " + inputValue;
        
    } else {
    message.textContent = userName + "'s message: " + inputValue;
    
    }
    document.getElementById("input").value = "";
});

resetButton.addEventListener("click", function(){
    //remove text in input field
    input.value = "";
    //remove message at bottom
    message.textContent = "";
    
})


