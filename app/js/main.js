$(function () {
$('.special-offer__slider').slick({

});
$('.special-offer__wrapper').append($('.slick-arrow'));
$('.product__favorite').on('click', () => {
  $('.product__favorite').toggleClass('product__favorite--active');
})

var mixer = mixitup('.best__products');
})