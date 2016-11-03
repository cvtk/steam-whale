$(function() {
	$('span[data-action="loadMore"]').click(function() {
		$.post('/ajax', {
			action: $(this).attr('data-action'), 
			offset: $(this).data('offset')}, function(response) {
			if ($(response).children().length < 12) {
				$('span[data-action="loadMore"]').fadeOut(350);
			} 
			$('#productsRowview').append(response);
		});
		$(this).data()['offset'] += 12;
	})
})