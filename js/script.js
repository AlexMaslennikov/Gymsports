/* Скрипт для скроллинга */

$('a[href^="#anchor"]').bind('click.smoothscroll', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function() {
        window.location.hash = target;
    });
});

/* Скрипт для dropdown-меню */

$(document).ready(function() {
    $(".hamburger-btn").click(function() {
        event.preventDefault();
        $(".navigation-slide").slideToggle("slow");
        $(this).toggleClass("navigation-visible");
    });
});

/* Скрипт для карты */

ymaps.ready(function() {

    var myMap = new ymaps.Map('map', {
            center: [34.05079, -118.258154],
            controls: ['zoomControl'],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'W 6th St, 827, Los-Angeles, CA'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pointer.png',
            // Размеры метки.
            iconImageSize: [110, 160],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-55, -140]
        });

    var position = myMap.getGlobalPixelCenter();
    myMap.setGlobalPixelCenter([position[0] - (-80), position[1] - 50]);
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
