const sideBarMenuItems = [];
const header = document.querySelector('header');
const mainStuff = document.getElementById("theRealContent");
const mainWidth = mainStuff.offsetWidth;
const converterDiv = document.getElementById('converterDiv');

const COLONIALCONVERTER = 'Colonial Currency Converter';


async function loadSideBarPage() {

    const seriesData = await fetch("/api/lecture-series-list");
    const fullShebang = await seriesData.json();

    let newAddition = {
        title: COLONIALCONVERTER
    };

    fullShebang.push(newAddition);

    fullShebang.forEach(series => {
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
        });

        menuItem.addEventListener('mouseout', () => {
            menuItem.style.color = "black";
            for (let title of sideBar.childNodes) {
                title.style.color = "black";
            }
        });

        menuItem.addEventListener('click', () => {
            let lecturesToDisplay = [];

            series.title === COLONIALCONVERTER ? converterDiv.style.transform = 'translateY(-100vh)':
            body.style.backgroundColor = "rgb(128, 128, 129)";
            // body.style.overflow = 'scroll';
            series.lectures.forEach(lecture => {
                lecturesToDisplay.push(lecture.title);
            })
            displaySpecificLectures(lecturesToDisplay);
        })


        sideBar.appendChild(menuItem)


        function displaySpecificLectures(lectures) {

            while (mainStuff.lastChild) {
                mainStuff.removeChild(mainStuff.lastChild);
            }

            setTimeout(() => {


            })
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

                        smallCubicle.addEventListener('mouseover', () => {
                            cubicleTextDiv.style.transform = "translateY(-6px)";
                            cubicleTextDiv.style.color = "darkred";
                        })

                        smallCubicle.addEventListener('mouseout', () => {
                            cubicleTextDiv.style.transform = "translateY(0px)";
                            cubicleTextDiv.style.color = "black";
                        })


                        horizontalDiv.appendChild(smallCubicle);
                    }
                }
                mainStuff.appendChild(horizontalDiv);
            }
            setTimeout(slideIn, 30);
        }

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
    })

}


loadSideBarPage();




