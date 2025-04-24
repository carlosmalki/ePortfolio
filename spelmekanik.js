const historyEvents = [
    {
        image: "Bilder/bastiljen.jpg",
        description: "Stormningen av Bastiljen",
        year: 1789,
        month: 7
    },
    {
        image: "Bilder/generalforsamling.jpg",
        description: "Generalständerna sammanträder",
        year: 1789,
        month: 5
    },
    {
        image: "Bilder/flykt.jpg",
        description: "Kungens flykt och konstitutionell monarki",
        year: 1791,
        month: 6
    },
    {
        image: "Bilder/Forkloring.jpg",
        description: "Krigs förklaring mot Österrike och monarkins fall, ",
        year: 1792,
        month: 4
    },
    {
        image: "Bilder/ValmyKrig.jpg",
        description: "Slaget vid Valmy, Monarking avskaffas, Frankrike blir en republik, ",
        year: 1792,
        month: 9
    },
    {
        image: "Bilder/Ludvig16.jpg",
        description: "Ludvig XVI giljotineras inför tiotusentals åskadare i Paris, ",
        year: 1793,
        month: 1
    },
    {
        image: "Bilder/Maria_Antoinette.jpg",
        description: "Maria Antoinette avrättas på giljotinen 9 månader efter hennes man Ludvig XVI avrättades. ",
        year: 1793,
        month: 10
    },
    {
        image: "Bilder/robespierre.jpg",
        description: "Robespierre arresteras och avrättas, markerar slutet på skräckväldet ",
        year: 1794,
        month: 7
    },
    {
        image: "Bilder/Konstiution.jpg",
        description: "En ny konstitution införs och direktoriet tar markten ",
        year: 1795,
        month: 8
    },
    {
        image: "Bilder/Bouchot.jpg",
        description: "Napoleon genomför en statskupp och tar makten, vilket markerar slutet på revolutionen ",
        year: 1799,
        month: 11
    },
];


let usedEventIndices = [];
let score = 0;
document.getElementById('resetButton').addEventListener('click', resetGame);


const leftOption = document.getElementById('leftOption');
const rightOption = document.getElementById('rightOption');
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const leftDescription = document.getElementById('leftDescription');
const rightDescription = document.getElementById('rightDescription');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');


function getRandomEvent() {

    if (usedEventIndices.length >= historyEvents.length - 1) {  
        usedEventIndices = [];
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * historyEvents.length);
    } while (usedEventIndices.includes(randomIndex));
    
    usedEventIndices.push(randomIndex);
    return historyEvents[randomIndex];
}


function loadNewPair() {
    const event1 = getRandomEvent();
    const event2 = getRandomEvent();
    
    leftImage.src = event1.image;
    leftDescription.textContent = event1.description;
    leftOption.dataset.year = event1.year;
    leftOption.dataset.month = event1.month;
    
    rightImage.src = event2.image;
    rightDescription.textContent = event2.description;
    rightOption.dataset.year = event2.year;
    leftOption.dataset.month = event2.month;

    if (resultElement) {
        resultElement.textContent = '';
    }
    
    leftOption.classList.remove('correct', 'incorrect');
    rightOption.classList.remove('correct', 'incorrect');
    
    leftOption.style.pointerEvents = 'auto';
    rightOption.style.pointerEvents = 'auto';
}

function initializeEventListeners() {
    leftOption.removeEventListener('click', leftClickHandler);
    rightOption.removeEventListener('click', rightClickHandler);
    
    leftOption.addEventListener('click', leftClickHandler);
    rightOption.addEventListener('click', rightClickHandler);
}

function leftClickHandler() {
    checkAnswer(leftOption, rightOption);
}

function rightClickHandler() {
    checkAnswer(rightOption, leftOption);
}

function initializeGame() {
    score = 0;
    scoreElement.textContent = `Poäng: ${score}`;
    
    usedEventIndices = [];
    
    loadNewPair();
    
    initializeEventListeners();
}

