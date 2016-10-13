$(function() {
	app.sliderCarousel = $('#sliderCarousel');
	app.sliderCarousel.interval = (app.sliderCarousel.data('interval')!==undefined)?app.sliderCarousel.data('interval'):1000;

	// if( jQuery().slick ) {
	// 	$('#sliderCarousel').slick({
	// 		dots: true,
	// 	  infinite: true,
	// 	  speed: 300,
	// 	  adaptiveHeight: true,
	// 	  // autoplaySpeed: 3500,
	// 	  // autoplay: true,
	// 	  // pauseOnHover: true
	// 	});
 // 	}
})