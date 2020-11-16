$(document).ready(function () {
	$(document).on('click touch', '.chat', function () {
		$('body').toggleClass('overflow');
		$(this).toggleClass('active');
		$('.chat-box').toggleClass('active');
	});


});

$(window).on('load resize', function () {
	var halfContentWidth = $('.content').outerWidth()/2;
	$('.chat').css({
		'left': 'calc(50% + 100px + ' + halfContentWidth + 'px)'
	});
});
