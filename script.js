const noButton = document.querySelector('.no');

function move(){
   noButton.style.position = 'absolute';
   noButton.style.top = Math.floor(Math.random()*window.innerHeight)+'px';
   noButton.style.left = Math.floor(Math.random()*window.innerWidth)+'px';
}

noButton.addEventListener('mouseenter', move);
