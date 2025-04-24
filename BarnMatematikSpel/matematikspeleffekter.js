// Att gå fram

function floatForward(containerfrom, containerto) {
    let loader = document.querySelector(".loader");
    let containerFrom = document.getElementById(containerfrom);
    let containerTo = document.getElementById(containerto);

    // Visa loader och göm container
    loader.style.display = "block";
    containerFrom.classList = "fade-out";

    // Vänta tills fade-out animationen är klar innan vi gör något mer
    containerFrom.addEventListener("animationend", function() {
        setTimeout(() => {
            // När loadern försvinner, visa MathTypeContainer
            loader.style.display = "none";
            containerFrom.style.display = "none";
            containerTo.style.display = "block";
            containerTo.classList = "fade-in";
        }, 100); // Vänta 2 sekunder så att loadern syns innan växlingen sker
    }, { once: true });

}

// Att gå tillbaka

function floatBack(containerfrom, containerto) {
    let loader = document.querySelector(".loader");
    let containerFrom = document.getElementById(containerfrom);
    let containerTo = document.getElementById(containerto);

    // Visa loader och göm container
    loader.style.display = "block";
    containerFrom.classList = "fade-out-1";

    // Vänta tills fade-out animationen är klar innan vi gör något mer
    containerFrom.addEventListener("animationend", function() {
        setTimeout(() => {
            // När loadern försvinner, visa MathTypeContainer
            loader.style.display = "none";
            containerFrom.style.display = "none";
            containerTo.style.display = "block";
            containerTo.classList = "fade-in-1";
        }, 100); // Vänta 2 sekunder så att loadern syns innan växlingen sker
    }, { once: true });
}

// att gå till mattetyp sidorna

function floatToTypeSite(id,containerfrom, containerto) {

    let loader = document.querySelector(".loader");
    let containerFrom = document.getElementById(containerfrom);
    let containerTo = document.getElementById(containerto);

    loader.style.display = "block";
    containerFrom.classList = "fade-out";

    // Vänta tills fade-out animationen är klar innan vi gör något mer
    containerFrom.addEventListener("animationend", function() {
        setTimeout(() => {
            // När loadern försvinner, visa MathTypeContainer
            loader.style.display = "none";
            containerFrom.style.display = "none";
            containerTo.style.display = "block";
            containerTo.classList = "fade-in";
        }, 100); // Vänta 2 sekunder så att loadern syns innan växlingen sker
    }, { once: true });

    if (id == "addition") {
        document.getElementById("typenameh1").innerHTML = "Addition";
    }

    else if (id == "multiplikation") {
        document.getElementById("typenameh1").innerHTML = "Multiplication";
    }

    else if (id == "divition") {
        document.getElementById("typenameh1").innerHTML = "Division";
    }

    else if (id == "subbtraktion") {
        document.getElementById("typenameh1").innerHTML = "Subtraction";
    }

}


function mathTypeText(id, typename) {
    let element = document.getElementById(id);
    element.innerHTML = typename;
    element.style.fontSize = "30px"; 
}

function mathTypeSymbol(id, symbol) {
    let element = document.getElementById(id);
    element.innerHTML = symbol;
    element.style.fontSize = "100px";
}


