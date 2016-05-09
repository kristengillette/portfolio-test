var width = $(window).width();

if(width < 480)
{
   $(".card-img").addClass("card-img-top");
   $(".project-text").removeClass("card-img-overlay");
   $(".card-text").addClass("mobile-card-title");
   $(".card-title").addClass("mobile-card-title");
   $(".card-title").addClass("m-y-1");
   $(".card").css("border", "none");
   $(".card").css("border-radius", "0rem");
   $(".card").css("border-top", "1px solid #818a91");
   $(".card").addClass("p-y-1");
   $(".btn-card").css("visibility", "hidden");
   $(".btn-mobile").css("visibility", "visible");
}
else
{
  $(".portfolio-samples").on("mouseenter", ".card", function() {
    $(this).children(".card-img-overlay").fadeIn();
        $(this).children(".card-img-overlay").css("border", "2px solid #9370db");
        $(this).children(".btn-card").fadeIn();
    });

$(".portfolio-samples").on("mouseleave", ".card", function() {
        $(this).children(".card-img-overlay").fadeOut("fast");
        $(this).children(".btn-card").fadeOut("slow");
    });
   
}

$(window).resize(function() {

console.log("window resized");
width = $(window).width();

if(width < 480)
{
   $(".card-img").addClass("card-img-top");
   $(".project-text").removeClass("card-img-overlay");
   $(".card-text").addClass("mobile-card-title");
   $(".card-title").addClass("mobile-card-title");
   $(".card-title").addClass("m-y-1");
   $(".card").css("border", "none");
   $(".card").css("border-radius", "0rem");
   $(".card").css("border-top", "1px solid #818a91");
   $(".card").addClass("p-y-1");
   $(".btn-card").css("visibility", "hidden");
   $(".btn-mobile").css("visibility", "visible");
} else {
  $(".card-img").removeClass("card-img-top");
   $(".project-text").addClass("card-img-overlay");
   $(".card-text").removeClass("mobile-card-title");
   $(".card-title").removeClass("mobile-card-title");
   $(".card-title").removeClass("m-y-1");
   $(".card").css("border", "1px solid #818a91");
   $(".card").css("border-radius", "0.25rem");
   $(".card").removeClass("p-y-1");
    $(".btn-card").css("visibility", "visible");
   $(".btn-mobile").css("visibility", "hidden");

	$(".portfolio-samples").on("mouseenter", ".card", function() {
    $(this).children(".card-img-overlay").fadeIn();
        $(this).children(".card-img-overlay").css("border", "2px solid #9370db");
        $(this).children(".btn-card").fadeIn();
    });

$(".portfolio-samples").on("mouseleave", ".card", function() {
        $(this).children(".card-img-overlay").fadeOut("fast");
        $(this).children(".btn-card").fadeOut("fast");
    });
   
}

});
