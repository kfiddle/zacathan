const sideBarMenuItems = [];
document.getElementById('title').querySelector('h3');
document.getElementById('title').querySelector('h5');
const mainWidth = mainStuff.offsetWidth;


const COLONIALCONVERTER = 'Colonial Currency Converter';
const ABOUTME = 'About Me';

async function loadSideBarPage() {

    const seriesData = await fetch("/api/lecture-series-list");
    const fullShebang = await seriesData.json();

    let converterAddition = {
        title: COLONIALCONVERTER
    };

    let aboutMeAddition = {
        title: ABOUTME
    }

    fullShebang.push(converterAddition);
    fullShebang.unshift(aboutMeAddition);

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
            body.style.backgroundColor = "rgb(128, 128, 129)";

            if (series.title === ABOUTME){
                showAboutMe();
            } else if (series.title === COLONIALCONVERTER) {
                displayConverter()
            } else {
                series.lectures.forEach(lecture => {
                    lecturesToDisplay.push(lecture.title);
                })
                displaySpecificLectures(lecturesToDisplay);
            }
        })


        sideBar.appendChild(menuItem)


        function displaySpecificLectures(lectures) {
            let numberOfHorizontalDivs = 0;

            while (mainStuff.lastChild) {
                mainStuff.removeChild(mainStuff.lastChild);
            }

            for (let j = 0; j <= lectures.length; j = j + 3) {
                let horizontalDiv = document.createElement('div')
                numberOfHorizontalDivs++;
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
                console.log(numberOfHorizontalDivs);
                mainStuff.style.height = ((numberOfHorizontalDivs - 1) * 14) + 'vh';
            }
            setTimeout(slideIn, 30, 'horizontalDiv', '-1vw');

        }

        function renderAboutMeDiv() {
            let aboutMeDiv = document.createElement('div');
            aboutMeDiv.classList.add('aboutMeDiv');
            renderAboutMeText(aboutMeDiv);
            return aboutMeDiv;
        }

        function showAboutMe() {
            while (mainStuff.lastChild) {
                mainStuff.removeChild(mainStuff.lastChild);
            }
            let aboutMeDiv = renderAboutMeDiv();
            mainStuff.appendChild(aboutMeDiv);
            setTimeout(slideIn, 30, 'aboutMeDiv', '20vw');
        }

        function slideIn(className, slideVW) {
            let slideRules = Array.from(document.querySelectorAll('.' + className));
            slideRules.forEach(slide => {
                slide.style.transform = `translateX(${slideVW})`;
            })
        }

        function renderAboutMeText(aboutMeElement) {
            aboutMeElement.innerHTML = `
            
            <p class="aboutMeText">Susan Goss Johnston is a 2011 ProGen alumna, has completed the Advanced Methodology and Evidence Analysis course at
             the Institute of Genealogy and Historical Research and the National Archives' lecture and lab course, 
             Going to the Source, and has attended the National Institute on Genealogical Research. 
             She is a co-editor of the recently published Source Templates for The Master Genealogist (available on Lulu.com). 
             Her personal research focuses on families in New England and the Mid-Atlantic region, 
             and she specializes in military records. A former Maryland resident, she now lives in California, 
             and continues teaching intermediate and advanced genealogy courses there and is a frequent speaker at local 
             meetings and conferences.

            All lectures are PowerPoint presentations that include real-life examples and case studies, all include handouts, 
            and seminar presentations include optional workshops.</p>     
            `
        }

    })



}

loadSideBarPage();





