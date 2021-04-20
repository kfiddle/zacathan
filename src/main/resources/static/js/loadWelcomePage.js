const ladyInBackground = document.getElementById('modestAngel');
const header = document.querySelector('header');
const body = document.querySelector('body');

const ladyChange = () => {
    ladyInBackground.style.filter = 'brightness(60%) hue-rotate(180deg) saturate(40%) invert(20%)';
    ladyInBackground.style.width = '65vw';
    ladyInBackground.style.marginLeft = '10vw';
    ladyInBackground.style.border = '5px solid slategray';
    header.style.transform = 'translateY(0vh)';
    body.style.backgroundColor =  'rgb(235, 245, 255)';
}

window.addEventListener('mousemove', ladyChange);


