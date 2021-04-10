



async function doThingsOnThePage() {

    const seriesData = await fetch("/api/lecture-series-list");
    const responseForReal = await seriesData.json();

    const listToRevise = document.getElementById('listToRevise');
    const menuItemsList = document.getElementById("menuItemsList");
    const editingBox = document.getElementById("editingBox");
    const finalDelete = document.getElementById('finalDelete');
    const testingButton = document.getElementById("testingButton");
    const testingModal = document.getElementById('editingModal');
    const backdrop = document.getElementById("backdrop");
    const xButton = document.getElementById('x');

    let listOfSeriesTitles = [];
    loadAllSeriesAndTitles();



    function getSeriesList() {
        let tempSeriesList = [];

        fetch("/api/lecture-series-list")
            .then(response => response.json())
            .then(jsonData => {
                jsonData.forEach(series => {
                    tempSeriesList.push(series.title);
                })
            })
            .then(() => {
                transferFetchStuff(tempSeriesList);
            })

            .catch(err => console.log(err))


    }


    function loadAllSeriesAndTitles() {
        fetch("/api/lecture-series-list")
            .then(response => response.json())
            .then(jsonData =>
                jsonData.forEach(item => {
                    let seriesTitle = document.createElement('li');
                    seriesTitle.innerText = item.title;
                    seriesTitle.addEventListener('click', () => {
                        eraseFormerLectures();
                        fetch("/api/" + item.title + "/lectures")
                            .then(response => response.json())
                            .then(jsonData =>
                                jsonData.forEach(lecture => {
                                    let lectureElem = document.createElement('li');
                                    lectureElem.innerText = lecture.title;
                                    lectureElem.addEventListener('click', () => {
                                        openEditingBox(item.title, lecture.title);
                                    })
                                    listToRevise.appendChild(lectureElem);
                                })
                                )
                            .catch(err => console.log(err))
                    })
                    menuItemsList.appendChild(seriesTitle);
                })
                )
            .catch(err => console.log(err))
    }


    function eraseFormerLectures() {
        while (listToRevise.lastChild) {
            listToRevise.removeChild(listToRevise.lastChild);
        }
    }

    function openEditingBox(seriesTitle, lectureTitle) {
        editingBox.style.transform = `translateX(20vw)`;

        let editButton, deleteButton, finalDeleteButton, missclickButton;
        let editButtons = [deleteButton = document.createElement('button'),
            editButton = document.createElement('button'),
            finalDeleteButton = document.createElement('button'),
            missclickButton = document.createElement('button')]

        deleteButton.innerText = "Delete Lecture";
        editButton.innerText = "Edit Details";

        editingBox.appendChild(deleteButton);
        editingBox.appendChild(editButton);

        deleteButton.addEventListener('click', () => {
            finalDelete.style.transform = `translateX(20vw)`;
            finalDelete.style.backgroundColor = "darkGoldenRod";
            finalDeleteButton.innerText = "Just confirming- Lose the lecture?"
            missclickButton.innerText = "No- keep it and close";

            finalDeleteButton.addEventListener('click', () => {
                console.log(seriesTitle + ", " + lectureTitle);
                let formData = {
                    // seriesTitle: seriesTitle,
                    lectureTitle: lectureTitle
                }

                fetch("/api/delete-lecture-series",
                    {
                        method: 'DELETE',
                        body: JSON.stringify(formData),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).catch(error => console.log(error));

                setTimeout(() => {
                    fetch("/api/lecture-series-list")
                        .then(response => response.json())
                        .then(jsonData => console.log(jsonData))
                        .catch(err => console.log(err))

                }, 500);
                setTimeout(() => {
                    loadAllSeriesAndTitles();
                }, 1000);

            })
            finalDelete.appendChild(finalDeleteButton);
            finalDelete.appendChild(missclickButton);

        })
    }

    const toggleBackdrop = () => {
        backdrop.classList.toggle('visible');

    }

    const toggleModal = () => {
        testingModal.classList.toggle('visible');
        toggleBackdrop();
    }

    const backdropClickHandler = () => {
        toggleModal();
    }


    testingButton.addEventListener('click', toggleModal);
    xButton.addEventListener('click', toggleModal);

    let obtainedList = [];

    function legos() {
        fetch("/api/lecture-series-list")
            .then(response => response.json())
            .then((jsonData) => {
                jsonData.forEach((item) => {
                    obtainedList.push(item.title);
                })
            })
            .then(() => {
                console.log(obtainedList);

            })
            .catch(err => console.log(err))
    }

    console.log(responseForReal);
}

doThingsOnThePage();


















