const ladyInBackground = document.getElementById('modestAngel');
const header = document.querySelector('header');
const body = document.querySelector('body');

const ladyChange = () => {
    ladyInBackground.style.filter = 'brightness(60%) hue-rotate(120deg) saturate(50%) invert(20%)';
    ladyInBackground.style.width = '65vw';
    ladyInBackground.style.marginLeft = '10vw';
    header.style.transform = 'translateY(0vh)';
    body.style.backgroundColor =  'rgb(235, 245, 255)';

}

window.addEventListener('mousemove', ladyChange);


