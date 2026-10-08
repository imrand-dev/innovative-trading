//------------ rev slider
var sliderHeight = $('body').height();
if ($('#rev_slider_202_1').length > 0) {
    var tpj = jQuery;
    var revapi202;
    tpj(document).ready(function() {
        if (tpj('#rev_slider_202_1').revolution === undefined) {
            revslider_showDoubleJqueryError('#rev_slider_202_1');
        } else {
            revapi202 = tpj('#rev_slider_202_1').show().revolution({
                sliderType: 'standard',
                jsFileLocation: 'js',
                sliderLayout: 'fullscreen',
                dottedOverlay: 'none',
                delay: 3000,
                navigation: {
                    arrows: {
                        enable: true,
                        style: 'uranus',
                    }
                },

                responsiveLevels: [1500, 1400, 780, 500],
                visibilityLevels: [1500, 1200, 700, 450],
                gridwidth: [1300, 1100, 700, 300],
                // gridheight: sliderHeight,
                gridheight: [868, 768, 960, 720],
                lazyType: 'none',
                shadow: 0,
                spinner: 'off',
                stopLoop: 'off',
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: 'off',
                autoHeight: 'on',
                fullScreenAutoWidth: 'on',
                fullScreenAlignForce: 'on',
                fullScreenOffsetContainer: '',
                fullScreenOffset: '',
                disableProgressBar: 'on',
                hideThumbsOnMobile: 'off',
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: 'off',
                    nextSlideOnWindowFocus: 'off',
                    disableFocusListener: false,
                }
            });

        }
    });
}
//--------- rev slider end

