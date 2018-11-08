// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(function () {
  // Создание карты.
  var myMap = new ymaps.Map("YMapsID", {
    // Координаты центра карты.
    // Порядок по умолчнию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.93634106, 30.32286600],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });

  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Ул.Большая Конюшенная 19/8, Санкт-Петербург',
    balloonContent: 'Магазин Мишка, офис 101'
  },
  {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/icon-map-pin.svg',
    // Размеры метки.
    iconImageSize: [67, 100],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-34, -100] // надо проверить!
  });
  myMap.geoObjects.add(myPlacemark);
})