$(document).ready(function () {

    var windowWidth = $(window).width(); 

   
    function handleMenu() {
        if (windowWidth > 800) {
            $("#menu").show(); 
            $("#menu-icon").hide();
        } else {
            $("#menu").hide(); 
            $("#menu-icon").show(); 
        }
    }

handleMenu();

// Lyssna efter ändringar i fönsterstorleken
$(window).resize(function () {
    // Uppdatera windowWidth med den nya fönsterbredden
    windowWidth = $(window).width();

   
    handleMenu();
});


    
    if (windowWidth < 800) {
        $(".stacks, .portfolioBild, .text, .show-skills").hide(); 
        $(".portfolioBild").slideDown(500);
        $(".text").delay(600).slideDown(800);
        $(".show-skills").delay(1600).slideDown(500);
        
        // Klickhanterare för att visa "staplar" efter att "visa-kunskap" har klickats
        $(".show-skills").click(function () {
            $(".show-skills").slideUp(200);
            $(".stacks").slideDown(400);
        });
    } else {
        
        $(".stacks, .portfolioBild, .text, .show-skills").hide();
        $(".portfolioBild").slideDown(500);
        $(".text").delay(600).slideDown(800);
        $(".show-skills").delay(1600).slideDown(500);

     
        $(".show-skills").click(function () {
            $(".show-skills").slideUp(200);
            $(".stacks").slideDown(400);
        });
    }

    // Klickhanterare för att visa/hide menyn och menyikonen
    $("#menu-icon").click(function () {
        $("#menu").show(600);
        $("#menu-icon").hide();
    });
    $("#navicon").click(function () {
        $("#menu").hide();
        $("#menu-icon").show(600);
    });

  
});
