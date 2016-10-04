$(function() {
	app.minicartWidget = $('#minicartWidget'); 
	app.minicartWidget.triggers = $("[data-minicart-trigger]");

	app.minicartWidget.toggle = function() {
		$('#overlay').toggle(550);
		app.minicartWidget.toggleClass('_hided');
	}

	app.minicartWidget.init = function() {
		$('body').append('<div id="overlay" style="position: fixed; visibility:hidden; top: 0; left: 0; height: 100%; width: 100%; z-index: 3; background-color: rgba(0,0,0,0.75);"></div>');
		app.minicartWidget.triggers.each(function() {
			$(this).click( app.minicartWidget.toggle )
		})
	}
	app.minicartWidget.init();
});