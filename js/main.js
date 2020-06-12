$(document).ready(function() {
    $('.services__card-title').click(function(event) { 
        if($('.services__card').hasClass('one')) { 
            $('.services__card-title').not($(this)).removeClass('active'); 
            $('.services__card-content').not($(this).next()).slideUp(500); 
         }
      $(this).toggleClass('active').next().slideToggle(500); 
    });
});

$(document).ready(function(){
    $('.testimonials__main-right-cards').slick({
        arrows: true,
        vertical: true,
        slidesToShow: 2,
        touchMove: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    swipe: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    swipe: true,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.team__sliders').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        touchMove: true,
        initialSlide: 1,
        swipe: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});
