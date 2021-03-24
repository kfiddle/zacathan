const listToRevise = document.getElementById('listToRevise');
const menuItemsList = document.getElementById("menuItemsList");


const editingBox = document.getElementById("editingBox");


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
                            lectureElem.addEventListener('click', ()=> {
                                openEditingBox(lecture.title);
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

function openEditingBox(lectureTitle) {
    editingBox.style.transform =  `translateX(20vw)`;
}



fetch("/api/lectures")
    .then(response => response.json())
    .then(jsonData => console.log(jsonData))
    .catch(err => console.log(err))


// fetch("/api/lecture-series-list")
//     .then(response => response.json())
//     .then(jsonData => console.log(jsonData))
//     .catch(err => console.log(err))



















