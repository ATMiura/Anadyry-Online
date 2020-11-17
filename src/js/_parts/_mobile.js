$(document).on('click touch', '[data-mobile-nav]', function () {
	$('body').toggleClass('overflow');
	$(this).parents('.mobile').find('.mobile-content').toggleClass('active');
});
