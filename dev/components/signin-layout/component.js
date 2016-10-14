$(function() {
  window.onresize = refreshSize;

  refreshSize();

  function refreshSize(){
     $('#signinLayout').height( $(window).height() - $("header").height() - $("footer").height() );
	}
});