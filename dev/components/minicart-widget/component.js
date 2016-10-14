$(function() {
	app.minicartWidget = $('#minicartWidget'); 
	app.minicartWidget.triggers = $("[data-minicart-trigger]");

	app.minicartWidget.toggle = function() {
		app.minicartWidget.toggleClass('_hidden');
		return false;
	}

	app.minicartWidget.init = function() {
		app.minicartWidget.triggers.each(function() {
			$(this).unbind('click').click( app.minicartWidget.toggle );
		})
		var removeTriggers = $("#minicartWidget [data-listview-remove-trigger]");
		removeTriggers.each(function() {
			$(this).click(function() {
				$(this).parent().fadeOut();
			})
		})
	}
	app.minicartWidget.init();
});