$('nav a').on("click", function(){

    const goToSelection = "[data-section=" + $(this).attr('class') + "]"

    $('body, html').animate({
        scrollTop: $(goToSelection).offset().top - 50
    })
})