

const menuStrings = ["about", "coming up next", "2015 - 2016 presentations", "meeting length presentations",
    "course length presentations", "seminar length presentations", "contact"];

const sideBarMenuItems = [];

for (let h = 0; h < menuStrings.length; h++) {
    let menuDiv = document.createElement('div');
    let menuItem = document.createElement('h3');
    menuDiv.classList.add("menuItemDiv");
    menuItem.classList.add("leastHeaderishText");
    menuItem.classList.add("sideMenu");
    menuItem.innerText = menuStrings[h];
    menuDiv.appendChild(menuItem);
    sideBar.appendChild(menuDiv);
    sideBarMenuItems.push(menuDiv);

    menuDiv.addEventListener('mouseover', () => {
        colorWords(menuItem, menuStrings[h], "cyan");
    });

    menuDiv.addEventListener('mouseout', () => {
        colorWords(menuItem, menuStrings[h], "black");
        menuItem.style.textDecoration = "none";
    });

}


function colorWords(menuItem, string, color) {
    for (let j = 0; j < string.length + 1; j++) {
        setTimeout(setLetters, j * 20, j, menuItem, string, color);
    }
}

function setLetters(i, menuItem, theString, color) {
    menuItem.innerText = theString.substr(0, i);
    menuItem.style.color = color;
}

function underlineWords(menuItem, string) {
    for (let j = 0; j < string.length + 1; j++) {
        setTimeout(setLines, j * 20, j, menuItem, string);
    }
}


function setLines(j, menuItem, theString) {
    menuItem.innerText = theString.substr(0, j);
    menuItem.style.textDecoration = "underline";
}








