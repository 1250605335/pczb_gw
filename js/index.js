//导航划过效果
$(".top-nav").delegate("li","mouseenter",function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".top-nav").on("mouseleave",function(){
	$(this).find("li:eq(0)").addClass("active").siblings().removeClass("active");
})
//左侧动画效果
$(".android").addClass("ani2");
$(".down-box").delegate(".ani-control","mouseenter",function(){
	var index = $(this).index();
	if( index == 0 ){
		$(".code").removeClass("lazy ani1");
		$(".android").addClass("lazy ani2");	
	}
	if( index == 2 ){
		$(".android").removeClass("lazy ani2");
		$(".code").addClass("lazy ani1");
	}
})
$(".code-scan").on("mouseenter",function(){
	$(this).find("img").attr("src","./img/codeHover.png");
})
$(".code-scan").on("mouseleave",function(){
	$(this).find("img").attr("src","./img/codeDefault.png");
})
$(".android-Phone").on("mouseenter",function(){
	$(this).find("img").attr("src","./img/androidhover.png");
})
$(".android-Phone").on("mouseleave",function(){
	$(this).find("img").attr("src","./img/android.png");
})
//登录部分
$(".signIn-img").click(function(){
	
})
