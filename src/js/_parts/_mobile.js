$(document).on('click touch', '[data-mobile-nav]:not([data-mobile-nav="post-create"])', function () {

	let dataMobileNav = $(this).data('mobile-nav');

	if($('[data-mobile-nav="'+dataMobileNav+'"]').hasClass('active')){
		$('body').removeClass('overflow');
		$(this).removeClass('active');
		$('.mobile-content').removeClass('active');
	} else {
		$('body').addClass('overflow');
		$(this).addClass('active');

		$('.mobile-content').addClass('active');
	}


	$('.mobile-item[data-mobile]').removeClass('active');
	$('.mobile-item[data-mobile="'+dataMobileNav+'"]').toggleClass('active');
});
