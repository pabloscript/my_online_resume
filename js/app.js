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

    downArrow.click(() => {
        $('html,body').animate({ scrollTop: containerDivs.next().offset().top
        }, 1000);
    });

    upArrow.on("click", () => {
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
    })

})