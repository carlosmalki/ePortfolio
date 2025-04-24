// Den här funktionen körs när dokumentet är helt laddat (sidan är klar att använda).
$(document).ready(function () {
    
    // Skapa en variabel som håller reda på vilken fråga som ska visas (börjar med fråga 1).
    let currentQuestion = 1;
    
    // Räkna antalet frågor på sidan.
    let totalQuestions = $(".question-container").length;
    
    // Skapa en tom "answers" objekt för att lagra användarens svar.
    let answers = {}; 

    // Definiera de rätta svaren för varje fråga.
    const correctAnswers = {
        question1: "100 000 000 millimeter",
        question2: "Orange",
        question3: "Syster"
    };

    // Funktion för att visa en specifik fråga baserat på frågenumret.
    function showQuestion(questionNumber) {
        // Dölj alla frågor på sidan.
        $(".question-container").hide();
        
        // Dölj resultatet om det är visat.
        $("#resultatContainer").hide();
        
        // Visa den specifika frågan baserat på frågenumret.
        $("#question" + questionNumber).show();

        // Kontrollera om vi är på första frågan, då ska "Föregående fråga"-knappen vara inaktiverad.
        $("#FörgåendeFrågaKnapp").prop("disabled", questionNumber === 1);
        
        // Ändra texten på knappen för nästa fråga: om vi är på sista frågan, skriv "Se resultat".
        $("#nästaFrågaKnapp").text(questionNumber === totalQuestions ? "Se resultat" : "Nästa fråga");

        // Om vi är på sista frågan, ändra knappen så att den visar resultat istället för nästa fråga.
        if (questionNumber === totalQuestions) {
            $("#nästaFrågaKnapp").off("click").on("click", showResults);
        } else {
            // Annars, tillåt användaren att gå till nästa fråga.
            $("#nästaFrågaKnapp").off("click").on("click", function () {
                if (currentQuestion < totalQuestions) {
                    currentQuestion++; // Öka frågenumret med 1.
                    showQuestion(currentQuestion); // Visa nästa fråga.
                }
            });
        }
    }

    // Funktion för att visa resultaten när alla frågor är besvarade.
    function showResults() {
        let score = 0;  // Håller reda på poängen (hur många rätt användaren har).
        let resultHTML = "<h2>Dina svar:</h2>";  // Börja skapa resultatet i HTML.

        // Loopar igenom alla frågor och jämför användarens svar med rätt svar.
        Object.keys(correctAnswers).forEach((key, index) => {
            // Bygg upp frågenumret dynamiskt.
            let questionNumber = "question" + (index + 1);
            
            // Hämta användarens svar för den aktuella frågan.
            let userAnswer = answers[questionNumber] || "Inget svar";
            
            // Hämta det rätta svaret.
            let correctAnswer = correctAnswers[questionNumber];
            
            // Kontrollera om användarens svar är korrekt.
            let isCorrect = userAnswer === correctAnswer;

            // Lägg till frågan och svaret i resultatet.
            resultHTML += `<p><strong>Fråga ${index + 1}:</strong> ${userAnswer} ${isCorrect ? "✅" : `❌ (Rätt svar är: <b>${correctAnswer}</b>)`} </p>`;

            // Om användaren svarade rätt, öka poängen med 1.
            if (isCorrect) score++;
        });

        // Visa användarens resultat (poäng och alla svar).
        $("#resultatText").html(resultHTML);
        $("#finalResultat").text(`Du fick ${score} av ${totalQuestions} rätt!`);

        // Dölj alla frågor och visa resultatet.
        $(".question-container").hide();
        $("#resultatContainer").show();
    }

    // Visa den första frågan när spelet startar.
    showQuestion(currentQuestion);

    // När användaren klickar på "Föregående fråga"-knappen, gå till föregående fråga (om det finns en).
    $("#FörgåendeFrågaKnapp").click(function () {
        if (currentQuestion > 1) {
            currentQuestion--;  // Minska frågenumret med 1.
            showQuestion(currentQuestion);  // Visa föregående fråga.
        }
    });

    // När användaren klickar på "Starta om spelet"-knappen, börja om från första frågan.
    $("#StartaOmSpeletKnapp").click(function () {
        currentQuestion = 1;  // Återställ frågenumret till 1.
        answers = {};  // Töm användarens svar.
        $(".frågeValContainer").removeClass("selected"); // Ta bort all markering av svar.
        showQuestion(currentQuestion);  // Visa den första frågan igen.
    });

    // När användaren klickar på ett svarsalternativ, markera det som valt och spara svaret.
    $(".frågeValContainer").click(function () {
        let questionId = $(this).closest(".question-container").attr("id");  // Hämta frågans ID.
        answers[questionId] = $(this).text().trim();  // Spara användarens svar.
        $(this).siblings().removeClass("selected");  // Ta bort markering från andra alternativ.
        $(this).addClass("selected");  // Markera det valda alternativet genom css desginen som finns i "frågesportstyle.css"
    });
});
