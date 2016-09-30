$(function() {
	miniShop2.Cart.cart = '#pageCartWidget';
	miniShop2.Cart.miniCart = '#userMenuCart';
	miniShop2.Cart.miniCartNotEmptyClass = 'full';
	miniShop2.Cart.countInput = 'input[name=count]';
	miniShop2.Cart.totalWeight = '.ms2_total_weight';
	miniShop2.Cart.totalCount = '.ms2_total_count';
	miniShop2.Cart.totalCost = '.ms2_total_cost';

	miniShop2.Callbacks.Cart.add.response.success = function(response) {
		$.post('/', {action: 'reloadCart'}, function(response) {
			$('#cartWidget').replaceWith(response);
			app.cartWidget.update();
		})
	}
});