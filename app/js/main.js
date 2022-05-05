$(function () {

  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 1100,
    from = 0,
    to = 0;

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    hide_min_max: true,
    hide_from_to: true,
  });

  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });



  $('.special-offer__slider').slick({
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    dots: false,
    dotsClass: 'special-offer__dots',
    responsive: [{
      breakpoint: 557,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });

  $('.partners__wrapper').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 5,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 557,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });


  //product-page top slider

  $('.product-page__slider').slick({
    infinite: false,
    prevArrow: '<button class="prev product-page__prev product-page__slider-btn"><span class="sr-only">slider previos button</span></button>',
    nextArrow: '<button class="next product-page__next product-page__slider-btn"><span class="sr-only">slider next button</span></button>',
   
    responsive: [{
      breakpoint: 1378,
      settings: {
        dots: true,
        dotsClass: 'product-page__slider-dots',
        arrows: false
      }
    }]
  })


  $('.product-related__slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="prev product-related__prev product-related__slider-btn"><span class="sr-only">slider previos button</span></button>',
    nextArrow: '<button class="next product-related__next product-related__slider-btn"><span class="sr-only">slider next button</span></button>',
    responsive: [{

      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        dotsClass: 'product-page__slider-dots',
      }
    }
  ]
  
  })

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,
    
    Carousel: {
    Dots: true,
    },
    Image: {
      zoom: false,
      click: false,
      wheel: "slide",
    },
  });

  //focus
  $('.select-styled').attr('tabindex', '0');

  //catalog page view change

  $('.content__btn').on('click', function (e) {

    if (!$(e.currentTarget).hasClass('content__btn-hide')) {
      $('.content__btn').each(function () {
        $(this).removeClass('content__btn--active')
      })
    }

    if (!$(e.currentTarget).hasClass('content__btn-hide')) {
      $(this).addClass('content__btn--active')
    }

    if ($(e.currentTarget).hasClass('content__btn-blocks')) {
      $('.content__lines').removeClass('content__lines--active')
      $('.content__blocks').addClass('content__blocks--active')
    }

    if ($(e.currentTarget).hasClass('content__btn-lines')) {
      $('.content__blocks').removeClass('content__blocks--active')
      $('.content__lines').addClass('content__lines--active')
    }
  })

  // adaptive aside filters
  $('.content__btn-hide').on('click', function () {
    $('.aside-filters').toggleClass('aside-filters--active')
    $('.overlay').toggleClass('overlay--active');
    $('body').css('overflow', 'hidden');
  })

  $('.aside-filters__close, .overlay').on('click', function () {
    $('.aside-filters').removeClass('aside-filters--active')
    $('.overlay').removeClass('overlay--active');
    $('body').css('overflow', 'auto');
  })


  //выпадающее меню
  $('.dropdown__title, .dropdown__btn').on('click', function () {
    $('.dropdown__menu').toggleClass('dropdown__menu--active');
    $('.dropdown__title').toggleClass('dropdown__title--active');
  });

  $(document).on('mouseup scroll', function (e) {
    let div = $('.dropdown');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.dropdown__title').removeClass('dropdown__title--active');
      if ($(window).height() > 600) {
        $('.dropdown__menu').removeClass('dropdown__menu--active');
      }
    }
  })

  $('.aside-filters__title-btn').on('click', function (e) {
    $(e.currentTarget).parent().find('.aside-filters__title-btn').toggleClass('aside-filters__title-btn--active');
    $(e.currentTarget).parent().find('.aside-filters__menu').toggleClass('aside-filters__menu--active');
  });

  //выпадающий поиск при адаптиве
  $('.user-nav__link--search').on('click', function () {
    $('.header__search--mobile').toggleClass('header__search--active');
  });

  $(document).on('mouseup scroll', function (e) {
    let div = $('.user-nav__link--search');
    let div1 = $('.header__search--mobile');
    if (!div.is(e.target) && !div1.is(e.target) &&
      div.has(e.target).length === 0 && div1.has(e.target).length === 0) {
      $('.header__search').removeClass('header__search--active');
    }
  })

  //aside menu + overlay
  $('.menu__burger').on('click', function () {
    $('.aside').toggleClass('aside--active');
    $('.overlay').toggleClass('overlay--active');
    $('body').css('overflow', 'hidden');
  })

  $('.aside__close, .overlay').on('click', function () {
    $('.aside').removeClass('aside--active');
    $('.overlay').removeClass('overlay--active');
    $('body').css('overflow', 'auto');
  })

  // cart menu + overlay
  $('.user-nav__link--cart').on('click', function () {
    $('.cart-menu').toggleClass('cart-menu--active');
    $('.overlay').toggleClass('overlay--active');
    $('body').css('overflow', 'hidden');
  })

  $('.cart-menu__close, .overlay').on('click', function () {
    $('.cart-menu').removeClass('cart-menu--active');
    $('.overlay').removeClass('overlay--active');
    $('body').css('overflow', 'auto');
  })

  //перенос кнопок слайдера в другой блок для позиционирования
  $('.special-offer__wrapper').append($('.slick-arrow'));


  //добавить товар в избранное (клик по сердечкам)
  $('.product__favorite').on('click', function () {
    $(this).toggleClass('product__favorite--active');
  })

  //счетчик кол-ва товаров
  $('.counter__btn--plus').on('click', function () {
    let counter = $(this).siblings('.counter__num').text();
    if (counter < 99) {
      $(this).siblings('.counter__num').text(++counter);
    }
  })

  $('.counter__btn--minus').on('click', function () {
    let counter = $(this).siblings('.counter__num').text();
    if (counter > 0) {
      $(this).siblings('.counter__num').text(--counter);
    }
  })

  //Звездный рейтинг

  $("#rateYo, .comment__rating").rateYo({
    spacing: "5px",
    halfStar: true,
    "starWidth": "16px",
    "normalFill": "#C1C1C1",
    "ratedFill": "#FFB800",
    "starSvg": `<svg class="product-page__star" width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
    <path d="M0.0229654 6.16432C0.0780897 5.9946 0.224746 5.87091 0.401307 5.84529L5.36138 5.12451L7.57965 0.629933C7.65859 0.469933 7.82156 0.368652 7.99996 0.368652C8.1784 0.368652 8.34134 0.469933 8.42031 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4364 15.5776L8 13.2451L3.56373 15.5775C3.40576 15.6606 3.21442 15.6467 3.07008 15.5419C2.92574 15.437 2.85339 15.2593 2.88355 15.0834L3.73095 10.1434L0.141559 6.64478C0.0138092 6.52028 -0.0322227 6.334 0.0229654 6.16432Z" />
    </svg>
    `,
  });

  $('.product-tabs__rating-label').each(function (i, e) {
    $(e).on('click', function () {

      $('.product-tabs__checkbox').each(function (index, element) {

        if (index < i) {
          $(element).prop('checked', true);

        } else {
          $(element).prop('checked', false);
        }
      })
    })
  })

//адаптив страницы продукты

if ($(window).width() < 576){
   $('.product-page__inner').prepend($('.product-page__title:first')); 
   $('.product-page__purchase').text('')
}


  //Счетчик - плагин
  $('.product-page__counter').styler();

  // Табы

  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active')
    $(this).addClass('product-tabs__link--active')

    $('.product-tabs__tab').removeClass('product-tabs__tab--active')
    $($(this).attr('href')).addClass('product-tabs__tab--active')

  })

  // mixitup для разных блоков
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };



  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

})
