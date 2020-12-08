$(window).on('load', function () {
	/* проверяет все блоки с data-move и перемещает в блоки в мобилке/десктопе на основе их атрибутов */
	if ($(window).width() < 768) {
		$('[data-move]').each(function () {
			var dataMoveAttr = $(this).data('move');
			$('[data-mobile="' + dataMoveAttr + '"]').addClass(dataMoveAttr);
			$(this).prependTo('[data-mobile="' + dataMoveAttr + '"]');
		});
	} else if ($(window).width() > 767) {
		$('[data-move]').each(function () {
			var dataMoveAttr = $(this).data('move');

			$(this).prependTo('[data-desktop="' + dataMoveAttr + '"]');
		});
	}
});
