$(function () {
$('.special-offer__slider').slick();
$('.partners__wrapper').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 5,
  dots: false,
  arrows: false
});

//выпадающее меню
$('.dropdown__title, .dropdown__btn').on('click', function() {
  $('.dropdown__btn').toggleClass('dropdown__btn--active');
  $('.dropdown__menu').toggleClass('dropdown__menu--active');
});

$('.dropdown__link').on('click', function() {
  $('.dropdown__btn').removeClass('dropdown__btn--active');
  $('.dropdown__menu').removeClass('dropdown__menu--active');
});



// cart menu + overlay
$('.user-nav__link--cart').on('click', function() {
  $('.cart-menu').toggleClass('cart-menu--active');
  $('.overlay').toggleClass('overlay--active');
  $('body').css('overflow', 'hidden');
})

$('.cart-menu__close, .overlay').on('click', function() {
  $('.cart-menu').removeClass('cart-menu--active');
  $('.overlay').removeClass('overlay--active');
  $('body').css('overflow', 'auto');
})

//перенос кнопок слайдера в другой блок для позиционирования
$('.special-offer__wrapper').append($('.slick-arrow'));


//добавить товар в избранное (клик по сердечкам)
$('.product__favorite').on('click', function() {
  $(this).toggleClass('product__favorite--active');
})

//счетчик кол-ва товаров
$('.counter__btn--plus').on('click', function(){
  let counter = $(this).siblings('.counter__num').text();
  if (counter < 99) {
  $(this).siblings('.counter__num').text(++counter);
  }
})

$('.counter__btn--minus').on('click', function(){
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