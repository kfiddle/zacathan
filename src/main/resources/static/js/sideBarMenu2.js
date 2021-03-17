const menuStrings = ["about", "coming up next", "2015 - 2016 presentations", "meeting length presentations",
    "course length presentations", "seminar length presentations", "contact"];

const sideBarMenuItems = [];


for (let h = 0; h < menuStrings.length; h++) {
    let menuItem = document.createElement('h3');
    menuItem.classList.add("leastHeaderishText");
    menuItem.classList.add("sideMenu");
    menuItem.style.marginTop = "1rem";
    menuItem.innerText = menuStrings[h];
    sideBar.appendChild(menuItem);
    sideBarMenuItems.push(menuItem);

    console.log(menuItem.innerHTML.length);

    let index = 1;
    menuItem.addEventListener('mouseover', () => {
        changeColor(menuItem, index);
    });

    menuItem.addEventListener('mouseout', ()=> {
        menuItem.style.color = "black";
    });
}

function changeColor(menuItem, index) {
    if (index < menuItem.innerHTML.length + 1) {
        setTimeout(oneLetterAtATime, index * 30, menuItem, index);
        index++;
        console.log(index);
        changeColor(menuItem, index);
    }
}

function oneLetterAtATime(menuItem, index) {
    let itemNumber = sideBarMenuItems.indexOf(menuItem);
    let stringIndex = menuStrings[itemNumber];
    menuItem.innerText = stringIndex.substr(0, index);
    menuItem.style.color = "rgb(0,20,230)";
}



