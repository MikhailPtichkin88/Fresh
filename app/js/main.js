$(function () {
$('.special-offer__slider').slick();

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