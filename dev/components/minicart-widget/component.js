$(function() {
	app.minicartWidget = $('#minicartWidget'); 
	app.minicartWidget.triggers = $("[data-minicart-trigger]");

	app.minicartWidget.toggle = function() {
		if ( $( '#overlay' ).length ) {
			$('#overlay').remove();
		} else {
			$('body').append('<div id="overlay" style="position: fixed; top: 0; left: 0; height: 100%; width: 100%; z-index: 3; background-color: rgba(0,0,0,0.5);"></div>');
		}
		
		app.minicartWidget.toggleClass('_hided');
	}

	app.minicartWidget.init = function() {
		app.minicartWidget.triggers.each(function() {
			$(this).click( app.minicartWidget.toggle )
		})
	}
	app.minicartWidget.init();
});