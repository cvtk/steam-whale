$(function() {
	if ( $(window).width() < 768 ) {
		widgetWidth = $('#vkWidget').parent().width();
	} else {
		widgetWidth = $('#vkWidget').parent().width() / 3;
	}
	

	VK.Widgets.Group("vkWidget", {mode: 3, width: widgetWidth, color1: 'EEEEEE', color2: '282828', color3: 'DC9814'}, 130533570);
})