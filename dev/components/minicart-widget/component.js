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
		var removeTriggers = $("[data-listview-remove-trigger]");
		removeTriggers.each(function() {
			$(this).click(function() {
				var id = $(this).parents('.listview-item').data('listview-item-id');
				$("[data-listview-item-id='" + id +"']").fadeOut(350);
			})
		})
	}
	app.minicartWidget.init();
});