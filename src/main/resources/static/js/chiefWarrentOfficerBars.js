const bars = document.getElementById("bars");


for (let j = 0; j < 3; j++) {

    let bar = document.createElement("span");
    bar.style.display = "block";
    bar.style.position = "absolute";
    bar.style.width = "22px";
    bar.style.height= "4px";
    bar.style.backgroundColor = "#1a1a1a"
    bar.style.top = (j * 6) + "px";
    bars.appendChild(bar);

}

//
// display: block;
// position: absolute;
// width: 22px;
// height: 4px;
// background-color: #1a1a1a;
