app.slider= {};

$('#pageSlider').each(function(){
    (function($set){
        setInterval(function(){
          var $cur = $set.find('.page-slider--active')
          .removeClass('page-slider--active')
          .addClass('page-slider--out');

          var $next = $cur.next().length?$cur.next():$set.children().eq(0);
          $next.removeClass('page-slider--out')
          .addClass('page-slider--active');
        },5000);
    })($(this));
});