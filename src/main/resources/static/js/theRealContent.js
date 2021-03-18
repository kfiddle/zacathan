const mainStuff = document.getElementById("theRealContent");

const mainWidth = mainStuff.offsetWidth;

const shows = ["Genealogy and the Law",
    "Assumption is the Mother of all Screw-ups!",
    "Breaking Down Brick Walls: An Introduction to the F.A.N. Club",
    "Behind the Curtain: The Creation of Source Templates for the Master Genealogist",

    "Assumption is the Mother of all Screw-ups!",
    "An Introduction to American Military Records",
    "Spreadsheets: The Wonderful Tool Genealogists Seldom Use",
    "Fun with Genealogical Analysis: A Closer Look at the Third Element of the Genealogical Proof Standard",

    "Finding Treasure in the Library of Congress and National Archives Websites",
    "The Records Behind the World War I Draft Registration Cards: Can They Help Your Research?",
    "Finding Treasure in the Library of Congress and National Archives Websites",
    "Spreadsheets: The Wonderful Tool Genealogists Seldom Use ",

    "An Introduction to American Military Records",
    "Adventures in Source Citations",
    "Introducing State and Federal Land Records",
    "Seeking City Slickers in Lesser-Known Records",

    "An Introduction to American Military Records",
    "Advancing Your Skills: Research Methodology & the Genealogical Proof Standard"
];

for (let j = 0; j <= 15; j = j + 3) {
    let horizontalDiv = document.createElement('div');
    horizontalDiv.classList.add('horizontalDiv');
    horizontalDiv.id = 'horizontalDiv' + j;
    for (let k = 0; k < 3; k++) {
        let smallCubicle = document.createElement('div');
        smallCubicle.innerHTML = shows[j + k];
        smallCubicle.style.width = (mainWidth / 3) + "px";
        smallCubicle.classList.add("smallCubicle");
        horizontalDiv.appendChild(smallCubicle);
    }
    mainStuff.appendChild(horizontalDiv);
}

