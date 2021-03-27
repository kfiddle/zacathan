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
            menuItem.style.marginTop = "2.7rem";
            menuItem.innerText = series.title;
            sideBarMenuItems.push(series.title);

            let index = 1;

            menuItem.addEventListener('mouseover', () => {
                for (let title of sideBar.childNodes) {
                    title.style.color = "black";
                }
                changeColor(menuItem, index);
            }
                );

            menuItem.addEventListener('mouseout', () => {
                menuItem.style.color = "black";
                for (let title of sideBar.childNodes) {
                    title.style.color = "black";
                }
            });

            menuItem.addEventListener('click', () => {
                let lecturesToDisplay = [];
                body.style.backgroundColor = "rgb(128, 128, 129)";


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
        horizontalDiv.style.transition = (j / 6) + 0.5 + "s";
        for (let k = 0; k < 3; k++) {
            if (lectures[j + k]) {
                let smallCubicle = document.createElement('div');
                let cubicleTextDiv = document.createElement('div');
                cubicleTextDiv.innerHTML = lectures[j + k];
                cubicleTextDiv.classList.add('cubicleTextDiv');
                smallCubicle.appendChild(cubicleTextDiv);
                smallCubicle.style.width = (mainWidth / 3) + "px";
                smallCubicle.classList.add("smallCubicle");
                smallCubicle.id = "smallCubicle" + (j + k);

                smallCubicle.addEventListener('mouseover', ()=> {
                    cubicleTextDiv.style.transform = "translateY(-6px)";
                    cubicleTextDiv.style.color = "darkred";
                })

                smallCubicle.addEventListener('mouseout', ()=> {
                    cubicleTextDiv.style.transform = "translateY(0px)";
                    cubicleTextDiv.style.color = "black";
                })


                horizontalDiv.appendChild(smallCubicle);
            }
        }
        mainStuff.appendChild(horizontalDiv);
    }
    setTimeout(slideIn, 10);
}

// for (let j = 0; j <= lectures.length; j = j + 3) {
//     let horizontalDiv = document.createElement('div');
//     horizontalDiv.classList.add('horizontalDiv');
//     horizontalDiv.id = 'horizontalDiv' + j;
//     horizontalDiv.style.transition = (j / 6) + 0.5 + "s";
//     for (let k = 0; k < 3; k++) {
//         if (lectures[j + k]) {
//             let smallCubicle = document.createElement('div');
//             smallCubicle.innerHTML = lectures[j + k];
//             smallCubicle.style.width = (mainWidth / 3) + "px";
//             smallCubicle.classList.add("smallCubicle");
//             smallCubicle.id = "smallCubicle" + (j + k);
//             horizontalDiv.appendChild(smallCubicle);
//         }
//     }
//     mainStuff.appendChild(horizontalDiv);
// }
// setTimeout(slideIn, 10);
// }


function slideIn() {
    let slideRules = Array.from(document.querySelectorAll('.horizontalDiv'));

    slideRules.forEach(slide => {
        slide.style.transform = `translateX(-1vw)`;
    })

}

function changeColor(menuItem, index) {
    if (index < menuItem.innerHTML.length + 1) {
        let originalString = menuItem.innerText;
        setTimeout(oneLetterAtATime, index * 10, menuItem, originalString, index);
        index++;
        changeColor(menuItem, index);
    }
}

function oneLetterAtATime(menuItem, originalString, index) {
    menuItem.innerText = originalString.substr(0, index);
    menuItem.style.color = "rgb(0, 20, 230)";
}


// let currentElem = null;
//
// sideBar.onmouseover = function (event) {
//
//     if (currentElem) return;
//
//     let target = event.target.closest('h3');
//     if (!target) return;
//
//     if (!sideBar.contains(target)) return;
//
//     currentElem = target;
//     onEnter(currentElem);
// };

// sideBar.onmouseout = function (event) {
//
//     if (!currentElem) return;
//
//     let relatedTarget = event.relatedTarget;
//
//     while (relatedTarget) {
//
//         if (relatedTarget == currentElem) return;
//         relatedTarget = relatedTarget.parentNode;
//     }
//     onLeave(currentElem);
//     currentElem = null;
// };


// function onEnter(elem) {
//     // elem.style.background = 'pink';
//
//     let index = 1;
//     changeColor(elem, index);
//
// }
//
//
// function onLeave(elem) {
//     elem.style.color = "black";
//
// }



