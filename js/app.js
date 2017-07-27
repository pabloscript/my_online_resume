$(() => {
    // Płynne skrolowanie z odnośników w menu
    $(document).on('click', 'a', function() {
        event.preventDefault();
        $("body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    // Variables and functions for up and down arrows
    const containerDivs = $(".container");
    console.log(containerDivs);
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

    $(window).on('wheel', (event) => {
        let delta = event.originalEvent.deltaY;
        if (delta > 0) {
            scrollDown();
        }
        else {
            scrollUp();
        }
    });


    // Mobile menu show

    const mobileMenuBtn = $("#mobile-menu-button");
    const fullMenuMobile = $("#full-menu-mobile");

    mobileMenuBtn.on("click", () => {
        fullMenuMobile.slideToggle(500);
        fullMenuMobile.css("display", "flex");
    })

    fullMenuMobile.find("a").on("click", () => {
        event.preventDefault();
        fullMenuMobile.slideToggle(710);
    });

})

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

// $('html, body').animate({
//     scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
// }, 500);