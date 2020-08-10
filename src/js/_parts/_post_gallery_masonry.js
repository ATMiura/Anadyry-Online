import masonry from '../../../node_modules/masonry-layout/dist/masonry.pkgd.min.js';

$(document).ready(function () {
	$('.post__list .post__gallery').masonry({
		itemSelector: '.post__list .post__gallery__item',
		columnWidth: 224,
		gutter: 5
	});
});
