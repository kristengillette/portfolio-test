
$(".portfolio-samples").on("mouseenter", ".card", function() {
        $(this).children(".card-img-overlay").css("visibility", "visible");
    });

$(".portfolio-samples").on("mouseleave", ".card", function() {
        $(this).children(".card-img-overlay").css("visibility", "hidden");
    });

// $(".card").mouseenter(function(){
// 	$(".card-img-overlay").css("display","block");
// })

// $(".card").mouseleave(function(){
// 	$(".card-img-overlay").css("display","none");
// })