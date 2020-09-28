var screen = document.querySelector('.menu'),
    small = document.querySelector('.small_screen');

screen.addEventListener('click', function() {
    small.style.display = 'block'
    small.style.marginTop = '1.7em';
    small.style.width = '70%'
    small.style.height = '30em';
    small.style.opacity = 0.9;
})

let  close = document.querySelector('.close');
close.addEventListener('click', function() {
    small.style.display = 'none'
})

//An imager slider that doesn't require arrows
var i = 0;
var images = [];
var time = 5000;

//image list
images[0] = 'images/coconut_rice.png';
images[1] = 'images/how_to_0.png';
images[2] = 'images/how_to_1.png';
images[3] = 'images/how_to_2.png';
images[4] = 'images/how_to_3.png';
images[5] = 'images/how_to_4.png';
images[6] = 'images/how_to_5.png';
images[7] = 'images/how_to_6.png';

//function to make image change
function changeImg() {
    document.slide.src  = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0
    }
    setTimeout('changeImg()', time);
}
window.onload = changeImg;


//Js function for interactivity in the more button
/*
var more = document.querySelector('#more'),
    first = document.querySelector('#first'),
    hide = document.querySelector('#hide'),
    second = document.querySelector('#second'),
    arrow = document.querySelectorAll('.arrow')

more.addEventListener('click', function() {
    first.style.height = '20em',
    hide.style.visibility = 'visible',
    more.style.marginTop = '10px',
    second.style.marginBottom = '7em',
    first.style.marginBottom = '3em',
    arrow.style.top = '55em',
    more.style.outline = 'none';
})
*/




//Full background image slider 
//for the left and right arrows
let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right')
current = 0;

//clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none'
    }
}
//init slider
function startSlide() {
    reset()
    sliderImages[0].style.display = 'block'
}

//show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block'
    current--;
}


//show next
function slideRight() {
    reset()
    sliderImages[current + 1].style.display = 'block';
    current++;
}
//left arrow click
arrowLeft.addEventListener('click', function() {
    if(current === 0 ) {
        current = sliderImages.length
    }
    slideLeft();
})

//right arrow click
arrowRight.addEventListener('click', function() {
    if(current === sliderImages.length - 1 ) {
        current = -1
    }
    slideRight();
})
startSlide()
