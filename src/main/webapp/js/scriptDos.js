jQuery(function () {

    $("button").on("click", function(){
        let id = $(this).attr("id");
        $("#caja").css("background", id);
    })


    /* $("#yelow").on("click", function(){
        $("#caja").css("background", "yellow")
    })
    $("#blue").on("click", function(){
        $("#caja").css("background", "blue")
    })
    $("#red").on("click", function(){
        $("#caja").css("background", "red")
    })
    $("#green").on("click", function(){
        $("#caja").css("background", "green")
    })
    $("#black").on("click", function(){
        $("#caja").css("background", "black")
    }) */
})