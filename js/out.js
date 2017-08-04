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


var _lang = __webpack_require__(1);

$(function () {
    // Smooth scroll to anchors from menu
    $(document).on("click", "a", function () {
        event.preventDefault();
        $("body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 700);
    });

    // Variables and functions for up and down arrows
    var containerDivs = $(".container");
    var upArrow = $("#up");
    var downArrow = $("#down");
    var vheight = $(window).height();

    // Scroll up on up arrow click function:
    var scrollUp = function scrollUp() {
        $('html, body').animate({
            scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight
        }, 400);
    };

    // Scroll down on down arrow click function:
    var scrollDown = function scrollDown() {
        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
        }, 400);
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

    $(window).on("wheel", function (event) {
        var delta = event.originalEvent.deltaY;
        if (delta > 0) {
            scrollDown();
        } else {
            scrollUp();
        }
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

    // Language change
    var plButton = $("#lang").find("#pl");
    var enButton = $("#lang").find("#en");
    var hiText = $("#hi .text");
    var eduText = $("#edu .text");
    var recruitText = $("#recruit .text");
    var copyText = $("#copy .text");
    var devText = $("#dev .text");
    var contactText = $("#contact .text");

    plButton.click(function () {
        hiText.html(_lang.pl[0].text);
        eduText.html(_lang.pl[1].text);
        recruitText.html(_lang.pl[2].text);
        copyText.html(_lang.pl[3].text);
        devText.html(_lang.pl[4].text);
        contactText.html(_lang.pl[5].text);
    });

    enButton.click(function () {
        hiText.html(_lang.en[0].text);
        eduText.html(_lang.en[1].text);
        recruitText.html(_lang.en[2].text);
        copyText.html(_lang.en[3].text);
        devText.html(_lang.en[4].text);
        contactText.html(_lang.en[5].text);
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var pl = [{
    id: "hi",
    text: "Cześć, jestem Paweł. <br><br> Poklikaj sobie, jeśli chcesz się dowiedzieć, jak zostałem programistą front-end."
}, {
    id: "edu",
    text: "Ukończyłem psychologię na Uniwersytecie Warszawskim w 2013 roku."
}, {
    id: "recruit",
    text: "Jeszcze na studiach zacząłem pracę dla jednej z największych firm technologicznych świata, gdzie przez ponad 6 lat rekrutowałem inżynierów."
}, {
    id: "copy",
    text: "Następnie przez ponad rok w tej samej firmie dbałem o jej wizerunek jako specjalista ds. komunikacji, głównie pisząc i redagując teksty po polsku i po angielsku."
}, {
    id: "dev",
    text: "W połowie 2017 roku trafiłem na bootcamp programistyczny w Coders Lab, gdzie - w bardzo intensywny i skondensowany sposób - nauczyłem się: <br><br> HTML, CSS, JavaScript (w tym ES6), jQuery, React."
}, {
    id: "contact",
    text: "Teraz jestem gotowy, żeby dalej rozwijać się jako Front-End Developer i uczyć nowych rzeczy. <br><br> Chcesz się ze mną skontaktować? Nic prostszego!"
}];

var en = [{
    id: "hi",
    text: "Hi, I'm Paweł. <br><br> Click around the website to learn how I managed to become a front-end developer."
}, {
    id: "edu",
    text: "I graduated from the University of Warsaw, faculty of Psychology, in 2013."
}, {
    id: "recruit",
    text: "During my studies I started working for one of the biggest digital industrial companies in the world, where for over 6 years I recruited engineers."
}, {
    id: "copy",
    text: "Then I switched positions within the same company, for over a year becoming a communications specialist, with a main focus on copywriting and proofreading in Polish and English."
}, {
    id: "dev",
    text: "In the mid 2017 I attended a software dev bootcamp at Coders Lab where - in a very intensive and condensed manner - I learned: <br><br> HTML, CSS, JavaScript (including ES6), jQuery, React."
}, {
    id: "contact",
    text: "Now I'm ready to further develop as a developer and learn new things. <br><br> If you wish to contact me - don't hesitate!"
}];

exports.pl = pl;
exports.en = en;

/***/ })
/******/ ]);