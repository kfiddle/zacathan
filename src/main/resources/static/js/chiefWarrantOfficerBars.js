const bars = document.getElementById("bars");
const sideBarButtonDiv = document.getElementById("sideBarButtonDiv");
const sideBar = document.getElementById("sideBar");
const converterDiv = document.getElementById('converterDiv');
const mainStuff = document.getElementById("theRealContent");
const navElement = document.getElementById('navElement');
const aboutMeDiv = document.getElementById('aboutMeDiv');

let sideBarWidth = sideBar.offsetWidth;
let barsArray = [];

let converterOpen = false;
let sideBarOpen = false;
let barsSpun = false;

for (let j = 0; j < 3; j++) {

    let bar = document.createElement("span");
    bar.style.display = "block";
    bar.style.position = "absolute";
    bar.style.width = "22px";
    bar.style.height = "4px";
    bar.style.backgroundColor = "#1a1a1a"
    bar.style.transition = "0.3s";
    bar.style.top = (j * 8) + 3 + "px";

    bars.appendChild(bar);
    barsArray.push(bar);
}

sideBarButtonDiv.addEventListener('mouseover', () => {
    scrollingBars("up");
});

sideBarButtonDiv.addEventListener('mouseout', () => {
    scrollingBars("back");
});

sideBarButtonDiv.addEventListener('click', () => {
    moveSideBar();
    spinTheBars();
})

function resetBar(j, spinType) {
    if (spinType === "up") {
        barsArray[j].style.opacity = "0.5";
        barsArray[j].style.top = (j * 8) - 3 + "px";
        barsArray[j].style.backgroundColor = "darkBlue";
    } else if (spinType === "back") {
        barsArray[j].style.opacity = "1";
        barsArray[j].style.top = (j * 8) + 3 + "px";

        converterOpen ? barsArray[j].style.backgroundColor = 'gold' :
            barsArray[j].style.backgroundColor = "#1a1a1a";
    }
}

function scrollingBars(spinType) {
    for (let j = 0; j < 3; j++) {
        setTimeout(resetBar, j * 100, j, spinType);
    }
}

function spinTheBars() {
    if (barsSpun === false) {
        barsArray.forEach(bar => {
            bar.style.transform = "rotate(0.5turn)";
            barsSpun = true;
        })
    } else {
        barsArray.forEach(bar => {
            bar.style.transform = "rotate(0turn)";
            barsSpun = false;
        })
    }
}

const displayConverter = () => {

    converterDiv.style.transform = 'translateY(-98vh)';
    moveSideBar();
    glowingBars();
    navElement.innerText = 'BACK';
    header.style.backgroundColor = "rgb(128, 128, 129)";
    body.style.backgroundColor = "rgb(128, 128, 129)";
    converterOpen = true;

}

function moveSideBar() {
    let converterDiv = document.getElementById('converterDiv');
    if (converterOpen) {
        converterDiv.style.transform = 'translateY(100vh)';
        header.style.backgroundColor = 'white';
        navElement.innerText = '';
        converterOpen = false;
    }

    if (sideBarOpen) {
        sideBar.style.transform = `translateX(-${sideBarWidth}px)`;
        ladyInBackground.style.left = '8vw';

        while (mainStuff.lastChild) {
            mainStuff.removeChild(mainStuff.lastChild);
        }
        sideBarOpen = false;
    } else if (!sideBarOpen) {
        sideBar.style.transform = `translateX(-16px)`;
        ladyInBackground.style.left = '16vw';
        sideBarOpen = true;
    }
    body.style.backgroundColor = 'rgb(235, 245, 255)';
}


function glowingBars() {
    let barsToBrighten = Array.from(bars.querySelectorAll('span'));
    barsToBrighten.forEach(bar => {
        bar.style.backgroundColor = 'gold';
    })
}

function openWindowListener() {
    window.addEventListener('mousemove', () => {
        setTimeout(() => {
            moveSideBar();
        }, 2000);
    }, {once: true});
}

openWindowListener();

