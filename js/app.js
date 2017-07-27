$(() => {
    // Płynne skrolowanie z odnośników w menu

    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    // Akcje dla strzałek góra/dół
    const containerDivs = $(".container");
    console.log(containerDivs);
    const upArrow = $("#up");
    const downArrow = $("#down");
    let counter = 1;

    downArrow.click(() => {
        console.log(counter);
        $('body').animate({ scrollTop: containerDivs.eq(counter).offset().top
        }, 700);
        counter++;

        if (counter === containerDivs.length) {
            downArrow.hide();
        } else {
            downArrow.show();
        }
    });


    upArrow.on("click", () => {
        console.log(counter);
        if (counter === 0) {
           upArrow.hide();
        } else {
            $('body').animate({ scrollTop: containerDivs.eq(counter).offset().top
            }, 700);
            counter--;
            upArrow.show();
        }
    });

    // $(document).scroll(() => {
    //     console.log("ScrollDown");
    //     var vheight = $(window).height();
    //     $('html, body').animate({
    //         scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
    //     }, 500);
    //
    //
    //
    // });


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


//     $('html, body').animate({
//         scrollTop: $(containerDivs.next()).offset().top
//     }, 1000);