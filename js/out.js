/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
    // Płynne skrolowanie z odnośników w menu
    $(document).on('click', 'a', function () {
        event.preventDefault();
        $("body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    // Variables and functions for up and down arrows
    var containerDivs = $(".container");
    console.log(containerDivs);
    var upArrow = $("#up");
    var downArrow = $("#down");
    var vheight = $(window).height();

    // Scroll up on up arrow click function:
    var scrollUp = function scrollUp() {
        $('html, body').animate({
            scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight
        }, 500);
    };

    // Scroll down on down arrow click function:
    var scrollDown = function scrollDown() {
        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
        }, 500);
    };

    // Click to scroll down event:
    downArrow.click(function () {
        event.preventDefault();
        scrollDown();
    });

    // Click to scroll up event:
    upArrow.click(function () {
        event.preventDefault();
        scrollUp();
    });

    $(document).scroll(function () {
        console.log("ScrollDown");
        //     var vheight = $(window).height();
        //     $('html, body').animate({
        //         scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
        //     }, 500);
        //
        //
        //
    });

    // Mobile menu show

    var mobileMenuBtn = $("#mobile-menu-button");
    var fullMenuMobile = $("#full-menu-mobile");

    mobileMenuBtn.on("click", function () {
        fullMenuMobile.slideToggle(500);
        fullMenuMobile.css("display", "flex");
    });

    fullMenuMobile.find("a").on("click", function () {
        event.preventDefault();
        fullMenuMobile.slideToggle(710);
    });
});

// Unused code:

//     $('html, body').animate({
//         scrollTop: $(containerDivs.next()).offset().top
//     }, 1000);


// downArrow.click(() => {
//     console.log(counter);
//     $('body').stop().animate({ scrollTop: containerDivs.eq(counter).offset().top
//     }, 700);
//     counter++;
//
//     if (counter === containerDivs.length) {
//         downArrow.hide();
//     } else {
//         downArrow.show();
//     }
// });


// upArrow.on("click", () => {
//     console.log(counter);
//     if (counter === 0) {
//        upArrow.hide();
//     } else {
//         $('body').animate({ scrollTop: containerDivs.eq(counter).offset().top
//         }, 700);
//         counter--;
//         upArrow.show();
//     }
// });

/***/ })
/******/ ]);