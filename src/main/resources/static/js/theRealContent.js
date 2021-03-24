const mainStuff = document.getElementById("theRealContent");

const mainWidth = mainStuff.offsetWidth;




for (let j = 0; j <= 15; j = j + 3) {
    let horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('horizontalDiv');
    horizontalDiv.id = 'horizontalDiv' + j;
    horizontalDiv.style.transition = (j / 6) + 0.5 +  "s";
    for (let k = 0; k < 3; k++) {
        let smallCubicle = document.createElement('div');
        smallCubicle.innerHTML = shows1516[j + k];
        smallCubicle.style.width = (mainWidth / 3) + "px";
        smallCubicle.classList.add("smallCubicle");
        smallCubicle.id = "smallCubicle" + (j + k);
        horizontalDiv.appendChild(smallCubicle);
    }
    mainStuff.appendChild(horizontalDiv);
}



