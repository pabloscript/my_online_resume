import {en} from "./lang.js";
import {pl} from "./lang.js";
import {enMenu} from "./lang.js";
import {plMenu} from "./lang.js";

$(() => {

    // Smooth scroll to anchors from menu:
    $(document).on('click', 'a[href^="#"]', function() {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    // Variables for up and down arrows events:
    const containerDivs = $(".container");
    const upArrow = $("#up");
    const downArrow = $("#down");
    const vheight = $(window).height();

    // Scroll up to previous container function:
    const scrollUp = () => {
        $('html, body').animate({
            scrollTop: (Math.ceil($(window).scrollTop() / vheight)-1) * vheight
        }, 400);
    };

    // Scroll down to next container function:
    const scrollDown = () => {
        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
        }, 400);
    };

    // Down arrow click event for scrolling down:
    downArrow.click(() => {
        event.preventDefault();
        scrollDown();
    });

    // Up arrow click event for scrolling up:
    upArrow.click(() => {
        event.preventDefault();
        scrollUp();
    });

    // Smooth scroll through viewport on mouse wheel scrolling (temporarily turned off, because it hangs up the browser)
    // $(window).on("wheel", (event) => {
    //     let delta = event.originalEvent.deltaY;
    //     if (delta > 0) {
    //         scrollDown();
    //     }
    //     else {
    //         scrollUp();
    //     }
    // });

    // Mobile menu show
    const mobileMenuBtn = $("#mobile-menu-button");
    const fullMenuMobile = $("#full-menu-mobile");

    mobileMenuBtn.on("click", () => {
        fullMenuMobile.slideToggle(500);
        fullMenuMobile.css("display", "flex");
    });

    fullMenuMobile.find("a").on("click", () => {
        event.preventDefault();
        fullMenuMobile.slideToggle(710);
    });

    // Language change
    const plButton = $("#lang").find("#pl");
    const enButton = $("#lang").find("#en");    
    const text = $(".text");
    const nav = $("#full-menu a");
    const navMobile = $("#full-menu-mobile a");

    plButton.click(() => {        
        text.each(function(i) {
            $(this).html(pl[i]);
        });        
        nav.each(function(i) {
            $(this).text(plMenu[i]);
        });
        navMobile.each(function(i) {
            $(this).text(plMenu[i]);
        });
    });

    enButton.click(() => {        
        text.each(function(i) {
            $(this).html(en[i]);
        });    
        nav.each(function(i) {
            $(this).text(enMenu[i]);
        });
        navMobile.each(function(i) {
            $(this).text(enMenu[i]);
        });
    });
      
});