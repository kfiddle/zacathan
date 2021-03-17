const main = document.querySelector("main");
const mainStuffContainer = document.getElementById("theRealContent");
let headerHeight = document.querySelector("header").offsetHeight;

main.style.marginTop = headerHeight + "px";

mainStuffContainer.style.marginTop = (headerHeight * 3) + "px";


console.log(headerHeight);


