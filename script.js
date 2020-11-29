$(document).ready(function () {
    //activating tooltip of element
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    // Var for saving the answer
    let ans = document.createElement("div");

});

$("#btnSelect").click(function (e) { 
    
    let select = document.querySelector("select.custom-select")
    let url = select.options[select.selectedIndex].value + " div#answer";

    $(".modal-body").load(url, function (response, status, request) {
        $(".modal-body>div#answer").attr("id", "");
    });

});
