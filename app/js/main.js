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
    $('.dropdown__btn').toggleClass('dropdown__btn--active');
    $('.dropdown__menu').toggleClass('dropdown__menu--active');
    $('.dropdown__title').toggleClass('dropdown__title--active');
  });

  $('.dropdown__link').on('click', function () {
    $('.dropdown__btn').removeClass('dropdown__btn--active');
    $('.dropdown__menu').removeClass('dropdown__menu--active');
    $('.dropdown__title').removeClass('dropdown__title--active');
  });

  $(document).on('mouseup scroll', function (e) {
    let div = $('.dropdown');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.dropdown__btn').removeClass('dropdown__btn--active');
      $('.dropdown__menu').removeClass('dropdown__menu--active');
      $('.dropdown__title').removeClass('dropdown__title--active');
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