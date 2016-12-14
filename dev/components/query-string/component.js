$('#queryString').bind("DOMSubtreeModified", function() {
	$('#queryString > .item').click(function() {
		$.post('/ajax', {
				action: 'search', 
				search: "" }, function(response) {
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