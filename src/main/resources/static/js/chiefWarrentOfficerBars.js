const bars = document.getElementById("bars");
const sideBarButtonDiv = document.getElementById("sideBarButtonDiv");
let barsArray = [];

for (let j = 0; j < 3; j++) {

    let bar = document.createElement("span");
    bar.style.display = "block";
    bar.style.position = "absolute";
    bar.style.width = "22px";
    bar.style.height= "4px";
    bar.style.backgroundColor = "#1a1a1a"
    bar.style.transition = "0.3s";
    bar.style.top = (j * 6) + 2 + "px";
    bars.appendChild(bar);
    barsArray.push(bar);
}

// sideBarButtonDiv.addEventListener('mouseover', ()=> {
//     barsArray[0].style.opacity = "0.5";
//     barsArray[0].style.top = "0px";
// });

sideBarButtonDiv.addEventListener('mouseover', ()=> {
    scrollingBars("up");
});

sideBarButtonDiv.addEventListener('mouseout', ()=> {
    scrollingBars("back");
});

// sideBarButtonDiv.addEventListener('mouseout', ()=> {
//     barsArray[0].style.opacity = "1";
//     barsArray[0].style.top = "2px";
// })

function resetBar(j, spinType) {
    if (spinType === "up") {
        barsArray[j].style.opacity = "0.5";
        barsArray[j].style.top = (j * 6) - 2 + "px";
    } else if (spinType === "back") {
        barsArray[j].style.opacity = "1";
        barsArray[j].style.top = (j * 6) + 2 + "px";
    }
}

function scrollingBars(spinType) {
    for (let j = 0; j < 3; j++) {
        setTimeout(resetBar, j* 100, j, spinType);
    }


}

