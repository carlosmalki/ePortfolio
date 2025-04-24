// alert ('Connected!');

$(document).ready(function () {
    function handleMenu() {
        
        let windowWidth = $(window).width(); // Flytta variabeln här för att få den aktuella fönsterbredden

        if (windowWidth <= 800) {
            // Om fönsterbredden är mindre än eller lika med 800 pixlar, visa menuikonen och dölj menyn
            $("#menu-icon").show();
            $("#menu").hide();
           
        } else {
            // Om fönsterbredden är större än 800 pixlar, visa menyn och dölj menuikonen
            $("#menu").show();
            $("#menu-icon").hide();
        }
    }

    handleMenu();
    $(window).resize(function () {
        // Uppdatera hantering av menyn när fönsterstorleken ändras
        handleMenu();
    });

    $("#menu-icon").click(function () {
        $("#menu").show(400);
        $("#menu-icon").hide();
    });
    

   
    
});