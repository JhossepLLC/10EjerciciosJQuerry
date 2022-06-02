jQuery(function () {

    $("#top").on("click", function () {
        const y = parseInt($("#caja-child").css("top"));

        if (y - 20 > 0) {
            $("#caja-child").css("top", y - 20);
        }else{
            $("#caja-child").css("top", 0);
        }
        
    })

    $("#right").on("click", function () {
        const x = parseInt($("#caja-child").css("left"));
        const parentWidth = parseInt($("#caja").innerWidth());
        const childWidth = parseInt($("#caja-child").innerWidth())

        if ((x + 20) < (parentWidth - childWidth)) {
            $("#caja-child").css("left", x+20);
        } else{
            $("#caja-child").css("left", (parentWidth - childWidth));
        }
    })


    $("#bottom").on("click", function () {
        const y = parseInt($("#caja-child").css("top"));
        const parentHeight = parseInt($("#caja").innerHeight());
        const childHeight = parseInt($("#caja-child").innerHeight())

        if ((y + 20) < (parentHeight - childHeight)) {
            $("#caja-child").css("top", y+20);
        } else{
            $("#caja-child").css("top", (parentHeight - childHeight));
        }
    })


    $("#left").on("click", function () {
        const x = parseInt($("#caja-child").css("left"));

        if (x - 20 > 0) {
            $("#caja-child").css("left", x - 20);
        }else{
            $("#caja-child").css("left", 0);
        }
    })
})