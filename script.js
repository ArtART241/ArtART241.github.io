$(document).ready(function () {
    //activating tooltip of element
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

   
});

$("#btnSelect").click(function (e) { 
    
    let select = document.querySelector("select.custom-select")
    let url = select.options[select.selectedIndex].value + " div#answer";


    let selectedUser = select.options[select.selectedIndex].innerHTML;

    document.querySelector("#msgLabel").innerHTML = "Message from user " + "<a href=" + url + "' target='_blank'>" + selectedUser + "</a>";

    $(".modal-body").load(url, function (response, status, request) {
        $(".modal-body>div#answer").attr("id", "");
        $("#msgBox").modal("show");
    });

});
