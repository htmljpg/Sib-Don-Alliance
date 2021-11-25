$(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
    
    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('header__icon--hamburger') || $(this).hasClass('overlay')) {
            $(target).toggleClass('active').siblings('.overlay').toggleClass('active');
        }
        else {
            $(this).toggleClass('active').siblings(target).slideToggle();
        }
        if($(this).hasClass('search-icon')) {
            $('#search-mobile').focus();
        }
    });
    
    // anim scroll
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
    
    // show more
    $(".colors__item").slice(0,6).show();
    $("#show-more").click(function(e){
        e.preventDefault();
        $(".colors__item:hidden").slice(0,6).fadeIn("slow");
        if($(".colors__item:hidden").length == 0){
            if ($(this).parents('.show-more--gradient').length) {
                $(this).parents('.show-more--gradient').fadeOut("slow");
            }
            else {
                $("#show-more").fadeOut("slow");
            }
        }
    });
    $(".card__data-item").slice(0,8).show().addClass('visible');
    $("#show").click(function(e){
        e.preventDefault();
        $(".card__data-item:hidden").slice(0,50).fadeIn("slow").addClass('visible');
        if($(".card__data-item:hidden").length == 0){
            $("#show").fadeOut("slow");
        }
    });


    // carousel
    var swiper = new Swiper('.swiper-container--intro', {
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 0,
        effect: 'fade',
        pagination: {
            el: '#disc-intro',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.intro__picture').hide(0);
                $('.intro__picture').removeClass('aos-init').removeClass('aos-animate');
            },
            slideChangeTransitionEnd: function () {
                $('.intro__picture').show(0);
                AOS.init();
            },
        },
        keyboard: false,
    });
    mySwiper = new Swiper('.swiper-container--manufacturer', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-manufacturer',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            767: {
                slidesPerView: 'auto',
            },
            1229: {
                slidesPerView: 6,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--work', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-work',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            1229: {
                slidesPerView: 4,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--certificates', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next--default',
        prevEl: '.prev--default',
    },
        pagination: {
        el: '#disc-certificates',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            1230: {
                slidesPerView: 5,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--reviews', {
        slidesPerView: 1,
        setWrapperSize: true,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        autoHeight: true,
        navigation: {
        nextEl: '#reviews-next',
        prevEl: '#reviews-prev',
    },
        pagination: {
        el: '#disc-reviews',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            0: {
                autoHeight: true,
            },
            575: {
                slidesPerView: 1,
                autoHeight: true,
            },
            767: {
                slidesPerView: 1,
                autoHeight: true,
            },
            991: {
                slidesPerView: 1,
                autoHeight: true,
            },
            1229: {
                slidesPerView: 'auto',
                autoHeight: true,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--appearance', {
        slidesPerView: 'auto',
        autoHeight: true,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-appearance',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            1229: {
                slidesPerView: 5,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--additional', {
        slidesPerView: 'auto',
        autoHeight: true,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-additional',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            1229: {
                slidesPerView: 5,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--videos', {
        slidesPerView: 'auto',
        autoHeight: true,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-videos',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            1229: {
                slidesPerView: 4,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--product-menu', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            767: {
                slidesPerView: 'auto',
            },
            991: {
                slidesPerView: 4,
            },
            1229: {
                slidesPerView: 6,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--colors', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-colors',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            1229: {
                slidesPerView: 6,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--basic', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-basic',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        keyboard: false,
        breakpoints: {
            991: {
                slidesPerView: 4,
            },
            1229: {
                slidesPerView: 5,
            },
        }
    });
    var galleryThumbs = new Swiper('.swiper-container--card-thumbnail', {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.swiper-container--card-image', {
      spaceBetween: 10,
        pagination: {
        el: '#disc-card-image',
        clickable: true,
    },
      navigation: {
        nextEl: '.card__thumbnail-arrow--next',
        prevEl: '.card__thumbnail-arrow--prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
    mySwiper = new Swiper('.swiper-container--product', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-product',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1229: {
                slidesPerView: 4,
            },
        }
    });

    // AOS aniamte

    $(function () {
        AOS.init();
    });

    // quantity buttons
    $('.quantity__button--minus').click(function () {
		var $input = $(this).parents('.quantity').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.quantity__button--plus').click(function () {
		var $input = $(this).parents('.quantity').find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
    });
    
    // tabs
    $('ul.tabs__caption').on('click', 'li.tabs__headline:not(.tabs__headline--active)', function() {
        $(this)
            .addClass('tabs__headline--active').siblings().removeClass('tabs__headline--active')
            .closest('div.tabs').find('div.tabs__item').removeClass('tabs__item--active').eq($(this).index()).addClass('tabs__item--active');
    });
    
    // slider range
     $(function() {
        $( "#range1" ).slider({
            animate: true,
            range: true,
            min: 3000,
            max: 4500,
            values: [3000, 4500 ],
            slide: function( event, ui ) {
                $("#range1").siblings( ".slider-box__row" ).find(".slider-box__cell--primary").text( ui.values[ 0 ] );
                $("#range1").siblings( ".slider-box__row" ).find(".slider-box__cell--tertiary").text( ui.values[ 1 ] );
            }
        });
        $("#range1").siblings( ".slider-box__row" ).find(".slider-box__cell--primary").text( $( "#range1" ).slider( "values", 0 ) );
        $("#range1").siblings( ".slider-box__row" ).find(".slider-box__cell--tertiary").text( $( "#range1" ).slider( "values", 1 ) );
         
        $( "#range2" ).slider({
            animate: true,
            range: true,
            min: 3000,
            max: 4500,
            values: [3000, 4500 ],
            slide: function( event, ui ) {
                $("#range2").siblings( ".slider-box__row" ).find(".slider-box__cell--primary").text( ui.values[ 0 ] );
                $("#range2").siblings( ".slider-box__row" ).find(".slider-box__cell--tertiary").text( ui.values[ 1 ] );
            }
        });
        $("#range2").siblings( ".slider-box__row" ).find(".slider-box__cell--primary").text( $( "#range1" ).slider( "values", 0 ) );
        $("#range2").siblings( ".slider-box__row" ).find(".slider-box__cell--tertiary").text( $( "#range1" ).slider( "values", 1 ) );

    });
    // toopltip
    $( function() {
        $( document ).tooltip();
    } );
    
    // Form validate
    $('form').each(function() {
        $(this).validate({
            highlight: function(element) {
                $(element).parent('.form__group').addClass('error');
            },
            unhighlight: function(element) {
                $(element).parent('.form__group').removeClass('error');
            },
            errorPlacement: function(error,element) {
                return true;
            },
            errorClass: 'form__error',
            errorElement: 'div',
            rules: {
                userName: {
                    required: true,
                },
                userTel: {
                    required: true,
                },
                userEmail: {
                    required: true,
                },
                userMsg: {
                    required: true,
                }
            },
            messages: {
                userName: {
                    required: '',
                },
                userTel: {
                    required: '',
                },
                userEmail: {
                    required: '',
                },
                userMsg: {
                    required: '',
                }
            }
        });
    });
    
    // mask
    $('input[type="tel"]').mask('+7 (999) 999-99-99');
    (function() {
      'use strict';

      // breakpoint where swiper will be destroyed
      // and switches to a dual-column layout
      const breakpoint = window.matchMedia( '(min-width: 992px)' );

      // keep track of swiper instances to destroy later
      let mySwiper;

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      const breakpointChecker = function() {

        // if larger viewport and multi-row layout needed
        if ( breakpoint.matches === true ) {

          // clean up old instances and inline styles when available
          if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

          // or/and do nothing
          return;

          // else if a small viewport and single column layout needed
          } else if ( breakpoint.matches === false ) {

            // fire small viewport version of swiper
            return enableSwiper();

          }

      };

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      const enableSwiper = function() {

        mySwiper = new Swiper('.swiper-container--types', {
                slidesPerView: 'auto',
                autoHeight: false,
                simulateTouch: false,
                watchOverflow: true,
                watchSlidesVisibility: true,
                cssMode: false,
                loop: false,
                mousewheel: {
                    forceToAxis: true,
                },
                touchReleaseOnEdges: true,
                keyboard: false,
        });

        mySwiper = new Swiper('.swiper-container--froze', {
                slidesPerView: 1,
                autoHeight: false,
                simulateTouch: false,
                watchOverflow: true,
                watchSlidesVisibility: true,
                cssMode: false,
                loop: false,
                pagination: {
                el: '#disc-froze',
                    clickable: true,
                },
                mousewheel: {
                    forceToAxis: true,
                },
                touchReleaseOnEdges: true,
                keyboard: false,
                breakpoints: {
                    575: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                }
        });

        mySwiper = new Swiper('.swiper-container--work2', {
                slidesPerView: 'auto',
                autoHeight: false,
                simulateTouch: false,
                watchOverflow: true,
                watchSlidesVisibility: true,
                cssMode: false,
                loop: false,
                mousewheel: {
                    forceToAxis: true,
                },
                touchReleaseOnEdges: true,
                keyboard: false,
        });

      };

      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////

      // keep an eye on viewport size changes
      breakpoint.addListener(breakpointChecker);

      // kickstart
      breakpointChecker();



    })(); /* IIFE end */
});