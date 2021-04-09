let logo = document.getElementById('logo');
let images = document.querySelectorAll('.img');
let bodyEl = document.getElementsByTagName("BODY")[0];

let colors = ['#337ab7', '#5cb85c', '#f0ad4e', '#5bc0de', '#d9534f'];

images.forEach(image => {
    image.addEventListener('mouseover', (e) => {
        // If classlist A
        if (e.target.classList.contains('a')) {
            if (e.target.classList.contains('img-up')) {
                e.target.classList.remove('img-up');
            } else {
                e.target.classList.add('img-up');
            }
        }

        // If classlist B
        if (e.target.classList.contains('b')) {
            if (e.target.classList.contains('img-down')) {
                e.target.classList.remove('img-down');
            } else {
                e.target.classList.add('img-down');
            }
        }

    })
})


let looping;

function hoverLogo() {
    looping = setInterval(movingImages, 350);
}

function movingImages() {
    images.forEach(image => {
        if (image.classList.contains('a')) {
            if (image.classList.contains('img-up')) {
                image.classList.remove('img-up');
            } else {
                image.classList.add('img-up');
            }
        }

        if (image.classList.contains('b')) {
            if (image.classList.contains('img-down')) {
                image.classList.remove('img-down');
            } else {
                image.classList.add('img-down');
            }
        }

        //insert random rgb color here
        let rand = Math.floor(Math.random() * 5);
        bodyEl.style.backgroundColor = colors[rand];
    });
}

function stopMovingImages() {
    clearInterval(looping);
    bodyEl.style.backgroundColor = "#fff";
}

logo.addEventListener('mouseover', hoverLogo);

logo.addEventListener('mouseout', stopMovingImages);


// letter bounce

let letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
    letter.addEventListener('mouseenter', function () {
        letter.classList.add('bounce');
    })
});

letters.forEach(letter => {
    letter.addEventListener('animationend', function () {
        letter.classList.remove('bounce');

    })
});


// Mobile menu
let mobileMenu = document.getElementById('mobile-menu');
let openMobileMenuButton = document.getElementById('hamburger');
let closeMobileMenuButton = document.getElementById('close-mobile-menu');

// Open mobile menu
openMobileMenuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'flex';
    mobileMenu.style.transform = 'translateX(0)';
    mobileMenu.style.transition = '1s ease';
})

// Close mobile menu
closeMobileMenuButton.addEventListener('click', function () {
    mobileMenu.style.transform = "translateX(-100vw)";
    mobileMenu.style.transition = '1s ease';
})