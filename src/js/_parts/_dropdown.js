$(document).on('click', '.dropdown__label',function () {
	$(this).parents('.dropdown').toggleClass('is-open');
}).on('click','.dropdown__item',function () {
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$(this).parents('.dropdown').find('.dropdown__label').text($(this).text());
	$(this).parents('.dropdown').toggleClass('is-open');
	$(this).parents('.dropdown').find('.dropdown__value').val($(this).data('value'));
});
