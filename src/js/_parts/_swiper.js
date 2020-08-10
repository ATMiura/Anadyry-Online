import Swiper from '../../../node_modules/swiper/dist/js/swiper.min.js';

$(document).ready(function () {
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 3,
		loop: true,
		//freeMode: true,
		loopedSlides: 3, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	var totalSlides_half = $('.gallery-thumbs .swiper-slide:not(.swiper-slide-duplicate)').length;

	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 0,
		loop: true,
		loopedSlides: totalSlides_half, //looped slides should be the same
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	var totalSlides = $('.gallery-top .swiper-slide:not(.swiper-slide-duplicate)').length;
	$('#swiper-total').html(totalSlides + ' фото');

});
