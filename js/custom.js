$(function () {
    "use strict";


    $("#sec-3").click(function () {
        $("#sec-3")
            .animate({
                top: '700px'
            });

        setTimeout(function () {
            $("#sec-3").addClass("showUp")
        }, 300);
    });


    $("#sec-2").click(function () {
        $("#sec-3").animate({
            top: '0'
        });

        setTimeout(function () {
            $("#sec-3").removeClass("showUp")
        }, 100);
    });

    //
    $("mark").mouseenter(function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0)");
    });

    $("mark").mouseleave(function () {
        $(this).css("background-color", "rgba(0, 0, 0, 1)");
    });

    //
    $("#misunderstand").click(function () {
        $("#sec-4 div").removeClass("show");
        $("#misunderstandDiv").addClass("show");
        $("#sec-4 h3 span").removeClass("redBorder");
        $("#misunderstand span").addClass("redBorder");
    });


    $("#resist").click(function () {
        $("#sec-4 div").removeClass("show");
        $("#resistDiv").addClass("show");
        $("#sec-4 h3 span").removeClass("redBorder");
        $("#resist span").addClass("redBorder");

    });

    $("#concern").click(function () {
        $("#sec-4 div").removeClass("show");
        $("#concernDiv").addClass("show");
        $("#sec-4 h3 span").removeClass("redBorder");
        $("#concern span").addClass("redBorder");

    });



    $("#report-btn").click(function () {
        $("#report").show();
    });

    $("#report").click(function () {
        $("#report").hide();
    });

    $("#game-btn").click(function () {
        $("#game").show();
    });

    $("#game").click(function () {
        $("#game").hide();
    });

    $("#barchart-btn").click(function () {
        $("#barchart").show();
    });

    $("#barchart").click(function () {
        $("#barchart").hide();
    });

    $("#c1").click(function () {
        $("#c1").attr("src", "images/pie2.png");
    });

    $("#c2").click(function () {
        $("#c2").attr("src", "images/pie3.png");
    });

    $("#c3").click(function () {
        $("#c3").attr("src", "images/pie4.png");
    });

    $("#c4").click(function () {
        $("#c4").attr("src", "images/pie5.png");
    });

    $("#scene").parallax();
});
