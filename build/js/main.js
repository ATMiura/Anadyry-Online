/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_parts/_chat.js":
/*!********************************!*\
  !*** ./src/js/_parts/_chat.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $(document).on('click touch', '.chat', function () {
    $('body').toggleClass('overflow');
    $(this).toggleClass('active');
    $('.chat-box').toggleClass('active');
  });
});
$(window).on('load resize', function () {
  var halfContentWidth = $('.content').outerWidth() / 2;
  $('.chat').css({
    'left': 'calc(50% + 100px + ' + halfContentWidth + 'px)'
  });
});

/***/ }),

/***/ "./src/js/_parts/_dropdown.js":
/*!************************************!*\
  !*** ./src/js/_parts/_dropdown.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).on('click', '.dropdown__label', function () {
  $(this).parents('.dropdown').toggleClass('is-open');
}).on('click', '.dropdown__item', function () {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).parents('.dropdown').find('.dropdown__label').text($(this).text());
  $(this).parents('.dropdown').toggleClass('is-open');
  $(this).parents('.dropdown').find('.dropdown__value').val($(this).data('value'));
  $(this).parents('.dropdown').addClass('is-valid');
});

/***/ }),

/***/ "./src/js/_parts/_mobileReplace.js":
/*!*****************************************!*\
  !*** ./src/js/_parts/_mobileReplace.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(window).on('load resize', function () {
  /* проверяет все блоки с data-move и перемещает в блоки в мобилке/десктопе на основе их атрибутов */
  if ($(window).width() < 768) {
    $('[data-move]').each(function () {
      var dataMoveAttr = $(this).data('move');
      $(this).prependTo('[data-mobile="' + dataMoveAttr + '"]');
    });
  } else if ($(window).width() > 767) {
    $('[data-move]').each(function () {
      var dataMoveAttr = $(this).data('move');
      $(this).prependTo('[data-desktop="' + dataMoveAttr + '"]');
    });
  }
});

/***/ }),

/***/ "./src/js/_parts/_post_gallery_masonry.js":
/*!************************************************!*\
  !*** ./src/js/_parts/_post_gallery_masonry.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_masonry_layout_dist_masonry_pkgd_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/masonry-layout/dist/masonry.pkgd.min.js */ "./node_modules/masonry-layout/dist/masonry.pkgd.min.js");
/* harmony import */ var _node_modules_masonry_layout_dist_masonry_pkgd_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_masonry_layout_dist_masonry_pkgd_min_js__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  //$('.post__list .post__gallery').masonry({
  //	itemSelector: '.post__list .post__gallery__item',
  //	columnWidth: 224,
  //	gutter: 5
  //});
  var msnry = new _node_modules_masonry_layout_dist_masonry_pkgd_min_js__WEBPACK_IMPORTED_MODULE_0___default.a('.post__list .post__gallery', {
    itemSelector: '.post__list .post__gallery__item',
    columnWidth: 224,
    gutter: 5
  });
});

/***/ }),

/***/ "./src/js/_parts/_post_sessions_time__if__overflow.js":
/*!************************************************************!*\
  !*** ./src/js/_parts/_post_sessions_time__if__overflow.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.post__cinema__sessions__item__time').each(function () {
    var pcsit = $(this).find('.post__cinema__sessions__item__time__item').length;

    if (pcsit > 4) {
      $(this).addClass('is-overflow');
    }
  });
});

/***/ }),

/***/ "./src/js/_parts/_swiper.js":
/*!**********************************!*\
  !*** ./src/js/_parts/_swiper.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_swiper_dist_js_swiper_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/swiper/dist/js/swiper.min.js */ "./node_modules/swiper/dist/js/swiper.min.js");
/* harmony import */ var _node_modules_swiper_dist_js_swiper_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_dist_js_swiper_min_js__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  var galleryThumbs = new _node_modules_swiper_dist_js_swiper_min_js__WEBPACK_IMPORTED_MODULE_0___default.a('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    //freeMode: true,
    loopedSlides: 3,
    //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });
  var totalSlides_half = $('.gallery-thumbs .swiper-slide:not(.swiper-slide-duplicate)').length;
  var galleryTop = new _node_modules_swiper_dist_js_swiper_min_js__WEBPACK_IMPORTED_MODULE_0___default.a('.gallery-top', {
    spaceBetween: 0,
    loop: true,
    loopedSlides: totalSlides_half,
    //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  var totalSlides = $('.gallery-top .swiper-slide:not(.swiper-slide-duplicate)').length;
  $('#swiper-total').html(totalSlides + ' фото');
});

/***/ }),

/***/ "./src/js/_parts/_user_avatar_border_color.js":
/*!****************************************************!*\
  !*** ./src/js/_parts/_user_avatar_border_color.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.like__user__list').each(function () {
    var data_color = $(this).parents('.post__item').data('color');
    $(this).find('.user-avatar').css({
      'border-color': data_color
    });
  });
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _parts_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_parts/_dropdown */ "./src/js/_parts/_dropdown.js");
/* harmony import */ var _parts_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parts_user_avatar_border_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_parts/_user_avatar_border_color */ "./src/js/_parts/_user_avatar_border_color.js");
/* harmony import */ var _parts_user_avatar_border_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parts_user_avatar_border_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parts_post_sessions_time_if_overflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_parts/_post_sessions_time__if__overflow */ "./src/js/_parts/_post_sessions_time__if__overflow.js");
/* harmony import */ var _parts_post_sessions_time_if_overflow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parts_post_sessions_time_if_overflow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parts_post_gallery_masonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_parts/_post_gallery_masonry */ "./src/js/_parts/_post_gallery_masonry.js");
/* harmony import */ var _parts_swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_parts/_swiper */ "./src/js/_parts/_swiper.js");
/* harmony import */ var _parts_chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_parts/_chat */ "./src/js/_parts/_chat.js");
/* harmony import */ var _parts_chat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_parts_chat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_mobileReplace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_parts/_mobileReplace */ "./src/js/_parts/_mobileReplace.js");
/* harmony import */ var _parts_mobileReplace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_parts_mobileReplace__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);
 //import disableBodyScroll from './_vendor/disableBodyScroll';
//import './_vendor/masked-input';
//import './_vendor/jquery-formstyler';
//import '../../../node_modules/masonry-layout/dist/masonry.pkgd.min.js';

svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()(); //window.disableBodyScroll = disableBodyScroll;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map