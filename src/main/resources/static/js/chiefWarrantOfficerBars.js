const bars = document.getElementById("bars");
const sideBarButtonDiv = document.getElementById("sideBarButtonDiv");
const sideBar = document.getElementById("sideBar");
const body = document.querySelector("body");

const headerForTesting = document.querySelector('header');

let sideBarWidth = sideBar.offsetWidth;
let barsArray = [];

let currentSideBarPosition = "closed";
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
    mainContainerEnter();
    body.style.backgroundColor = "rgb(150, 150, 150)";
})


function resetBar(j, spinType) {
    if (spinType === "up") {
        barsArray[j].style.opacity = "0.5";
        barsArray[j].style.top = (j * 8) - 3 + "px";
        barsArray[j].style.backgroundColor = "darkBlue";
    } else if (spinType === "back") {
        barsArray[j].style.opacity = "1";
        barsArray[j].style.top = (j * 8) + 3 + "px";
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

function moveSideBar() {
    if (currentSideBarPosition === "open") {
        sideBar.style.transform = `translateX(-${sideBarWidth}px)`;
        currentSideBarPosition = "closed";
    } else if (currentSideBarPosition === "closed") {
        sideBar.style.transform = `translateX(-16px)`;
        currentSideBarPosition = "open";
    }
}

function mainContainerEnter() {
    mainStuffContainer.style.transform = `translateX(-1vw)`;
}

