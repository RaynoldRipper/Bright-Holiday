$(document).ready (function() {
  $(".gallery__slider").slick({
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
        
      }
    }
  ]
  })
});

$(document).ready (function() {
  $(".reviews__block-wrapper").slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500,
  });
});
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
}); 

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('#phone-number, #phone-number2'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});
});

var priceListView = document.querySelector('.price__list-btn');
var priceList = document.querySelector('.price__table-background');
var priceListClose = document.querySelector('.price__table-close-btn');
var priceListLink = document.querySelector('.price__table-btn');
var sucsessClose = document.querySelector('.sucsess-message-close-btn');
var sucsessBlock = document.querySelector('.sucsess-block-wrapper');

priceListView.addEventListener('click', function(){
  priceList.classList.add('price__table-background--active');
});
priceListClose.addEventListener('click', function(){
  priceList.classList.remove('price__table-background--active');
})
priceListLink.addEventListener('click', function(){
  priceList.classList.remove('price__table-background--active');
});