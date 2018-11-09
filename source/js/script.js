function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

if(window.ymaps) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.93868160750766, 30.323035418987274],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Ул.Большая Конюшенная 19/8, Санкт-Петербург',
      balloonContent: 'Магазин Мишка, офис 101'
    }, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-34, -100]
    });

    myMap.geoObjects
        .add(myPlacemark);
  });
}

ready(function() {
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

  var modalToggler = document.querySelectorAll('[data-modal-toggle]');
  var modal = document.querySelector('.modal');
  var modalOverlay = document.querySelector(".modal__overlay");

  for (var i = 0; i < modalToggler.length; i++) {
    modalToggler[i].addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).classList.add("modal--show");
      modalOverlay.classList.add("modal__overlay--show");
    });
  }

  modalOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    hideModals();
  });

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

  function hideModals() {
    var modals = document.querySelectorAll('.modal');
    var modalsO = document.querySelectorAll('.modal__overlay');

    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove("modal--show");
    }

    for (var i = 0; i < modalsO.length; i++) {
      modalsO[i].classList.remove("modal__overlay--show");
    }
  }
});
