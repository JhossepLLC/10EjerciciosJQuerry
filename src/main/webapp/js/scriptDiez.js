$(document).ready(() => {
    $("#exportarExcel").click(function () {
        $("#datos").table2excel({
            // exclude CSS class
            exclude: ".noExl",
            name: "Worksheet Name",
            filename: "SomeFile",
            fileext: ".xls"
        });
    });
});