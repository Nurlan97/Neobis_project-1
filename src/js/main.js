$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        // loop: true,
        // dots: false,
        dotsEach: true,
        
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.reviews__carousel-slide-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.reviews__carousel-slide-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
});