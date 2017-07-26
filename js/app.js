$(() => {
    // Płynne skrolowanie z odnośników w menu
    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    // Akcje dla strzałek góra/dół
    const containerDivs = $(".container");
    console.log(containerDivs);
    const upArrow = $("#up");
    console.log(upArrow);
    const downArrow = $("#down");
    console.log(downArrow);

    downArrow.on("click", () => {
        console.log("Down");
    });
    upArrow.on("click", () => {
        console.log("Up");
    });

    $('html, body').animate({
        scrollTop: $(containerDivs).offset().top
    }, 1000);

})