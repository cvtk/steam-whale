
	var myself = document.getElementById('pageCartWidget');
	var trigger = document.getElementById('userMenuCart');
	trigger.onclick = function() {
		myself.classList.toggle('page__cart-widget--show');
	}
	document.getElementById('closeLink').onclick = function(event) {
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true)
		myself.classList.toggle('page__cart-widget--show');
	}
	// myself.onclick = function(event) {
	// 	this.classList.toggle('page__cart-widget--show');
	// }
