$(function() {
	$('[data-form-toggle]').click(function() {
		$self = $(this).parent();
		$self.slideToggle(100);
		$('form').not($self).slideToggle(100);

	})
})