//导航划过效果
$(".top-nav").delegate("li","mouseenter",function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".top-nav").on("mouseleave",function(){
	$(this).find("li:eq(1)").addClass("active").siblings().removeClass("active");
})
//视频划过效果
$(".mask").on("mouseenter mouseleave",function(e){
	var type = e.type;
	if(type == "mouseenter"){
		$(this).find("img").eq(0).attr("src","../img/playhover.png");
	}else if(type == "mouseleave"){
		$(this).find("img").eq(0).attr("src","../img/play.png");
	}
})
$(".mask").on("click",function(){
	var index = $(this).parents("li").index();
//	$("body").find(".video-box").remove()
	window.location.href ="videoPlay.html?id="+index+"";
//	$(".footer").before(html);
//	$("body").addClass("over-hidden");
//	$(".cancel").click(function(){
//		$(".videoplayer").remove();
//		$("body").removeClass("over-hidden");
//	})
})
//点击直播间跳转直播页面
$(function(){
	var liveAnchorTx = ["豆豆","小雅","CICI"];
	var livedUrl = "http://hd.app.live.cread.com/external/website/lived.json";
	var liveUrl = "http://hd.app.live.cread.com/external/website/living.json";
		$.ajax({
			url:liveUrl,
			type:"POST",
			data:{},
			success:function(data){
				// console.log(data)
				var liveHtml = '';
				var repairLiveHtml = '';
				var nullHtml = '';
				var liveJson = data.data.videoList;
				
				if(liveJson == '' || liveJson == null || liveJson == "undefined" || liveJson == {}){
					for(var j=0;j<3;j++){
						nullHtml += '<li class="float-l mar-lr mar-b" name="repair">'
							+'<div class="video" style="background: url(../img/repair/repair-'+[j]+'.jpg) no-repeat center center;background-size: 100%;">'
							+'<div class="live-mask">'
							+'<img src="../img/play.png" alt="" />'
							+'<p class="video-name">'+liveAnchorTx[j]+'</p>'
							+'</div></div>'
							+'<h3><img src="../img/repair/repair-head-'+[j]+'.jpg"/><span class="anchor-name">'+liveAnchorTx[j]+'</span></h3>'
							+'</li>'
					}
					$("#live-box>ul").html(nullHtml);
				}else{
					for(var i=0;i<liveJson.length;i++){
						liveHtml += '<li class="float-l mar-lr mar-b" name="toLive">'
							+'<div class="video" style="background: url('+liveJson[i].coverImg+') no-repeat center center;background-size: 100%;">'
							+'<div class="live-mask">'
							+'<img src="../img/play.png" alt="" />'
							+'<img src="../img/signIn/main_tab_living_status_living.png" class="is-live"/>'
							+'<p class="video-name">'+liveJson[i].videoName+'</p>'
							+'</div></div>'
							+'<h3><img src="'+liveJson[i].coverImg+'"/><span class="anchor-name"></span>'+liveJson[i].anchorName+'</h3>'
							+'</li>'
					}
					for(var j=0;j<(3-liveJson.length);j++){
						repairLiveHtml += '<li class="float-l mar-lr mar-b"  name="repair">'
							+'<div class="video" style="background: url(../img/repair/repair-'+[j]+'.jpg) no-repeat center center;background-size: 100%;">'
							+'<div class="live-mask">'
							+'<img src="../img/play.png" alt="" />'
							+'<p class="video-name">'+liveAnchorTx[j]+'</p>'
							+'</div></div>'
							+'<h3><img src="../img/repair/repair-head-'+[j]+'.jpg"/><span class="anchor-name">'+liveAnchorTx[j]+'</span></h3>'
							+'</li>'
					}
					liveHtml += repairLiveHtml;
					$("#live-box>ul").html(liveHtml);
			}
				}
		})
//		console.log($(".video-name").length)
//		console.log($(".is-live").length)
//	$(".live-mask").on("click",function(){
//		var index = $(this).parents("li").index();
//	
//	
//	
//	})
//点击补充li
	$("#live-box>ul").delegate('[name="repair"]','click',function(){
		$(".live-repair").show();
		$(".login-box").show();
	})
	// $("#live-box>ul").delegate('[name="toLive"]','click',function(){
	$("#live-box>ul").delegate('[name="toLive"]','click',function(){
		var LivingIndex = $(this).index();
		if(getcookie("isSign")){
			window.location.href ="videoLive.html?id="+LivingIndex+"";
		}else{
			$(".login-box-frame").show();
			$(".login-box").show();
		}
		
	})
})