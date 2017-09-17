import {en} from "./lang.js";
import {pl} from "./lang.js";

$(() => {
    // Smooth scroll to anchors from menu
    $(document).on("click", "a", function() {
        event.preventDefault();
        $("body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 700);
    });

    // Variables and functions for up and down arrows
    const containerDivs = $(".container");
    const upArrow = $("#up");
    const downArrow = $("#down");
    const vheight = $(window).height();

    // Scroll up on up arrow click function:
    const scrollUp = () => {
        $('html, body').animate({
            scrollTop: (Math.ceil($(window).scrollTop() / vheight)-1) * vheight
        }, 400);
    };

    // Scroll down on down arrow click function:
    const scrollDown = () => {
        $('html, body').animate({
            scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
        }, 400);
    };

    // Click to scroll down event:
    downArrow.click(() => {
        event.preventDefault();
        scrollDown();
    });

    // Click to scroll up event:
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
    const hiText = $("#hi .text");
    const eduText = $("#edu .text");
    const recruitText = $("#recruit .text");
    const copyText = $("#copy .text");
    const devText = $("#dev .text");
    const contactText = $("#contact .text");

    plButton.click(() => {
        hiText.html(pl[0]);
        eduText.html(pl[1]);
        recruitText.html(pl[2]);
        copyText.html(pl[3]);
        devText.html(pl[4]);
        contactText.html(pl[5]);
    });

    enButton.click(() => {
        hiText.html(en[0]);
        eduText.html(en[1]);
        recruitText.html(en[2]);
        copyText.html(en[3]);
        devText.html(en[4]);
        contactText.html(en[5]);
    });

});