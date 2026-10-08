$(document).ready(function () {
    // Mobile Menu Toggle
    $('.menuHamburger').click(function () {
        $('.menuItems').addClass('menuOpen');
    });
    $('.menuItems__close').click(function () {
        $('.menuItems').removeClass('menuOpen');
    });

    // Universal Product Image Slider
    if ($('.product-slider-init').length > 0) {
        $('.product-slider-init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            speed: 800,
            cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
            dots: false,
            arrows: true,
            prevArrow: '.product-slider-prev',
            nextArrow: '.product-slider-next',
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        });
    }

    // Stain Slider backwards compatibility
    if ($('.stain-slider-init').length > 0) {
        $('.stain-slider-init').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            speed: 800,
            cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
            dots: false,
            arrows: true,
            prevArrow: '.stain-slider-prev',
            nextArrow: '.stain-slider-next',
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        });
    }
});
