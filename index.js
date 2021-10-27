$(document).ready(function(){
	$('.icons').slick({
		//Basic settings
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		swipeToSlide: true,
		touchMove: true,
		ltr: true,
		infinite: true,
		variableWidth: true,
		dots: false,
		pauseOnHover: false
	});
});

$(".langswitcher a").on("click",function(e){
    e.preventDefault();
    $(".langswitcher li").toggle("active");
    $("html").attr("lang",$(this).data("lang"));
});