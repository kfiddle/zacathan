const listToRevise = document.getElementById('listToRevise');
const menuItemsList = document.getElementById("menuItemsList");
const editingBox = document.getElementById("editingBox");
const finalDelete = document.getElementById('finalDelete');


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
            let formData = {
                seriesTitle: seriesTitle,
                lectureTitle: lectureTitle
            }

            fetch("/api/lecture-series-list/" + seriesTitle + "/" + lectureTitle + "/delete-lecture",
                {
                    method: 'POST',
                    body: JSON.stringify(formData)
                }
                ).catch(error => console.log(error));

        })
        finalDelete.appendChild(finalDeleteButton);
        finalDelete.appendChild(missclickButton);

    })
}


// fetch("/api/lecture-series-list")
//     .then(response => response.json())
//     .then(jsonData => console.log(jsonData))
//     .catch(err => console.log(err))



















