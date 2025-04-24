// Definiera variabler för att lagra siffrorna i uttrycken, poäng och antal försök.
var num1, num2;
var poäng = 1; // Startpoäng
var Antalförsök = 1; // Startvärde för antal försök

// Funktion för att generera ett slumpmässigt heltal mellan min och max.
function SlumpMässigInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Generera ett slumptal i intervallet
}

// Funktion för att tömma svarfältet (input-fältet) där användaren skriver sitt svar.
function tömmaSvarFält() {
    document.getElementById("skriv-ditt-svar-input").value = ""; // Sätt värdet på inputfältet till tomt
}

// Funktion för att skapa och visa ett slumpmässigt matteuttryck (addition, subtraktion, multiplikation).
function SlumpmässigtUttryck(ValtVarde, VadBlirFält) {
    if (ValtVarde === "addition") { // Om användaren har valt addition
        num1 = SlumpMässigInt(1, 10); // Generera två slumpmässiga tal mellan 1 och 10
        num2 = SlumpMässigInt(1, 10);
        tömmaSvarFält(); // Töm svarfältet
        VadBlirFält.value = num1 + " + " + num2; // Visa uttrycket i inputfältet
    } else if (ValtVarde === "subtraktion") { // Om användaren har valt subtraktion
        num1 = SlumpMässigInt(1, 10);
        num2 = SlumpMässigInt(1, 10);
        tömmaSvarFält();
        VadBlirFält.value = num1 + " - " + num2; // Visa uttrycket i inputfältet
    } else if (ValtVarde === "multiplikation") { // Om användaren har valt multiplikation
        num1 = SlumpMässigInt(1, 10);
        num2 = SlumpMässigInt(1, 10);
        tömmaSvarFält();
        VadBlirFält.value = num1 + " × " + num2; // Visa uttrycket i inputfältet
    }
}

// Event listener för att lyssna efter när sidan är helt laddad och sedan aktivera eventlyssnare för radioknappar.
window.addEventListener('DOMContentLoaded', function() {
    var RadioKnappar = document.querySelectorAll("input[type='radio'][name='matte-typ']"); // Hitta alla radioknappar för matteval
    var VadBlirFält = document.getElementById("vad-blir-input"); // Hitta inputfältet för att visa uttryck
    VadBlirFält.style.fontFamily = "cursive"; // Sätt stil på fonten för inputfältet

    // Lägg till eventlyssnare för varje radioknapp för att generera ett nytt uttryck när ett val görs.
    RadioKnappar.forEach(function(radioknapp) {
        radioknapp.addEventListener("change", function() {
            var ValtVarde = document.querySelector("input[type='radio'][name='matte-typ']:checked").value; // Hämta det valda matteoperationen
            SlumpmässigtUttryck(ValtVarde, VadBlirFält); // Generera ett nytt uttryck baserat på den valda matte typen
        });
    });
});

// Funktion för att generera ett nytt matematiskt uttryck när knappen klickas.
function genereraNyttUttryck() {
    var ValdRadio = document.querySelector("input[type='radio'][name='matte-typ']:checked"); // Hitta den valda radioknappen
    if (!ValdRadio) { // Om ingen radioknapp är vald, visa ett felmeddelande.
        document.getElementById("meddelande").innerHTML = "Vänligen välj en matematik typ först!"; 
        document.getElementById("meddelande").style.color = "red"; // Gör meddelandet röd
        return; // Avbryt vidare exekvering om ingen typ är vald
    }
    var ValtVarde = ValdRadio.value; // Hämta det valda matteoperationen
    var VadBlirFält = document.getElementById("vad-blir-input");
    VadBlirFält.style.fontFamily = "cursive"; // Sätt stil på inputfältet

    SlumpmässigtUttryck(ValtVarde, VadBlirFält); // Generera ett nytt uttryck baserat på den valda matte typen
}

// Funktion för att kontrollera om användarens svar är korrekt.
function resultat() {
    var svarVärde = document.getElementById("skriv-ditt-svar-input").value; // Hämta användarens svar
    var korrektSvar;

    // Kontrollera vilken matteoperation som är vald och beräkna det korrekta svaret.
    if (document.querySelector("input[type='radio'][name='matte-typ']:checked").value === "addition") {
        korrektSvar = num1 + num2;
    } else if (document.querySelector("input[type='radio'][name='matte-typ']:checked").value === "subtraktion") {
        korrektSvar = num1 - num2;
    } else if (document.querySelector("input[type='radio'][name='matte-typ']:checked").value === "multiplikation") {
        korrektSvar = num1 * num2;
    }

    // Jämför användarens svar med det korrekta svaret.
    if (parseInt(svarVärde) === korrektSvar) {
        Antalförsök = 1; // Nollställ antal försök då svarVärde är lika med korrektSvar
        var ValtVarde = document.querySelector("input[type='radio'][name='matte-typ']:checked").value;
        var VadBlirFält = document.getElementById("vad-blir-input");
        var meddelande = "Rätt svar! "+ korrektSvar;
        document.getElementById("meddelande").innerHTML = meddelande; // Visa rätt svar meddelande
        document.getElementById("meddelande").style.color = "green"; // Gör meddelandet grönt
        document.getElementById("poäng-paragraf").innerHTML = "Poäng: "+ poäng++; // Uppdatera poängen
        var försökNummerÅterställning = ""; // Töm försökstalet
        document.getElementById("antal-försök-paragraf").innerHTML = "Antal försök: "+ försökNummerÅterställning; // Uppdatera antalet försök
        tömmaSvarFält(); // Töm svarfältet
        SlumpmässigtUttryck(ValtVarde, VadBlirFält); // Generera ett nytt uttryck baserat på den valda matte typen
   
    } else {
        poäng = 1; // Nollställ poängen om svaret är fel
        var meddelande = "Fel svar. Försök igen!";
        var nollPoäng = ""; // Töm poängvärdet
        document.getElementById("antal-försök-paragraf").innerHTML = "Antal försök: "+ Antalförsök++; // Uppdatera antal försök
        document.getElementById("poäng-paragraf").innerHTML = "Poäng: "+ nollPoäng; // Uppdatera poängen
        document.getElementById("meddelande").innerHTML = meddelande; // Visa felmeddelande
        document.getElementById("meddelande").style.color = "red"; // Gör meddelandet rött
        tömmaSvarFält(); // Töm svarfältet
    }
}

// Funktion för att starta om spelet genom att återställa alla variabler och fält.
function StartaOmSpel() {
    Antalförsök = 1; // Nollställ antal försök
    poäng = 1; // Nollställ poäng
    document.getElementById("poäng-paragraf").innerHTML = "Poäng: "; // Återställ poängtext
    document.getElementById("antal-försök-paragraf").innerHTML = "Antal försök: "; // Återställ försökstext
    document.getElementById("meddelande").innerHTML = ""; // Rensa meddelandet
    document.getElementById("vad-blir-input").value = ""; // Töm uttrycksinputfältet
    document.getElementById("skriv-ditt-svar-input").value = ""; // Töm svarinputfältet
    document.querySelector("input[type='radio'][name='matte-typ']:checked").checked = false; // Avmarkera alla radioknappar
}

// Funktion för att ta bort meddelandet som säger (rätt svar, fel svar, välje matte typ först) när användaren börjar skriva/klicka på svar inputen. Den finns som onClick på skriv-dit-svar-input i HTML filen
function TaBortMeddelande() {
    document.getElementById("meddelande").innerHTML = ""; // Töm meddelandefältet
}
