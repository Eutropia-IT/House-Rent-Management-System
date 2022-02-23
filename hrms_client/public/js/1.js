$('.slick-lancers').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 1292,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 993,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
        }
    }, {
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        }
    }]
});


$(".dropdown-filter").on('click', function() {

    $(".explore__form-checkbox-list").toggleClass("filter-block");

});