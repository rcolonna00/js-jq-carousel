//freccia di sinistra
var leftArrow = $('.left');

leftArrow.click(function() {
    var activeAttiva = $('.image .active');
    console.log(activeAttiva);
    activeAttiva.removeClass('active');

    if( activeAttiva.hasClass('first') ) {
        //passo active alla classe con last
        $('.image .last').addClass('active');
    } else {
        var prevElement = activeAttiva.prev();
        prevElement.addClass('active');
    }
    
});

//freccia di destra
var rightArrow = $('.right');

rightArrow.click(function() {
    var activeAttiva = $('.image .active');
    console.log(activeAttiva);
    activeAttiva.removeClass('active');

    if( activeAttiva.hasClass('last') ) {
        //passo active alla classe con first
        $('.image .first').addClass('active');
    } else {
        var nextElement = activeAttiva.next();
        nextElement.addClass('active');
    }
    
});