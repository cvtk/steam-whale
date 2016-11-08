$(function() {
	$('#filterNavigationSearch').click(function() {
		$('#searchBox').slideToggle();
		$(this).toggleClass('_active');
	});
	$('#searchBox > .search').keypress(function (e) {
	  if (e.which == 13) {
	    $.post('/ajax', {
				action: 'search', 
				search: $(this).val()}, function(response) {
					if ($(response).children().length < 12) {
						$('span[data-action="loadMore"]').fadeOut(350);
					} 
					else { 
						$('span[data-action="loadMore"]').fadeIn(350);
					}
					$('#queryString').append('<span class="item" data-name="' + $('#searchBox > .search').val() + '">Название включает "' + $('#searchBox > .search').val() + '"</span>');
					$('#productsRowview').html(response); 
			});
	    return false;  
  }
	});
})