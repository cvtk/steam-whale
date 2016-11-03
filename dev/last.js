$(function() {
	miniShop2.Callbacks.Cart.add.response.success = function(response) {
		$.post('/ajax', {action: 'reloadCart'}, function(response) {
			$('#productsListview').html(response);
			app.minicartWidget.init();
		})
	}

	miniShop2.Cart.totalCount = '.cart-count';
	miniShop2.Cart.totalCost = '.summary-price > .price';
});