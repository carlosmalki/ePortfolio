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


function infoOpenPopup(text) {

    document.getElementById('popup-text').innerHTML = text;
    document.getElementById('popup').style.display = 'block';

}



function openPopup(text, imageUrl) {
    const popupText = document.getElementById('popup-text');
    popupText.innerHTML = `<img src="${imageUrl}" style="max-width: 650px; height: 420px; display: block; margin: 0 auto;"> <br> ${text}`;
    
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
