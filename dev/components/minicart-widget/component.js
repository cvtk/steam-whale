$(function() {
	app.minicartWidget = $('#minicartWidget'); 
	app.minicartWidget.triggers = $("[data-minicart-trigger]");

	app.minicartWidget.toggle = function() {
		this.minitoggleClass('_hided');
	}

	app.minicartWidget.init = function() {
		app.cartWidget.triggers.each(function() {
			$(this).click( app.minicartWidget.toggle )
		})
	}
	app.minicartWidget.init();
});