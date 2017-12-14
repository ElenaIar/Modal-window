$(document).ready(function(){
    
    var windowKey = false;

    $( "#open" ).click(function() {
        $("#open_background").fadeIn(400, 
            function(){ 
            $("#open_window").css('display', 'block').animate({opacity: 1}, 200);
            windowKey = true;
        });
    });
    $( "#close_modal_window" ).click(function() {
        $("#open_window").animate({opacity: 0}, 200,
            function(){ 
            $(this).css('display', 'none');
            $("#open_background").fadeOut(400);
        });
        windowKey = false;
    });
    $( document ).click( function( e ){
        var blockMenu = $( '#open_window' );
        if( !blockMenu.is( e.target ) && blockMenu.has( e.target ).length === 0 ){
            if (windowKey === true) {
                $("#open_window").animate({opacity: 0}, 200,
                function(){ 
                    $(this).css('display', 'none');
                    $("#open_background").fadeOut(400);
                });
                windowKey = false;
            }
        }
    });
});