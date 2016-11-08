$('#queryString').bind("DOMSubtreeModified", function() {
	$('#queryString > .item').click(function() {
		$(this).remove();
	}); 
});