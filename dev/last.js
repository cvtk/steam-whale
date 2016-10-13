$(function() {
	miniShop2.Callbacks.Cart.add.response.success = function(response) {
		$.post('/', {action: 'reloadCart'}, function(response) {
		})
	}
});