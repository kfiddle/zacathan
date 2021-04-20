const ladyInBackground = document.getElementById('modestAngel');
const header = document.querySelector('header');
const body = document.querySelector('body');

const ladyChange = () => {
    ladyInBackground.style.filter = 'brightness(30%) hue-rotate(80deg) invert(100%)';
    ladyInBackground.style.width = '65vw';
    ladyInBackground.style.marginLeft = '8vw';
    header.style.transform = 'translateY(0vh)';
    body.style.backgroundColor =  'rgb(235, 245, 255)';

}

window.addEventListener('mousemove', ladyChange);


