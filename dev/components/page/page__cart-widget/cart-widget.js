var app = {};
app.cartWidget = {};
app.cartWidget.update = function() {
	$('#userMenuCart').unbind("click").bind('click', function() {
		$('#pageCartWidget').toggleClass('page__cart-widget--show');
		return false;
	});
	$('#cartWidgetCloseLink').unbind("click").bind('click', function(event) {
		event.stopPropagation();
		$('#pageCartWidget').toggleClass('page__cart-widget--show');
	});
	$('.products-list-item__remove').unbind("click").bind('click', function() {
		$(this).parents('.products-list__item').fadeOut(400);
	})
}

app.cartWidget.update();