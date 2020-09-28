var screen = document.querySelector('.menu'),
    small = document.querySelector('.small_screen');

screen.addEventListener('click', function() {
    small.style.display = 'block';
    small.style.marginTop = '1.7em';
    small.style.width = '70%';
    small.style.height = '30em';
    small.style.opacity = 0.9;
})

let  close = document.querySelector('.close');
close.addEventListener('click', function() {
    small.style.display = 'none'
})

var buttons = document.querySelectorAll('.buy');
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        this.style.backgroundColor = '#008000'
    }
}