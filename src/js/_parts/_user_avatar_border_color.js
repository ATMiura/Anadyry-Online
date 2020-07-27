$(document).ready(function () {
	$('.like__user__list').each(function () {
		var data_color = $(this).parents('.post__item').data('color');
		$(this).find('.user-avatar').css({'border-color':data_color});
	});
});
