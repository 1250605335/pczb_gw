$(".top-nav").delegate("li","mouseenter",function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".top-nav").on("mouseleave",function(){
	$(this).find("li:eq(2)").addClass("active").siblings().removeClass("active");
})