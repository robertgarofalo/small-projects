
let container = document.getElementById("container");
let rightButton = document.getElementById("rightButton");
let leftButton = document.getElementById("leftButton");
let images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];

let imagesIndex = 0;


rightButton.addEventListener("click", function(){
    imagesIndex++;
    
    if(imagesIndex > 4){
        imagesIndex = 0;
    }
    console.log(imagesIndex);
    addBackground();


})

leftButton.addEventListener("click", function(){
   imagesIndex--;
   
   if(imagesIndex < 0){
       imagesIndex = 4;
   }
   console.log(imagesIndex);
   addBackground();
   
})


function addBackground(){
    container.style.background = "url('images/" + images[imagesIndex] + "')";
    container.style.backgroundPosition = "center";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundSize = "cover";
}