document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function resetGame() {
    score = 0;  
    scoreElement.textContent = `Poäng: ${score}`; 
    
    usedEventIndices = [];  
    
    loadNewPair(); 
    resultElement.textContent = '';  

    leftOption.classList.remove('correct', 'incorrect');
    rightOption.classList.remove('correct', 'incorrect');
    
    leftOption.style.pointerEvents = 'auto';
    rightOption.style.pointerEvents = 'auto';
}


window.onload = function() {
    
    document.getElementById("popupWhenLoading").style.display = "block";
};


function closePopupWhenLoading() {
    document.getElementById("popupWhenLoading").style.display = "none";
}
function addToTimeline(event) {
    const timeline = document.getElementById("timeline");

    // Skapa en ny händelse på tidslinjen
    const eventElement = document.createElement("div");
    eventElement.classList.add("timeline-event");

    
    eventElement.innerHTML = `
        <p class="event-year">${event.year}</p>
        <img src="${event.image}" alt="${event.description}">
        <p class="event-description">${event.description}</p>
    `;

    
    let inserted = false;
    const events = document.querySelectorAll(".timeline-event");
    
    for (let i = 0; i < events.length; i++) {
        const existingYear = parseInt(events[i].querySelector(".event-year").textContent);
        if (event.year < existingYear) {
            timeline.insertBefore(eventElement, events[i]);
            inserted = true;
            break;
        }
    }

    
    if (!inserted) {
        timeline.appendChild(eventElement);
    }
}

function checkAnswer(selectedOption, otherOption) {
    const selectedYear = parseInt(selectedOption.dataset.year);
    const selectedMonth = parseInt(selectedOption.dataset.month || 0);
    const otherYear = parseInt(otherOption.dataset.year);
    const otherMonth = parseInt(otherOption.dataset.month || 0);

    let isCorrect = selectedYear < otherYear || (selectedYear === otherYear && selectedMonth < otherMonth);

    if (isCorrect) {
        selectedOption.classList.add('correct');
        otherOption.classList.add('incorrect');
        score++;
        scoreElement.textContent = `Poäng: ${score}`;
        resultElement.innerHTML = `<span style="color: green; font-size: 30px;">Rätt!</span>`;

        
        addToTimeline({
            year: selectedYear,
            image: selectedOption.querySelector("img").src,
            description: selectedOption.querySelector("p").textContent
        });
    } else {
        selectedOption.classList.add('incorrect');
        otherOption.classList.add('correct');
        resultElement.innerHTML = `<span style="color: red; font-size: 30px;">Fel!</span>`;
    }

    
    leftOption.style.pointerEvents = 'none';
    rightOption.style.pointerEvents = 'none';
}
function addToTimeline(event) {
    const timeline = document.getElementById("timeline");

    
    const eventElement = document.createElement("div");
    eventElement.classList.add("timeline-event");

    
    eventElement.innerHTML = `
        <p class="event-year">${event.year}</p>
        <img src="${event.image}" alt="${event.description}">
        <p class="event-description">${event.description}</p>
    `;

    
    let inserted = false;
    const events = document.querySelectorAll(".timeline-event");
    
    for (let i = 0; i < events.length; i++) {
        const existingYear = parseInt(events[i].querySelector(".event-year").textContent);
        if (event.year < existingYear) {
            timeline.insertBefore(eventElement, events[i]);
            inserted = true;
            break;
        }
    }

    
    if (!inserted) {
        timeline.appendChild(eventElement);
    }

    
    updateTimelineWidth();

    scrollToTimeline();
}

function scrollToTimeline() {
    const timeline = document.getElementById("timeline");
    timeline.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}


function updateTimelineWidth() {
    const timeline = document.getElementById("timeline");
    const events = document.querySelectorAll(".timeline-event");
    
    
    timeline.style.width = `${events.length * 150}px`; 
}
document.getElementById('resetButton').addEventListener('click', function() {
    location.reload(); 
});



function infoOpenPopup(text) {

    document.getElementById('popup-text').innerHTML = text;
    document.getElementById('popup').style.display = 'block';

}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}





initializeGame();


