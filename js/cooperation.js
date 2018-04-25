//导航划过效果
$(".top-nav").delegate("li","mouseenter",function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".top-nav").on("mouseleave",function(){
	$(this).find("li:eq(3)").addClass("active").siblings().removeClass("active");
})
//底部划过效果
$(".patner a").on("mouseenter mouseleave",function(e){
	var type = e.type;
	var index = $(this).index();
	if(index==0){
		if(type == "mouseenter"){
			$(".patner a:eq(0) img").attr("src","../img/tengxunlight.png");
		}else if(type == "mouseleave"){
			$(".patner a:eq(0) img").attr("src","../img/tengxun.png");
		}
	}
	if(index==1){
		if(type == "mouseenter"){
			$(".patner a:eq(1) img").attr("src","../img/yamaxunlight.png");
		}else if(type == "mouseleave"){
			$(".patner a:eq(1) img").attr("src","../img/yamaxun.png");
		}
	}
	if(index==2){
		if(type == "mouseenter"){
			$(".patner a:eq(2) img").attr("src","../img/360light.png");
		}else if(type == "mouseleave"){
			$(".patner a:eq(2) img").attr("src","../img/360.png");
		}
	}
	if(index==3){
		if(type == "mouseenter"){
			$(".patner a:eq(3) img").attr("src","../img/taobaolight.png");
		}else if(type == "mouseleave"){
			$(".patner a:eq(3) img").attr("src","../img/taobao.png");
		}
	}
	if(index==4){
		if(type == "mouseenter"){
			$(".patner a:eq(4) img").attr("src","../img/wangyilight.png");
		}else if(type == "mouseleave"){
			$(".patner a:eq(4) img").attr("src","../img/wangyi.png");
		}
	}
	if(index==5){
		if(type == "mouseenter"){
			$(".patner a:eq(5) img").attr("src","../img/huaweilight.png");
		}else if(type == "mouseleave"){
			$(".patner a:eq(5) img").attr("src","../img/huawei.png");
		}
	}
})
