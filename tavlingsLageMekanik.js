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
let timeLimit = 8;
let countdownTimer;
let countdownTime = 3;
let gameStarted = false;
let gameOver = false;


const countdownDisplay = document.getElementById("countdownDisplay");
const startGameButton = document.getElementById("startGameButton");
const timerDisplay = document.getElementById("timerDisplay");
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const leftOption = document.getElementById('leftOption');
const rightOption = document.getElementById('rightOption');
const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const leftDescription = document.getElementById('leftDescription');
const rightDescription = document.getElementById('rightDescription');

function disableOptions() {
    leftOption.style.pointerEvents = 'none';
    rightOption.style.pointerEvents = 'none';
}

function enableOptions() {
    leftOption.style.pointerEvents = 'auto';
    rightOption.style.pointerEvents = 'auto';
}

function startCountdown() {
    startGameButton.style.display = "none";  
    countdownDisplay.style.display = "block";  
    countdownTime = 3;
    countdownDisplay.textContent = countdownTime;

    countdownTimer = setInterval(() => {
        countdownTime--;
        countdownDisplay.textContent = countdownTime;

        if (countdownTime <= 0) {
            clearInterval(countdownTimer);  
            countdownDisplay.style.display = "none";  
            startGame();  
        }
    }, 1000);
}

function startGame() {
    gameStarted = true;
    initializeGame();
    enableOptions();  
    loadNewPair();  
    startTimer();  
}

let timer; 

function startTimer() {
    if (gameOver) return;  

    let timeLeft = timeLimit;
    timerDisplay.textContent = `Tid kvar: ${timeLeft}s`;

    clearInterval(timer);
    timer = setInterval(() => {
        if (gameOver) {  
            clearInterval(timer);  
            return;
        }
        timeLeft--;
        timerDisplay.textContent = `Tid kvar: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showLossMessage();
        }
    }, 1000);
}


function showLossMessage() {
    
    clearInterval(timer);  
    gameOver = true; 

    lastRoundScore = score;
    
    resultElement.textContent = "Du förlorade!";
    resultElement.style.fontSize = "50px";
    resultElement.style.color = "red";
    resultElement.style.position = "fixed";
    resultElement.style.top = "50%";
    resultElement.style.left = "50%";
    resultElement.style.transform = "translate(-50%, -50%)";
    resultElement.style.zIndex = "1000";  
    resultElement.style.backgroundColor = "white";
    resultElement.style.padding = "50px";
    resultElement.style.paddingBottom = "200px"
    resultElement.style.borderRadius = "10px";
    resultElement.style.fontWeight = "bold";


    const scoreText = document.createElement("p");
    scoreText.textContent = `Du fick så här många poäng: ${lastRoundScore}`;
    scoreText.style.fontSize = "20px";
    scoreText.style.color = "black";
    resultElement.appendChild(scoreText);


    
    const restartButton = document.createElement('button');
    restartButton.textContent = "Kör igen";
    restartButton.style.fontSize = "20px";
    restartButton.style.padding = "10px 20px";
    restartButton.style.position = "fixed";
    restartButton.style.top = "60%";  
    restartButton.style.left = "50%";
    restartButton.style.transform = "translateX(-50%)";
    restartButton.style.zIndex = "1001";  
    restartButton.style.backgroundColor = "black";
    restartButton.style.color = "white";
    restartButton.style.border = "none";
    restartButton.style.borderRadius = "5px";
    restartButton.style.cursor = "pointer";
    restartButton.style.fontWeight = "bold";


    
    restartButton.addEventListener('click', function () {
        location.reload(); 
    });

    
    document.body.appendChild(restartButton);

    
    disableOptions();
}


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
    if (!gameStarted) return;  

    const event1 = getRandomEvent();
    const event2 = getRandomEvent();

    
    leftImage.src = event1.image;
    leftDescription.textContent = event1.description;
    leftOption.dataset.year = event1.year;
    leftOption.dataset.month = event1.month;

    rightImage.src = event2.image;
    rightDescription.textContent = event2.description;
    rightOption.dataset.year = event2.year;
    rightOption.dataset.month = event2.month;

    resultElement.textContent = '';
    leftOption.classList.remove('correct', 'incorrect');
    rightOption.classList.remove('correct', 'incorrect');

    startTimer();
}

function checkAnswer(selectedOption, otherOption) {
    const selectedYear = parseInt(selectedOption.dataset.year);
    const selectedMonth = parseInt(selectedOption.dataset.month);
    const otherYear = parseInt(otherOption.dataset.year);
    const otherMonth = parseInt(otherOption.dataset.month);

    let isCorrect;
    if (selectedYear < otherYear) {
        isCorrect = true;
    } else if (selectedYear === otherYear) {
        if (selectedMonth < otherMonth) {
            isCorrect = true;
        } else {
            isCorrect = false;
        }
    } else {
        isCorrect = false;
    }

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

        disableOptions();
        setTimeout(() => {
            loadNewPair(); 
            startTimer();   
            enableOptions();
        }, 2000);
    } else {

        showLossMessage();
    }
}
function initializeGame() {
    score = 0;
    scoreElement.textContent = `Poäng: ${score}`;
    usedEventIndices = [];
    disableOptions(); 
    loadNewPair();
}

function leftClickHandler() {
    checkAnswer(leftOption, rightOption);
}

function rightClickHandler() {
    checkAnswer(rightOption, leftOption);
}


document.addEventListener('DOMContentLoaded', function () {
    startGameButton.addEventListener('click', startCountdown);
    leftOption.addEventListener('click', function () {
        checkAnswer(leftOption, rightOption);
        startTimer();  
    });
    rightOption.addEventListener('click', function () {
        checkAnswer(rightOption, leftOption);
        startTimer();  
    });
    
    disableOptions();  
});

function infoOpenPopup(text) {

    document.getElementById('popup-text').innerHTML = text;
    document.getElementById('popup').style.display = 'block';

}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
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