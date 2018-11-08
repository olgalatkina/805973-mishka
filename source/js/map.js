<script type="text/javascript">
  window.onload = function () {
  // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map(document.getElementById("YMapsID"));

    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(59.93634106, 30.32286600), 16);
  };
</script>
