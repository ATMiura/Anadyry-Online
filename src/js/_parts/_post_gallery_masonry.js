import Masonry from '../../../node_modules/masonry-layout/dist/masonry.pkgd.min.js';

$(document).ready(function () {
	//$('.post__list .post__gallery').masonry({
	//	itemSelector: '.post__list .post__gallery__item',
	//	columnWidth: 224,
	//	gutter: 5
	//});
	var msnry = new Masonry( '.post__list .post__gallery', {
		itemSelector: '.post__list .post__gallery__item',
		columnWidth: 224,
		gutter: 5
	});
});
