$(document).on("scroll", function(){
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();

    const $art1 = $('.art1');
    const $art2 = $('.art2');
    const $art3 = $('.art3');
    const $art4 = $('.art4');
    
    const art1FromTop = $art1.offset().top; 
    const art2FromTop = $art2.offset().top; 
    const art3FromTop = $art3.offset().top; 
    const art4FromTop = $art4.offset().top;  
    
    const art1Height = $art1.outerHeight();
    const art2Height = $art2.outerHeight();
    const art3Height = $art3.outerHeight();
    const art4Height = $art4.outerHeight();

    if(scrollValue > art1FromTop + art1Height - windowHeight){
        $art1.addClass('active');
    }
    if(scrollValue > art2FromTop + art2Height - windowHeight - 200){
        $art2.addClass('active');
    }
    if(scrollValue > art3FromTop + art3Height - windowHeight - 200){
        $art3.addClass('active');
    }
    if(scrollValue > art4FromTop + art4Height - windowHeight){
        $art4.addClass('active');
    }

    if(scrollValue < 300){
        $('.article').removeClass('active');
    }


})