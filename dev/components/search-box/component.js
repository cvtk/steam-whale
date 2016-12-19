$(function() {
	var getProducts = function( queryString ) {
		var query = {};
		$.each($.data( $(queryString) ), function(i, e) {
		});
	}


	$('#filterNavigationSearch').click(function() {
		$('#searchBox').slideToggle();
		$(this).toggleClass('_active');
	});

	$('.vendor-filter > .input').change(function() {
		$('#queryString > .item[data-vendor]').remove();

		$('.vendor-filter > .input').each(function(i, item) {
				if ( $(item).prop('checked') == false ) {
					var label = $("label[for='"+$(item).attr('id')+"']");
					var html = '<span class="item" data-vendor="' + $(item).attr('id') + '"> Исключить: "' + label.html() + '"</span>'
					$('#queryString').append(html);
				}
			})
		getProducts('#queryString > .item');

	})


	$('#searchBox > .search').keypress(function (e) {

	  if (e.which == 13) {
	  	var query = $('#searchBox > .search').val();
			if ( $('#queryString > .item[data-name]').length === 0 ) {
				$('#queryString').append('<span class="item" data-name=""></span>');
			} else if ( query.length === 0 ) {
				$('#queryString > .item[data-name]').remove();
			}

			$('#queryString > .item[data-name]').data('name', query ).html('Название включает "' + query + '"');
			var category = $('#queryString > .item[data-category]').data('category');

	    $.post('/ajax', {
				action: 'search', 
				search: query,
				category: category }, function(response) {
					if ($(response).children().length < 12) {
						$('span[data-action="loadMore"]').fadeOut(350);
					} 
					else { 
						$('span[data-action="loadMore"]').fadeIn(350);
					}
					$('#productsRowview').hide().html(response).fadeIn(350); 
			});
	    return false;  
  	}
	});
})