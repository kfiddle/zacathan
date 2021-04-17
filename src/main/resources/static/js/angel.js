const hitMeButton = document.getElementById('hitMeButton');
const background = document.getElementById('blurryBackground');
const lady = document.getElementById('croppedCenterLady');

const unBlur = () => {
    // for (let i = 0; i <= 15; i++) {
    //     setTimeout(() => {
    //         background.style.filter = `blur(${15 - i}px)`;
    //     }, 200 * i)
    // }

    background.style.filter = 'blur(0px)';

}

const zoomOut = () => {
    let backgroundWidth = background.clientWidth;
    let ladyBox = lady.getBoundingClientRect();

    let ladyWidth = lady.clientWidth;
    let ladyTop = ladyBox.top;
    let ladyLeft = ladyBox.left;

    background.style.width = backgroundWidth - (backgroundWidth / 5) + 'px';
    lady.style.width = ladyWidth - (ladyWidth / 5) + 'px';

    console.log(ladyTop);
    console.log(ladyLeft);


    lady.style.top = (ladyTop - (ladyTop / 5)) + 20 + 'px';
    lady.style.left = (ladyLeft - (ladyLeft / 5)) - 5 + 'px';

}


const unBlurAndZoomOut = () => {
    unBlur();
    zoomOut();

}

hitMeButton.addEventListener('click', unBlurAndZoomOut);
