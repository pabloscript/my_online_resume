$(() => {
    // Płynne skrolowanie z odnośników w menu
    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });

    // Akcje dla strzałek góra/dół
    const containerDivs = $(".container").next();
    console.log(containerDivs);
    const upArrow = $("#up");
    console.log(upArrow);
    const downArrow = $("#down");
    console.log(downArrow);

    // downArrow.on("click", () => {
    //     console.log("Down");
    //     for (let i=0; i<containerDivs.length; i++) {
    //         containerDivs.eq(i).hide(700);
    //     }
    // });

    downArrow.click(function() {
        var next;
        next = $(this).parent().find(".container").next();
        console.log(next);
        $('html,body').animate({ scrollTop: next.offset().top
        }, 1000);
    });



    upArrow.on("click", () => {
        console.log("Up");
        $('html, body').animate({
            scrollTop: $(containerDivs.prev()).offset().top
        }, 1000);
    });

    // $(document).scroll(() => {
    //     console.log("Scroll");
    //     containerDivs.slideToggle();
    //     $(this).next(containerDivs).slideToggle();
    // //     $('html, body').animate({
    // //         scrollTop: $(containerDivs.next()).offset().top
    // //     }, 1000);
    // });

    $("#mobile-menu").on("click", () => {
        $("#full-menu").slideToggle(500);
        $("#full-menu").css("display", "flex");
        // $($(this).find("a")).css("color", "white");
    })


})