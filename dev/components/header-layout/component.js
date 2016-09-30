$(function(){
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 80 ) {
			$('#headerLayout').addClass('_scrolled');
		} else {
			$('#headerLayout').removeClass('_scrolled');
		}
	});
})