$(function() {
	miniShop2.Callbacks.Cart.add.response.success = function(response) {
		$.post('/ajax', {action: 'reloadCart'}, function(response) {
			$('.products-listview').replaceWith(response);
			app.minicartWidget.init();
			$('.products-listview > .listview-item .qty > .input').bind('keyup change click', function (e) {
				$(this).siblings('.reload').fadeIn(350);
			})
		})
	}
	miniShop2.Callbacks.Cart.change.response.success = function(response) {
		$.post('/ajax', {action: 'reloadCart'}, function(response) {
			$('.products-listview').replaceWith(response);
			app.minicartWidget.init();
			$('.products-listview > .listview-item .qty > .input').bind('keyup change click', function (e) {
				$(this).siblings('.reload').fadeIn(350);
			});
		})
	}
	miniShop2.Cart.totalCount = '.cart-count';
	miniShop2.Cart.totalCost = '.summary-price > .price';
	miniShop2.Message.close = function() {};
	miniShop2.Message.show = function(message) {};

});