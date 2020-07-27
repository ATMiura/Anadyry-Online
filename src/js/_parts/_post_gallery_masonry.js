$(document).ready(function () {
	$('.post__list .post__gallery').masonry({
		itemSelector: '.post__list .post__gallery__item',
		columnWidth: 224,
		gutter: 5
	});
});
