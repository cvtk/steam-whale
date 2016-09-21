var $pageCartWidget = $('#pageCartWidget');
$('#userMenuCart').bind('click', function() {
	$pageCartWidget.toggleClass('page__cart-widget--show');
	return false;
});
$('#cartWidgetCloseLink').bind('click', function(event) {
	event.stopPropagation();
	$pageCartWidget.toggleClass('page__cart-widget--show');
});
// $pageCartWidget.bind('click', function(event) {
// 	event.stopPropagation();
// 	$(this).toggleClass('page__cart-widget--show');
// });
