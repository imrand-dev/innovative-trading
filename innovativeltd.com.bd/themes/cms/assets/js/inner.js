var window_width = $(window).width();


//------------ rev slider
var sliderHeight = $('.home-slider').height();
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
                sliderLayout: 'auto',
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
                gridheight: sliderHeight,
                // gridheight: [868, 768, 960, 720],
                lazyType: 'none',
                shadow: 0,
                spinner: 'off',
                stopLoop: 'off',
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: 'off',
                autoHeight: 'off',
                fullScreenAutoWidth: 'off',
                fullScreenAlignForce: 'off',
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


$(document).ready(function() {

    $('body').prepend('<div class="Overlay"></div><div class="form-overlay"></div><div class="CustomAlert"><p>copied to clipboard</p></div>');


    // main menu
    $('.menuHamburger').click(function() {
        $('.menuItems,.Overlay').addClass('menuOpen')
    });
    $('.menuItems__close,.Overlay').click(function() {
        $('.menuItems,.Overlay,.submenu_wrapper').removeClass('menuOpen')

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





    // nice select
    if ($('.Select').length > 0) {
        $('.Select select').niceSelect();
    }


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
    var first_section = $('.innerBanner').position().top + 250;
    $(window).scroll(function() {
        if ($(window).scrollTop() <= first_section) {
            $(".menuHamburger,.logo").removeClass("Fixed");
        }
    });


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


    //-------- scroll to section
    $('.AfterBannerMenu a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 65;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });

    $('.goDown a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top + 10;
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

        var get_first = $('.innerBanner'),
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
                    //     get_first.next('section').find('.anim').addClass('anim-active')
                    // }
                });
            }
        });
    }
    setTimeout(function() {
        $('.innerBanner').next('section').not('.Products').find('.anim').addClass('anim-active')
    }, 900);


    $('.anim').each(function() {
        if ($(this).visible(true)) {
            $(this).not('.Products').addClass('anim-active');
        }
    });


    //-------------- animation end


    //-------- shade cart start

    if (24 < $('.keyPlan__content__wrap li').length) {
        $('.keyPlan__content__btn .ShowMore').addClass('active')
    }

    $('.ShowMore').click(function() {
        $('.keyPlan__content__wrap').addClass('active');
        $(this).removeClass('active');
    });


    $('.color-box').on('click', function() {
        $(this).find('input').select();
        document.execCommand('copy');

        $('.PopUpIt').removeClass('ShowIt');
        $(this).find('.PopUpIt').addClass('ShowIt');

    });

    //-------- shade cart start


    //---------- form validation start

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

    //--------- form validation end

    // after banner menu
    if ($('.AfterBannerMenuWrap').length > 0) {


        $(window).scroll(function() {
            var w_scroll = $(window).scrollTop();
            if (w_scroll >= $('.AfterBannerMenuWrap').position().top) {
                $('.AfterBannerMenu').addClass('fixedIt')
            } else {
                $('.AfterBannerMenu').removeClass('fixedIt')
            }
        })

        $('.AfterBannerMenu li').click(function() {
            $('.AfterBannerMenu li').removeClass('active');
            $(this).addClass('active');
        })
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
                        draggable: true
                    }
                }


            ]
        })
    }

    if ($('.sliderBenefits').length > 0) {
        $('.sliderBenefits').slick({
            infinite: true,
            slidesToShow: 3,
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
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        dots: false,
                        draggable: true
                    }
                }


            ]
        });
    }
    //------------------- T.A.1.0-Component-10 end

    // light gallery init
    if ($('.Light').length > 0) {
        $(".Light").lightGallery({
            selector: 'a',
            exThumbImage: 'data-exthumbimage'
        });
    }


    // on scroll active inside menu
    $('.AfterBannerMenu .nav a').click(function() {
        $('.AfterBannerMenu .nav a').parent().removeClass('active');
        $(this).parent().addClass('active')
    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 80;
        $('.scrollPosition').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.AfterBannerMenu .nav li').removeClass('active');
                $('.AfterBannerMenu .nav li').eq(i).addClass('active');
            }
        });
    }).scroll();


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
    //------ form validation


    // calculator one
    var $rangeOne = $(".rangeOne");
    var first_val = $rangeOne.attr('data-from');
    $rangeOne.ionRangeSlider({
        skin: 'round'
    });

    $('.rangeOneStart').val(first_val);
    $rangeOne.on("change onStart", function(data) {
        var $this = $(this);
        var from = $this.prop("value");
        $('.rangeOneStart').val(from)
    });

    // calculator Two
    var $rangeTwo = $(".rangeTwo");
    var second_val = $rangeTwo.attr('data-from');
    $rangeTwo.ionRangeSlider({
        skin: 'round'
    });

    $('.rangeTwoStart').val(second_val);
    $rangeTwo.on("change onStart", function(data) {
        var $inp = $(this);
        var from = $inp.prop("value");
        $('.rangeTwoStart').val(from)
    });


}); //end ready


//-------- different image show by screen size
function deviceImage() {
    var window_width = $(window).width();
    // window min width 1401 -- large screen
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