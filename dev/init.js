$(function() {
  window.onresize = refreshSize;

  refreshSize();

  function refreshSize() {
  	var contentHeight = $(window).height() - $("header").height() - $("footer").height();
  	if ( $('main').height() < contentHeight ) {
    	$('main').height( contentHeight );
  	}
	}
});

var app = {};