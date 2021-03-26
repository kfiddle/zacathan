const sideBarMenuItems = [];


const mainStuff = document.getElementById("theRealContent");
const mainWidth = mainStuff.offsetWidth;

fetch("/api/lecture-series-list")
    .then(response => response.json())
    .then(jsonData =>
        jsonData.forEach(series => {
            let menuItem = document.createElement('h3');
            menuItem.classList.add("leastHeaderishText");
            menuItem.classList.add("sideMenu");
            menuItem.style.paddingTop = "2.3rem";
            menuItem.innerText = series.title;
            sideBarMenuItems.push(series.title);

            let index = 1;

            menuItem.addEventListener('mouseover', () => {
                changeColor(menuItem, index);
            });

            menuItem.addEventListener('mouseout', () => {
                menuItem.style.color = "black";

                for (let title of sideBar.childNodes) {
                    title.style.color = "black";
                }
            });

            menuItem.addEventListener('click', ()=> {
                let lecturesToDisplay = [];

                fetch("/api/" + series.title + "/lectures")
                    .then(response => response.json())
                    .then(jsonData =>
                        jsonData.forEach(lecture => {
                            lecturesToDisplay.push(lecture.title);
                        }
                        ))
                    .then(() => displaySpecificLectures(lecturesToDisplay))
                    .catch(err => console.log(err));
            })
            sideBar.appendChild(menuItem);
        })
    )
    .catch(err => console.log(err))


function displaySpecificLectures(lectures) {

    while (mainStuff.lastChild) {
        mainStuff.removeChild(mainStuff.lastChild);
    }

    for (let j = 0; j <= lectures.length; j = j + 3) {
        let horizontalDiv = document.createElement('div');
        horizontalDiv.classList.add('horizontalDiv');
        horizontalDiv.id = 'horizontalDiv' + j;
        horizontalDiv.style.transition = (j / 6) + 0.5 +  "s";
        for (let k = 0; k < 3; k++) {
            let smallCubicle = document.createElement('div');
            smallCubicle.innerHTML = lectures[j + k];
            smallCubicle.style.width = (mainWidth / 3) + "px";
            smallCubicle.classList.add("smallCubicle");
            smallCubicle.id = "smallCubicle" + (j + k);
            horizontalDiv.appendChild(smallCubicle);
        }
        mainStuff.appendChild(horizontalDiv);
    } setTimeout(slideIn, 10 );
}

function slideIn() {
    let slideRules = Array.from(document.querySelectorAll('.horizontalDiv'));

    slideRules.forEach(slide => {
        slide.style.transform = `translateX(-1vw)`;
    })

}



// for (let series of ourTitles) {
//     let menuItem = document.createElement('h3');
//     menuItem.classList.add("leastHeaderishText");
//     menuItem.classList.add("sideMenu");
//     menuItem.style.paddingTop = "2.3rem";
//     menuItem.innerText = series;
//     sideBarMenuItems.push(series);

    // let index = 1;
    //
    // menuItem.addEventListener('mouseover', () => {
    //     changeColor(menuItem, index);
    // });
    //
    // menuItem.addEventListener('mouseout', () => {
    //     menuItem.style.color = "black";
    // });

//     sideBar.appendChild(menuItem);
//
// }


function changeColor(menuItem, index) {
    if (index < menuItem.innerHTML.length + 1) {
        let originalString = menuItem.innerText;
        setTimeout(oneLetterAtATime, index * 25, menuItem, originalString, index);
        index++;
        changeColor(menuItem, index);
    }
}

function oneLetterAtATime(menuItem, originalString, index) {
    menuItem.innerText = originalString.substr(0, index);
    menuItem.style.color = "rgb(0,20,230)";
}




