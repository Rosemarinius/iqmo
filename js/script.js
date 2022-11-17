
$(".programm__section-close").on('click', function() {
    if ($(this).parent($(".programm__section")).hasClass("active")) {
        $(this).parent($(".programm__section")).removeClass("active").css("background-color", "rgba(14, 27, 40, 1)");
        $(this).css({"color": "rgba(226, 82, 29, 1)", 
                    "border-color": "rgba(226, 82, 29, 1)", 
                    "transform": "rotate(0deg)"});
        $(this).parent().next($(".programm__list-block")).slideUp();
    } else {
        $(this).parent($(".programm__section")).addClass("active").css("background-color", "rgba(226, 82, 29, 1)");
        
        $(this).css({"color": "white", 
                    "border-color": "white", 
                    "transform": "rotate(45deg)"});
        $(this).parent().next($(".programm__list-block")).slideDown();
    }
})


