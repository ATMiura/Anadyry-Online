$(document).ready(function () {
	$('.post__cinema__sessions__item__time').each(function () {
		var pcsit = $(this).find('.post__cinema__sessions__item__time__item').length;
		if(pcsit > 4){
			$(this).addClass('is-overflow');
		}
	});
});
