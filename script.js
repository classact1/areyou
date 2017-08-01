const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
const video = document.querySelector('.video');
const container = document.querySelector('.container');
const body = document.querySelector('body');

let escaped = 0;

function escape(){
   if(escaped < 4){
      noButton.style.position = 'absolute';
      noButton.style.top = Math.floor(Math.random()*(window.innerHeight - noButton.offsetHeight))+'px';
      noButton.style.left = Math.floor(Math.random()*(window.innerWidth - noButton.offsetWidth))+'px';
      escaped++;
   }
   else
      changeBtnText();
}

function changeBtnText(){
   noButton.innerText = 'YES';
   yesButton.innerText = 'NO';
}

function triggerVideo(){
   container.style.display = 'none';
   video.style.display = 'block';
   body.style.backgroundColor = '#f740e1';
   video.src += '?autoplay=1';
}

noButton.addEventListener('mouseenter', escape);
noButton.addEventListener('click', triggerVideo);

