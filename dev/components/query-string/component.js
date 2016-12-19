$('#queryString').bind("DOMSubtreeModified", function() {
	$('#queryString > .item').click(function() {
		var category = $('#queryString > .item[data-category]').data('category');
		$.post('/ajax', {
				action: 'search', 
				search: "",
				category: category }, function(response) {
					if ($(response).children().length < 12) {
						$('span[data-action="loadMore"]').fadeOut(350);
					} 
					else { 
						$('span[data-action="loadMore"]').fadeIn(350);
					}
					$('#queryString > .item[data-name]').remove();
					$('#productsRowview').hide().html(response).fadeIn(350); 
			});
	    return false; 
	});
});