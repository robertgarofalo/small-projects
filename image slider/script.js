//https://smartslider3.com/image-slider/

let container = document.getElementById("container");
let rightButton = document.getElementById("rightButton");
let leftButton = document.getElementById("leftButton");
let addImageButton = document.getElementById('add-img-btn')
let deleteImageButton = document.getElementById('delete-img-btn');

let images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];
let imagesIndex = 0;

let counterMenuArray = []
let counterMenu = document.getElementById('counter');
let counterItem;

const inputElement = document.getElementById("input");


//Add counter menu items to the DOM
function initializeCounterMenu(){
    counterMenuArray = [];
    counterMenu.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        
        if (i === imagesIndex){
           // counterItem.classList.add('selected-counter-item');
           counterItem = `<i class="fa fa-circle selected-counter-item"></i>`;
        } else {
            counterItem = `<i class="fa fa-circle"></i>`;
        }
        
        counterMenuArray.push(counterItem);
            //------display individual items in the dom
            counterMenu.innerHTML += counterItem;
}
}

//===============================================TO BE COMPLETED============================================//

// Connect image to counter item
function imgCounterConnect(){
    
    let counterIndex = counterMenuArray.indexOf(counterMenuArray[imagesIndex]);

    console.log('this is counterMenuArray.indexOf(counterMenuArray[imagesIndex] ', counterIndex);
   // console.log('this is counterMenuArray[counterIndex] ', counterMenuArray[counterIndex]);
    
    
    //counterIndex.classList.add('selected-counter-item');
}

//========================================================================================================//

//Add counter item
function addCounterItem() {

    if (images.length > counterMenuArray.length){
        counterMenuArray.push(counterItem);
        initializeCounterMenu();
        console.log('images index from addcounteritem func ', imagesIndex);
    }

}

//Add background image to the slider
function addBackground() {
    
    if (images.includes("no-img.png")) {
        deleteImageButton.disabled = true;
        counterMenu.style.visibility = "hidden";
        rightButton.style.visibility = "hidden";
        leftButton.style.visibility = "hidden";
    } else {
        deleteImageButton.disabled = false;
        counterMenu.style.visibility = "visible";
         rightButton.style.visibility = "visible";
         leftButton.style.visibility = "visible";
    }

    if (images.length === 1){
        rightButton.style.visibility = "hidden";
        leftButton.style.visibility = "hidden";
    }

    if (!images[imagesIndex].includes('http')) {
        fadeIn(container);
        container.style.background = `url('images/${images[imagesIndex]}')`;
    } else {
        fadeIn(container);
        container.style.background = `url('${images[imagesIndex]}')`;
    }
    container.style.backgroundPosition = "center";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundSize = "cover";
}

// Fade in image
function fadeIn(element) {
    element.style.display = "block";
    element.style.opacity = 0.3;
    var tick = function () {
        element.style.opacity = +element.style.opacity + 0.02;
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

// Slide right
function slideRight() {
    if (images.length === 1){ 
        addBackground();
        return;
    } else {
    imagesIndex++;
    console.log('images length ', images.length);
    console.log('images index ', imagesIndex);

    if (imagesIndex >= images.length) {
        imagesIndex = 0;
        console.log('images index is greater or equal to images length - make images index 0');
        console.log(imagesIndex);
    }
    addBackground();
}
}

// Slide left
function slideLeft() {
    imagesIndex--;
    if (imagesIndex < 0) {
        imagesIndex = images.length - 1;
    }
    addBackground();
}

// upload files 
function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    const objectURL = window.URL.createObjectURL(fileList[0]);
    
    if (images.includes("no-img.png")) {
        images.pop();
    }
    images.push(objectURL);
    imagesIndex = images.length - 1;
    addBackground();
    addCounterItem();
}

// Remove image from slider
function removeImage() {
    images.splice([imagesIndex], 1);
    imagesIndex = images.length - 1;

    if (imagesIndex === -1) {
        images.push('no-img.png');
        imagesIndex = 0;
        addBackground();
    } else {
        addBackground();
    }
    removeCounterItem();
}

//Remove counter item
function removeCounterItem(){
    if (images.length < counterMenuArray.length){
        counterMenuArray.pop();
        initializeCounterMenu();
        console.log('images index from removecounteritem func ', imagesIndex);
    }

}

// Event listeners
inputElement.addEventListener("change", handleFiles);

rightButton.addEventListener("click", slideRight);

leftButton.addEventListener("click", slideLeft);

addImageButton.addEventListener('click', function () {
    if (inputElement) {
        inputElement.click();
    }
})

deleteImageButton.addEventListener('click', removeImage);


initializeCounterMenu();

/////// To do - 

/*

-COUNTER MENU
Link counter to number of images in array
if image is deleted/added, update number of counters by creating/removing i fa elements

if no images at all, hide counters menu and slider arrows


//footer - made by
//responsiveness

*/