const listToRevise = document.getElementById('listToRevise');
const menuItemsList = document.getElementById("menuItemsList");
const editingBox = document.getElementById("editingBox");
const finalDelete = document.getElementById('finalDelete');
const testingButton = document.getElementById("testingButton");
const testingModal = document.getElementById('editingModal');
const backdrop = document.getElementById("backdrop");
const xButton = document.getElementById('x');



async function doThingsOnThePage() {

    const seriesData = await fetch("/api/lecture-series-list");
    const fullShebang = await seriesData.json();

    fullShebang.forEach(sheBang => {
        let seriesTitle = document.createElement('li');
        seriesTitle.innerText = sheBang.title;
        menuItemsList.appendChild(seriesTitle);
        console.log(seriesTitle)


    })
}




doThingsOnThePage();


















