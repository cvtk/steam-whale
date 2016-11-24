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

	miniShop2.Order = {
		getcost: function() {
			var callbacks = miniShop2.Order.callbacks;
			callbacks.getcost.response.success = function(response) {
				$(miniShop2.Order.orderCost).text(miniShop2.Utils.formatPrice(response.data['cost']));
			}
			var data = {};
			data[miniShop2.actionName] = 'order/getcost';
			miniShop2.send(data, miniShop2.Order.callbacks.getcost, miniShop2.Callbacks.Order.getcost);
		}
	}
	

	miniShop2.Cart.totalCount = '.cart-count';
	miniShop2.Cart.totalCost = '.summary-price > .price';
	miniShop2.Message.close = function() {};
	miniShop2.Message.show = function(message) {};

});