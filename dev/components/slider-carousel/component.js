$(function() {
	
	$('[data-slider-trigger]').click(function() {
		var $self = $(this),
			  target = $self.attr('data-slider-trigger');

		$self.siblings().removeClass('_active');
		$self.addClass('_active');
		$('#sliderFrame').animate({top: target * -100 + 100 + '%'}, 550);
	})
})