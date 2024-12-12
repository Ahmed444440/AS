$(function ($) {
    "use strict";


    $(document).ready(function () {

         //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 350) {
            $(".header-menu").removeClass("sticky");
        } else{
            $(".header-menu").addClass("sticky");
        }
    });

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
    });
 //===== Menu More Categories
    
 $('.header-menu-vertical .menu-title').on('click', function(event) {
    $('.header-menu-vertical .menu-content').slideToggle(500);
});
window.addEventListener("load", function() {
  // Hide the preloader after the page has fully loaded
  document.getElementById("preloader").style.opacity = '0';

  // After the opacity transition, completely hide the preloader
  setTimeout(function() {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.visibility = "hidden";
  }, 500); // Delay for opacity transition to finish
});

$('.menu-expand').each(function(){
    var $ul = $(this),
        $lis = $ul.find('.menu-item:gt(11)'),
        isExpanded = $ul.hasClass('expanded');
    $lis[isExpanded ? 'show' : 'hide']();

    if($lis.length > 0){
        $ul
            .append($('<li class="expand">' + (isExpanded ? '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>') + '</li>')
            .click(function(event){
                var isExpanded = $ul.hasClass('expanded');
                event.preventDefault();
                $(this).html(isExpanded ? '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
                $ul.toggleClass('expanded');
                $lis.toggle(300);
            }));
    }
});

$('.menu-expand-2').each(function(){
    var $ul = $(this),
        $lis = $ul.find('.menu-item:gt(9)'),
        isExpanded = $ul.hasClass('expanded');
    $lis[isExpanded ? 'show' : 'hide']();

    if($lis.length > 0){
        $ul
            .append($('<li class="expand">' + (isExpanded ? '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>') + '</li>')
            .click(function(event){
                var isExpanded = $ul.hasClass('expanded');
                event.preventDefault();
                $(this).html(isExpanded ? '<a href="javascript:;"><span><i class="ion-android-add"></i>More Categories</span></a>' : '<a href="javascript:;"><span><i class="ion-android-remove"></i>Close Categories</span></a>');
                $ul.toggleClass('expanded');
                $lis.toggle(300);
            }));
    }
});


//===== Mobile Menu    

/*Variables*/
var $offCanvasNav = $('.mobile-canvas'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown-menu');

/*Add Toggle Button With Off Canvas Sub Menu*/
$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

/*Close Off Canvas Sub Menu*/
$offCanvasNavSubMenu.slideUp();

/*Category Sub Menu Toggle*/
$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length) {
            $this.parent('li').removeClass('active-expand');
            $this.siblings('ul').slideUp();
        } else {
            $this.parent('li').addClass('active-expand');
            $this.closest('li').siblings('li').find('ul:visible').slideUp();
            $this.closest('li').siblings('li').removeClass('active-expand');
            $this.siblings('ul').slideDown();
        }
    }
});


/*Variables*/
var $offCanvasNav = $('.mobile-main-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.mega-sub-menu, .sub-menu, .submenu-item ');

/*Add Toggle Button With Off Canvas Sub Menu*/
$offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"><i class="icon fas fa-chevron-down"></i></span>');

/*Close Off Canvas Sub Menu*/
$offCanvasNavSubMenu.slideUp();

/*Category Sub Menu Toggle*/
$offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
    var $this = $(this);
    if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length) {
            $this.parent('li').removeClass('active-expand');
            $this.siblings('ul').slideUp();
        } else {
            $this.parent('li').addClass('active-expand');
            $this.closest('li').siblings('li').find('ul:visible').slideUp();
            $this.closest('li').siblings('li').removeClass('active-expand');
            $this.siblings('ul').slideDown();
        }
    }
});

