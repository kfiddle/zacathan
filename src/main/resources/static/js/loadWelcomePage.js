const ladyInBackground = document.getElementById('modestAngel');
const header = document.querySelector('header');


const ladyChange = () => {
    ladyInBackground.style.filter = 'brightness(30%) hue-rotate(90deg) invert(100%)';
    ladyInBackground.style.width = '70vw';
    ladyInBackground.style.marginLeft = '15vw';
    header.style.transform = 'translateY(0vh)';
}



setTimeout(ladyChange, 500)
