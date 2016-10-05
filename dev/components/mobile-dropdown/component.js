$(function() {
	app.mobileDropdown = $('#mobileDropdown'); 
	app.mobileDropdown.triggers = $("[data-mobile-dropdown-trigger]");

	app.mobileDropdown.toggle = function() {
		app.mobileDropdown.toggleClass('_hidden');
		return false;
	}

	app.mobileDropdown.init = function() {
		app.mobileDropdown.triggers.each(function() {
			$(this).click( app.mobileDropdown.toggle )
		})
	}
	app.mobileDropdown.init();
});