$( ".mega-sub-menu" ).parent( "li" ).addClass( "position-static" );
document.querySelectorAll('.header-widget.header-cart').forEach((element) => {
  element.addEventListener('click', () => {
      document.querySelectorAll('.cart-sidebar-wrappper').forEach((element) => element.classList.add('cart-active'))
  })
})
document.querySelectorAll('.cart-close-icon i').forEach((element) => {
  element.addEventListener('click', () => {
      document.querySelectorAll('.cart-sidebar-wrappper').forEach((element) => element.classList.remove('cart-active'))
  })
})
window.onclick = function (event) {
  document.querySelectorAll('.cart-sidebar-wrappper').forEach((el) => {
      if (event.target === el) {
          el.classList.remove('cart-active')
      }
  })
}
 /*=====================
      2. Image to background js
      ==========================*/
      $(".bg-top").parent().addClass("b-top");
      $(".bg-bottom").parent().addClass("b-bottom");
      $(".bg-center").parent().addClass("b-center");
      $(".bg-left").parent().addClass("b-left");
      $(".bg-right").parent().addClass("b-right");
      $(".bg_size_content").parent().addClass("b_size_content");
      $(".bg-img").parent().addClass("bg-size");
      $(".bg-img.blur-up").parent().addClass("blur-up lazyload");
      $(".bg-img").each(function () {
          var el = $(this),
              src = el.attr("src"),
              parent = el.parent();
  
          parent.css({
              "background-image": "url(" + src + ")",
              "background-size": "cover",
              "background-position": "center",
              "background-repeat": "no-repeat",
              display: "block",
          });
  
          el.hide();
      });

      // var mainHomeSLider = new Swiper('.home-main-slider', {
      //   spaceBetween: 0,
      //   centeredSlides: false,
      //   speed: 1600,
      //   effect: 'fade',
      //   fadeEffect: {
      //     crossFade: true
      //   },
      //   loop: true,
      //   // autoplay: {
      //   //   delay: 4000,
      //   //   disableOnInteraction: false,
      //   // },
      //   navigation: {
      //     nextEl: '.home-main-slider-next',
      //     prevEl: '.home-main-slider-prev',
      //   },
      //   pagination: {
      //     el: '.home-main-slider-pagination',
      //     clickable: true
      //   },
      // });
      // var a = document.body;
      // a.classList ? a.classList.add('page-loaded') : a.className += ' page-loaded';    
   
      var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        // initialSlide: 2,
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
            init: function(){
                var index = this.activeIndex;

                var target = $('.product-slider__item').eq(index).data('target');

                console.log(target);

                $('.product-img__item').removeClass('active');
                $('.product-img__item#'+ target).addClass('active');
            }
        }

    });

    swiper.on('slideChange', function () {
        var index = this.activeIndex;

        var target = $('.product-slider__item').eq(index).data('target');

        console.log(target);

        $('.product-img__item').removeClass('active');
        $('.product-img__item#'+ target).addClass('active');

        if(swiper.isEnd) {
            $('.prev').removeClass('disabled');
            $('.next').addClass('disabled');
        } else {
            $('.next').removeClass('disabled');
        }

        if(swiper.isBeginning) {
            $('.prev').addClass('disabled');
        } else {
            $('.prev').removeClass('disabled');
        }
    });

    $(".js-fav").on("click", function() {
        $(this).find('.heart').toggleClass("is-active");
    });
    $('.category-active-2').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow:'<span class="prev"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-chevron-right"></i></span>',
        speed: 2000,
        slidesToShow:10,
        draggable: true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                  arrows: false,
              }
            }
        ]
    });
    
// $(".category-slider1").slick({
//     dots: false,
//     infinite: true,
//     loop: true,
//     arrows: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 1425,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3,
//           centerMode: true,

//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           fade: false,
//         },
//       },
//     ],
//   });

  $(".insta-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1630,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  });
    $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
       $('.pro-qty').append('<span class="inc qtybtn">+</span>');
       $('.qtybtn').on('click', function() {
           var $button = $(this);
           var oldValue = $button.parent().find('input').val();
           if ($button.hasClass('inc')) {
               var newVal = parseFloat(oldValue) + 1;
           } else {
               // Don't allow decrementing below zero
               if (oldValue > 0) {
                   var newVal = parseFloat(oldValue) - 1;
               } else {
                   newVal = 0;
               }
           }
           $button.parent().find('input').val(newVal);
       });

       $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function (event, ui) {
            $("#amount").val("L.E" + ui.values[0] + " - L.E" + ui.values[1]);
        }
    });
    $("#amount").val("L.E" + $("#slider-range").slider("values", 0) +
        " - L.E" + $("#slider-range").slider("values", 1));
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="bi bi-plus"></i></div><div class="quantity-button quantity-down"><i class="bi bi-dash"></i></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');
        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });


    
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
    {
        breakpoint: 992,
        settings: {
          vertical: false,
        }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 380,
      settings: {
        vertical: false,
        slidesToShow: 2,
      }
    }
    ]
});

});
});
    const btnLove = document.querySelector('.btn-love');
btnLove.addEventListener('click',function(e){
  if(!this.classList.contains('act')){
  this.className += " act";
  
  TweenMax.set('.circle,.small-ornament',{
    rotation:0,
    scale:0,
  })
  TweenMax.set('.ornament',{
    opacity:0,
    scale:1,
  })
  let Tl = new TimelineMax({});
  Tl.to('.fa',0.1,{
    scale:0,
    ease:Back.easeNone,
  })
  
  Tl.to('.circle',0.2,{
    
    scale:1.2,
    opacity:1,
    ease:Back.easeNone,
  })
  
  Tl.to('.fa',0.2,{
    delay:0.1,
    scale:1.3,
    color:'#e3274d',
    ease:Ease.easeOut
  })
  Tl.to('.fa',0.2,{
    scale:1,
    ease:Ease.easeOut
  })
 
  Tl = new TimelineMax({
    delay:0.1,
  });
  
  
  Tl.to('#eclipse',0.2,{
    
    strokeWidth:10,
    ease:Back.easeNone,
  })
  Tl.to('#eclipse',0.2,{
    strokeWidth:0,
    ease:Back.easeNone,
  })
  Tl = new TimelineMax({
    delay:0.1,
   });
  Tl.to('.small-ornament',0.3,{
    scale:0.8,
    opacity:1,
    ease:Linear.easeOut,
  })
  Tl.to('.small-ornament',0.2,{
    scale:1.2,
    opacity:1,
    rotation:15,
    ease:Ease.easeOut,
  })
  
  
  Tl = new TimelineMax({
    delay:0.3,
  });
  Tl.to('.ornament',0.2,{
    opacity:1,
    ease:Ease.easeNone
  })
  Tl.to('.ornament',0.1,{
    scale:0,
    ease:Ease.easeOut
  })
  }else{
    this.classList.remove('act');
    TweenMax.set('.fa',{
      color:'#c0c1c3',
    })
  }
})