var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var promo = document.querySelector('.promo__button');
// var product = document.querySelector('.product__buy-link');
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector(".modal__overlay");

promo.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  modalOverlay.classList.add("modal__overlay--show");
});

// product.addEventListener("click", function (evt) { // срабатывает только для первой карточки
//   evt.preventDefault();
//   modal.classList.add("modal--show");
//   modalOverlay.classList.add("modal__overlay--show");
// });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
    }
    if (modalOverlay.classList.contains("modal__overlay--show")) {
      modalOverlay.classList.remove("modal__overlay--show");
    }
  }
});
