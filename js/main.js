const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
})

ymaps.ready(init)
function init() {
  var myMap = new ymaps.Map(
      'map',
      {
        center: [7.89073, 98.294727],
        zoom: 16,
      },
      {
        searchControlProvider: 'yandex#search',
      },
    ),
    myPlacemark = new ymaps.Placemark(
      [7.89073, 98.294727],
      {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        hintContent: 'Grand Hilton Hotel',
      },
      {
        preset: 'islands#redIcon',
      },
    )

  myMap.geoObjects.add(myPlacemark)
}