$('body').prepend('<div class="Overlay"></div><div class="form-overlay"></div>');
$(document).ready(function() {
    var window_width = $(window).width();
     

    // main menu
    // $('.menuHamburger').click(function () {
    //     $('.MenuItems,.Overlay').addClass('ShowIt').css({'visibility': 'visible'})
    // });
    // $('#CloseMenu,.Overlay').on('click', function () {
    //     $('.MenuItems,.Overlay').removeClass('ShowIt');
    //     setTimeout(function () {
    //         $('.MenuItems,.Overlay').removeAttr('style');
    //     }, 400)
    // });

    // main menu
    $('.menuHamburger').click(function() {
        $('.menuItems,.Overlay, body').addClass('menuOpen');
        $('.menuItems ul ').css('opacity', '1');
    });
    $('.menuItems__close,.Overlay').click(function() {
        $('.menuItems ul ').css('opacity', '0');
        $('.menuItems,.Overlay,.submenu_wrapper, body').removeClass('menuOpen');

    });




    $('.sub_menu_mobile').hide();
    $('li.has_child').each(function(e) {

        $(this).click(function(index) {
            $('li.has_child .sub_menu_mobile').eq(e).parent().parent().toggleClass('showIt');
            $('li.has_child  .sub_menu_mobile').eq(e).slideToggle();

            e.stopPropagation();
            e.preventDefault();


        });


    });



    setTimeout(() => {
        var getWidthOfSlider = $('.project-slider__single').innerWidth() - 60;
        console.log(getWidthOfSlider, "Test")
        $('.content').outerWidth(getWidthOfSlider).outerHeight(getWidthOfSlider);
    }, 500)








    // disable scroll
    $('.Overlay,.menuItems').bind('mousewheel DOMMouseScroll hover', function(e) {
        var scrollTo = null;

        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        } else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });













    // sticky menu
    screenPosition = 0;
    $(window).scroll(function() {
        scrolled = $(window).scrollTop();
        if (screenPosition - scrolled > 0) {
            $(".menuHamburger,.logo").addClass("Fixed");
        } else {
            $(".menuHamburger,.logo").removeClass("Fixed");
        }
        screenPosition = scrolled;
    });
    var first_section = $('.home-slider').position().top + 250;
    $(window).scroll(function() {
        if ($(window).scrollTop() <= first_section) {
            $(".menuHamburger,.logo").removeClass("Fixed");
        }
    });


    // circle menu
    setTimeout(function() {
        $('.circle-color').addClass('ShowCircle')
    }, 1200);

    var Colors = $('.circle-color__circle__item'),
        Texts = $('.circle__menu__items');
    Colors.each(function(b) {
        $(this).on('click', function() {
            Colors.removeClass('active')
            $(this).addClass('active')
            $('.circle-color__circle__item span').css({
                'animation': 'none'
            });
            if (Texts.find('li').hasClass('ShowIt')) {
                Texts.find('li.ShowIt').addClass('GoRight');
                setTimeout(function() {
                    $('li.GoRight').removeClass('ShowIt')
                }, 1200);
                setTimeout(function() {
                    $('li.GoRight').removeClass('GoRight')
                }, 1500);
            }
            Texts.find('li').eq(b).addClass('ShowIt')
        })
    });


    var $post1 = $(".DoCircle:nth-child(1)");
    setInterval(function() {
        $post1.toggleClass("PushAnim");
    }, 25000);

    var $post2 = $(".DoCircle:nth-child(2)");
    setInterval(function() {
        $post2.toggleClass("PushAnim");
    }, 7000);

    var $post3 = $(".DoCircle:nth-child(3)");
    setInterval(function() {
        $post3.toggleClass("PushAnim");
    }, 30000);

    var $post4 = $(".DoCircle:nth-child(4)");
    setInterval(function() {
        $post4.toggleClass("PushAnim");
    }, 12000);

    var $post5 = $(".DoCircle:nth-child(5)");
    setInterval(function() {
        $post5.toggleClass("PushAnim");
    }, 18000);

    $('.circle-color__circle__item').click(function() {
        $('.circle-color__circle__item').removeClass('DoCircle');

    });


    // circle menu end



    if ($('.chooseColorImageSlide').length > 0) {
        $('.chooseColorImageSlide').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1500,
            dots: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            draggable: false,
            fade: true,
            cssEase: 'ease',
        });
    }


    if ($('.BenifitsSlider').length > 0) {
        $('.BenifitsSlider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 900,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: false,
            arrows: false,
            draggable: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        dots: true,
                        draggable: false
                    }
                }


            ]
        });

    }


    if ($('.ClientSliderInit').length > 0) {
        $('.ClientSliderInit').slick({
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 3,
            speed: 1500,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            arrows: true,
            draggable: true,
            prevArrow: '.ClientSliderPrev',
            nextArrow: '.ClientSliderNext',
            cssEase: 'ease',
            // autoplay: true,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false,
                        arrows: true,
                        draggable: false,
                    }
                }


            ]
        });
    }

    if ($('.BenefitNd-SliderInit').length > 0) {
        $('.BenefitNd-SliderInit').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 900,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: false,
            arrows: true,
            draggable: true,
            prevArrow: '.Faciprev',
            nextArrow: '.FaciNext',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        dots: true,
                        draggable: true
                    }
                }


            ]
        });
    }

    //------------- slick slider init end


    //------------------- T.A.1.0-Component-10 start
    if ($('.facilitySliderInit').length > 0) {
        $('.facilitySliderInit').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 900,
            dots: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            autoplay: false,
            arrows: true,
            draggable: false,
            prevArrow: '.FacilitySliderPrev',
            nextArrow: '.FacilitySliderNext',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                        draggable: true,

                    }
                }


            ]
        });
    }
    //------------------- T.A.1.0-Component-10 end


    // mobile view port
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);



    //------------------- T.A.1.0-Component-10 start (Step-by-Step Smooth Glide Loop)
    if ($('.featureSliderInit').length > 0) {
        $('.featureSliderInit').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 800,
            cssEase: 'cubic-bezier(0.25, 1, 0.5, 1)',
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            arrows: true,
            prevArrow: '.FeatureSliderPrev',
            nextArrow: '.FeatureSliderNext',
            pauseOnHover: true,
            pauseOnFocus: false,
            draggable: true,
            swipe: true,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                        draggable: true,
                    }
                }
            ]
        });
    }
    //------------------- T.A.1.0-Component-10 end


    //------- color dots slider
    var FirstColor = $('.chooseColor__right__image__item:eq(0)').attr('data-dot-color'),
        SecondColor = $('.chooseColor__right__image__item:eq(1)').attr('data-dot-color'),
        ThirdColor = $('.chooseColor__right__image__item:eq(2)').attr('data-dot-color'),
        FourColor = $('.chooseColor__right__image__item:eq(3)').attr('data-dot-color'),
        FiveColor = $('.chooseColor__right__image__item:eq(4)').attr('data-dot-color'),
        SixColor = $('.chooseColor__right__image__item:eq(5)').attr('data-dot-color'),
        SevenColor = $('.chooseColor__right__image__item:eq(6)').attr('data-dot-color');


    $('.chooseColor__right .slick-dots li:eq(0) button').css({
        'background-color': FirstColor
    }).on('click', function() {
        $('.chooseColor__right__image').css({
            'background-color': FirstColor
        })
    });
    $('.chooseColor__right .slick-dots li:eq(1) button').css({
        'background-color': SecondColor
    }).on('click', function() {
        $('.chooseColor__right__image').css({
            'background-color': SecondColor
        })
    });
    $('.chooseColor__right .slick-dots li:eq(2) button').css({
        'background-color': ThirdColor
    }).on('click', function() {
        $('.chooseColor__right__image').css({
            'background-color': ThirdColor
        })
    });
    $('.chooseColor__right .slick-dots li:eq(3) button').css({
        'background-color': FourColor
    }).on('click', function() {
        $('.chooseColor__right__image').css({
            'background-color': FourColor
        })
    });
    $('.chooseColor__right .slick-dots li:eq(4) button').css({
        'background-color': FiveColor
    }).on('click', function() {
        $('.chooseColor__right__image').css({
            'background-color': FiveColor
        })
    });
    $('.chooseColor__right .slick-dots li:eq(5) button').css({
        'background-color': SixColor
    }).on('click', function() {
        $('.chooseColor__right__image').css({
            'background-color': SixColor
        })
    });
    $('.chooseColor__right .slick-dots li:eq(6) button').css({
        'background-color': SevenColor
    }).on('click', function() {
        $('.chooseColor__right__image').css({
            'background-color': SevenColor
        })
    });

    // color dots end



    // scroll to section
    $('.goDown a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });


    //-------------- animation

    if (767 < window_width) {
        // blast init
        if ($('.textUp').length > 0) {
            $('.textUp').blast({
                delimiter: "character"
            });
        }
        if ($('.fadeRightWord').length > 0) {
            $('.fadeRightWord').blast({
                delimiter: "word"
            });
        }

        if ($('.fadeRight').length > 0) {
            $('.fadeRight').blast({
                delimiter: "character"
            });
        }

        var get_first = $('.home-slider'),
            get_half = $(window).height() / 1.2;

        $(window).scroll(function() {
            var w_scroll = $(window).scrollTop();
            if ($('.anim').length > 0) {
                $('.anim').each(function() {
                    if (w_scroll > $(this).offset().top - get_half) {
                        $(this).addClass('anim-active');
                    }
                    // if (get_first.position().top === w_scroll) {
                    //     $('.anim').removeClass('anim-active');
                    // }

                });
            }
        })

    }
    $('.anim').each(function() {
        if ($(this).visible(true)) {
            $(this).addClass('anim-active');
        }
    });
    //-------------- animation end


    // disable scroll
    $('.MenuItems').bind('mousewheel DOMMouseScroll hover', function(e) {
        var scrollTo = null;

        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        } else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });


    //------ form validation
    $('form .dynamic_submit_btn').click(function() {
        $('.form-overlay').addClass('doit');
    });

    $(document).on('click', '.form-overlay.doit,.ok-class', function() {
        $('.form-overlay.doit, .form-message-container').hide();
    });

    $('.btn , button').click(function() {
        $('.form-overlay.doit, .form-message-container').removeAttr('style');
    });

    $('.dynamic_submit_btn').on('click', function() {
        setTimeout(function() {
            $('.form-overlay.doit').hide();
        }, 15000);
    });
    setTimeout(function() {
        $('.form-message-body').hide();
    }, 15000);
    //------ form validation



}); //document.ready end

console.log($(".container-offset").offset().left)
$(".container-offset-set").css({
    "padding-left": $(".container-offset").offset().left + 15
});
$(window).on('resize', function() {
    $(".container-offset-set").css({
        "padding-left": $(".container-offset").offset().left + 15
    });
});


//-------- different image show by screen size
function deviceImage() {
    // window min width 1401 -- large screen
    var window_width = $(window).width();
    if (1400 < window_width) {
        $('.modify-bg').each(function() {
            var large = $(this).attr('data-image-large');
            $(this).css('background', "url(" + large + ")");
        });
        console.log('large');
    }

    // window max-width 1400 -- starndart screen
    if (1400 >= window_width && 992 <= window_width) {
        $('.modify-bg').each(function() {
            var standard = $(this).attr('data-image-standard');
            $(this).css('background', "url(" + standard + ")");
        });
        console.log('standard');
    }

    // window max-width 991 -- mobile device
    if (991 >= window_width) {
        $('.modify-bg').each(function() {
            var small = $(this).attr('data-image-small');
            $(this).css('background', "url(" + small + ")");
        });
        console.log('small');
    }
}
deviceImage();
//-------- different image show by screen size