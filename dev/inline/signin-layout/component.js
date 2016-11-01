$(function() {
  window.onresize = refreshSize;

  refreshSize();

  function refreshSize() {
  	if ($(window).width() > 768) {
     $('#signinLayout').height( $(window).height() - $("header").height() - $("footer").height() );
  	}
	}
});