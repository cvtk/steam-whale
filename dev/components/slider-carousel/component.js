$(function() {
	app.sliderCarousel = $('#sliderCarousel');
	app.sliderCarousel.interval = (app.sliderCarousel.data('interval')!==undefined)?app.sliderCarousel.data('interval'):1000;
	
	app.sliderCarousel.init = setInterval(function() {
		
	}, app.sliderCarousel.interval)

	
})