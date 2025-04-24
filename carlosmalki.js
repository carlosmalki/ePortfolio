
/* function that shows the menu when the <span> design is clicked === */
function show() {
    document.getElementById("menu-container").classList.toggle("active");
}



/* flippa kortet funktion */
const card = document.getElementById("card");

card.addEventListener("click", flipCard); 

function flipCard() {
    card.classList.toggle("flipCard");

}


