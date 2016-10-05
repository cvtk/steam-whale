$(function() {
	app.minicartWidget = $('#minicartWidget'); 
	app.minicartWidget.triggers = $("[data-minicart-trigger]");

	app.minicartWidget.toggle = function() {
		app.minicartWidget.toggleClass('_hidden');
		return false;
	}

	app.minicartWidget.init = function() {
		app.minicartWidget.triggers.each(function() {
			$(this).click( app.minicartWidget.toggle );
		})
	}
	app.minicartWidget.init();
});