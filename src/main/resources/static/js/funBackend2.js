const listToRevise = document.getElementById('listToRevise');
const menuItemsList = document.getElementById("menuItemsList");
const editingBox = document.getElementById("editingBox");
const finalDelete = document.getElementById('finalDelete');
const testingButton = document.getElementById("testingButton");
const testingModal = document.getElementById('editingModal');
const backdrop = document.getElementById("backdrop");
const xButton = document.getElementById('x');

const LECTURES = 'lectures menu';
const SERIES = 'series';
const ADDSERIES = 'add your new Series title below';
const REMOVESERIES = 'which is to be removed?'


const seriesButtons = [document.getElementById('addSeriesButton'),
    document.getElementById('removeSeriesButton'),
    document.getElementById('editSeriesButton')]


async function doThingsOnThePage() {

    const seriesData = await fetch("/api/lecture-series-list");
    const fullShebang = await seriesData.json();

    const eraseFormerLectures = () => {
        while (listToRevise.lastChild) {
            listToRevise.removeChild(listToRevise.lastChild);
        }
    }

    const toggleBackdrop = () => {
        backdrop.classList.toggle('visible');
    }

    const toggleModal = () => {
        testingModal.classList.toggle('visible');
        toggleBackdrop();
    }

    const openEditingBox = (titleToEdit, menuToEdit) => {
        toggleModal();
    }

    const openLectures = seriesTitle => {
        eraseFormerLectures();
        fullShebang.forEach(item => {
            if (item.title === seriesTitle) {
                item.lectures.forEach(lecture => {
                    let lectureElem = document.createElement('li');
                    lectureElem.innerText = lecture.title;
                    lectureElem.addEventListener('click', () => {
                        openEditingBox(lecture.title, LECTURES);
                    })
                    listToRevise.appendChild(lectureElem);

                })
            }
        })


    }


    fullShebang.forEach(sheBang => {
        let seriesTitle = document.createElement('li');
        seriesTitle.innerText = sheBang.title;
        seriesTitle.addEventListener('click', () => {
            openLectures(sheBang.title);
        });
        menuItemsList.appendChild(seriesTitle);
    })


    xButton.addEventListener('click', toggleModal);
    seriesButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            openEditingBox(button.innerText, SERIES);
        })
    })

}


doThingsOnThePage();


















