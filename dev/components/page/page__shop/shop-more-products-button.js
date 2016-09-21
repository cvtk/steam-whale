$('#shopMoreProductsButton').click(function() {
	$.post('/', $(this).data(), function(response) {
		$response = $(response);
		$response.appendTo('#shopProducts').hide().fadeIn(2000);
		$('html, body').animate({
        scrollTop: $response.first().offset().top - 81
    }, 2000);
	})
	$(this).data()['offset'] += 12;
});
