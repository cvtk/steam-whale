$(function() {
	$('span[data-action="loadMore"]').click(function() {
		var query = {};
		query.offset = $(this).data('offset');
		query.category = $(this).data('category');
		query.vendor = $('#queryString .item[data-vendor]').data('vendor');
		query.name = $('#queryString .item[data-name]').data('name');
		$.post('/ajax', {
			action: 'loadmore', 
			offset: query.offset,
			name: query.name,
			category: query.category,
			vendor: query.vendor}, function(response) {
			if ($(response).children().length < 12) {
				$('span[data-action="loadMore"]').fadeOut(350);
			} 
			$('#productsRowview').append(response);
			$('html, body').animate({
      	scrollTop: $("#productsRowview > form:nth-last-child(12) > .product-item").offset().top-75
    	}, 2000);
		});
		$(this).data()['offset'] += 12;
	})
})