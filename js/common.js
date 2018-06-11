'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight()+ $('.call-btn').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight()+ $('.call-btn').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();


  $('.bot-nav li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
    if($('.fancybox').length) {
        $('.fancybox').fancybox();
    }

  $('.main-offers-slider').slick({
      dots:true
  });
  $('.about-testimonial-slider').slick({
      dots:true
  });
    $('.main-team-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
  });
    $('.direction-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
  });
    $('.certificate-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
  });

    $('.top-nav-btn').on('click',function(){
        if($(this).hasClass('top-open')){
            $(this).removeClass('top-open').addClass('top-close');
            $('.bot-nav').addClass('bot-nav-open');
            $('.top-header').addClass('top-header-close');
            $('body').css('overflow', 'hidden');
        }else{
            $(this).addClass('top-open').removeClass('top-close');
            $('.bot-nav').removeClass('bot-nav-open');
            $('.top-header').removeClass('top-header-close');
            $('body').css('overflow', 'auto');
        }
    });
    $('.btn-tell').on('click', function (e) {
        e.preventDefault();
        $('.popup-tel').addClass('popup-wrap-open');
        if($('.popup-wrap').hasClass('popup-wrap-open')){
            $('.popup-tel').addClass('popup-wrap-open').removeClass('popup-wrap-close');
        }else{
        }
    });
    $('.btn-mes').on('click', function (e) {
        e.preventDefault();
        $('.popup-mes').addClass('popup-wrap-open');
        if($('.popup-wrap').hasClass('popup-wrap-open')){
            $('.popup-mes').addClass('popup-wrap-open').removeClass('popup-wrap-close');
        }else{
        }
    });
    $('.link-header').on('click', function (e) {
        e.preventDefault();
        $('.popup-mes').addClass('popup-wrap-open');
        if($('.popup-wrap').hasClass('popup-wrap-open')){
            $('.popup-mes').addClass('popup-wrap-open').removeClass('popup-wrap-close');
        }else{
        }
    });
    $('.offers-item a').on('click', function (e) {
        e.preventDefault();
        $('.popup-mes').addClass('popup-wrap-open');
        if($('.popup-wrap').hasClass('popup-wrap-open')){
            $('.popup-mes').addClass('popup-wrap-open').removeClass('popup-wrap-close');
        }else{
        }
    });
    $('.popup-close').on('click', function (e) {
        e.preventDefault();
        if($('.popup-mes').hasClass('popup-wrap-open')){
            $('.popup-wrap').addClass('popup-wrap-close').removeClass('popup-wrap-open');
        }else{
        }
        if($('.popup-tel').hasClass('popup-wrap-open')){
            $('.popup-wrap').addClass('popup-wrap-close').removeClass('popup-wrap-open');
        }else{
        }
    });
    $('.to-section i').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".main-about-wrapper").offset().top
        }, 2000);
    })
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.header').addClass('header-scroll');
    }
    else {
        $('.header').removeClass('header-scroll');
    }
});
$(function (){
    if (($(window).width()) < '992'){
        $('.call-btn').addClass('call-btn-fixed');

        $('.sub-nav .service-link').on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                $thisItem = $this.closest('.sub-nav'),
                $thisContent = $thisItem.find('.sub-nav-container');
            if($thisItem.hasClass('open')) {
                $thisItem.removeClass('open');
                $thisContent.stop(true, true).slideUp();
                $('.sub-nav-link').css('display', 'none');
            } else {
                $thisItem.addClass('open').siblings().removeClass('open').find('.text-question').stop(true, true).slideUp();
                $thisContent.stop(true, true).slideDown();
                $('.sub-nav-link').css('display', 'block');
            }
        });
        $('.price-table table tbody ').slimScroll({
            railVisible: true,
            alwaysVisible: true,
            height: '280px'
        });
    }else {
        $('.call-btn').removeClass('call-btn-fixed');
        $('.price-table table tbody ').slimScroll({
            railVisible: true,
            alwaysVisible: true,
            height: '560px'
        });
    }
});

$(window).load(function() {
    var wow = new WOW({
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       200,
        mobile:       false,
        live:         true,
        callback:     function(box) {
        }
    });
    wow.init();
});



$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".top-banner-container .image").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * +0.5 + 50;
        var newvalueY = height * pageY * +0.5 + 50;
        $('.top-banner-container .image').css("background-position", newvalueX+"%     "+newvalueY+"%");
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.scroll-to-top').fadeIn().css('display','block');
    }else {
        $('.scroll-to-top').fadeOut().css('display','none');
    }
});
$('.scroll-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});

