$(function() {
	if(jQuery().slick) {
		$('.related-products .products-rowview').slick({
			dots: true,
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  speed: 300,
		  autoplaySpeed: 3000,
		  autoplay: true,
	    responsive: [
		    {
		      breakpoint: 970,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		        dots: true
		      }
		    }
	  	]
});
 }
})