$('.content4__body').eq(0).addClass('item-active');
$('.special').eq(0).addClass('text-active');
$('.content4__right-shadow').eq(0).addClass('text-active');

$('.content4__body').click(function(n){
	var elem = $(this).parent().index();
	if (!$(this).hasClass('item-active')){
		$('.content4__body').removeClass('item-active');
		$(this).addClass('item-active');
		$('.special').removeClass('text-active');
		$('.special').eq(elem).addClass('text-active');
		$('.content4__right-shadow').removeClass('text-active');
		$('.content4__right-shadow').eq(elem).addClass('text-active');
	}
});

$("#mask").mask("7 (000) -000 -00-00");

 $(document).ready(function(){

 	$('ul.section5__list li > h3').removeClass('quest-active').next('div').slideUp(500);

 	$('ul.section5__list li > h3').click(function(){
 		if (!$(this).hasClass('quest-active')){
 			$('ul.section5__list li > h3').removeClass('quest-active').next('div').slideUp(500);
 			$(this).addClass('quest-active');
 			$(this).next('div').slideDown(500);
 		} else {
 			$(this).removeClass('quest-active').next('div').slideUp(500);
 		}
 	})

 	$(document).ready(function(){
    $('.content3__form').click( function(){ // ловим клик по ссылке с классом content3__form
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top-100 }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

	//$("#accordion").accordion();
	
	ymaps.ready(init);

    function init(){     
        var myMap = new ymaps.Map("map", {
            center: [59.89865588148964,30.418217803922],
            zoom: 13,
            controls: []
        });

         myPlacemark = new ymaps.Placemark([59.89865588148964,30.418217803922], { 
            hintContent: 'Елизаровская', 
            balloonContent: 'Станция' 
        },
        {
        	iconLayout: 'default#image',
	        iconImageHref: 'img/marker.png',
	        iconImageSize: [30, 42],
	        iconImageOffset: [-15, -28]
        });

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
    }

	});
/*
$('#divlink').on('click','a',(function(event){
		event.preventDefault();
		var id = $(this).attr('href');
		var top = $(id).offset().top-100;
		$('body,html').animate({scrollTop: top}, 1500);
	}))

var settings = {
	speed: 500
}
$('.bxslider').bxSlider({
	speed: 500
});*/