$(document).ready(function () {
    $('#button').click(function () {
        callBack($('#textarea').val());
    });
});

function callBack(text) {
    $.post({
        url: "/",
        data: {text: text},
        success: function (data) {
            console.log("Success");
        },
        fail: function () {
            console.log("Fail");
        },
        dataType: "json"
    });
}




