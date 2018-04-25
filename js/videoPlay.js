$(function(){
	//导航划过效果
	$(".top-nav").delegate("li","mouseenter",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".top-nav").on("mouseleave",function(){
		$(this).find("li:eq(1)").addClass("active").siblings().removeClass("active");
	})
	//视频列表
	var videos = [
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/chengzi.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/wangmingyue.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/miumiu.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/heqiang.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/zhangjingjing.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/sunjingxue.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/lvliang.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/liyan.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/guoxuelong.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/mibaobao.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/gaoyang.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/zhaiguosheng.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/wangzhongxu.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/yangzhongyong.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/liurui.mp4'
	]
	var anchors = [
		{videoName:"橙子",userName:"橙子",liveNum:"17000402",videoNum:"292",sex:"0",fansNum:9343,notice:"一首《嘀嗒》送给大家~"},
		{videoName:"忆安一默默",userName:"忆安一默默",liveNum:"17000597",videoNum:"180",sex:"0",fansNum:735,notice:"《小酒窝》长睫毛，是你最美的记号"},
		{videoName:"缪缪",userName:"缪缪",liveNum:"17000206",videoNum:"405",sex:"0",fansNum:11555,notice:"缪缪的《天空之城》"},
		{videoName:"浅蓝",userName:"浅蓝",liveNum:"18000704",videoNum:"123",sex:"1",fansNum:323,notice:"尤克里里版《梁祝》好听吗"},
		{videoName:"糖果",userName:"糖果",liveNum:"18000718",videoNum:"33",sex:"0",fansNum:123,notice:"给大家口琴演奏《欢乐颂》里的《小星星》"},
		{videoName:"巅峰小雪",userName:"巅峰小雪",liveNum:"18000740",videoNum:"75",sex:"0",fansNum:475,notice:"闺蜜出国《送别》她"},
		{videoName:"池墨羽",userName:"池墨羽",liveNum:"18000689",videoNum:"19",sex:"1",fansNum:3868,notice:"我说我能吹，不是盖的"},
		{videoName:"娜娜",userName:"娜娜",liveNum:"17000391",videoNum:"35",sex:"0",fansNum:589,notice:"《牧羊曲》送给大家"},
		{videoName:"wendy",userName:"wendy",liveNum:"17000517",videoNum:"8",sex:"1",fansNum:190,notice:"一个笛痴"},
		{videoName:"聚星秘宝宝",userName:"聚星秘宝宝",liveNum:"17000335",videoNum:"27",sex:"0",fansNum:9564,notice:"尤克里里《好想你》"},
		{videoName:"超人不会肥",userName:"超人不会肥",liveNum:"17000524",videoNum:"185",sex:"1",fansNum:444,notice:"《友谊地久天长》所以超人不会肥"},
		{videoName:"飞林",userName:"飞林",liveNum:"17000400",videoNum:"33",sex:"1",fansNum:1167,notice:"《你问我爱你有多深》尤克里里"},
		
		{videoName:"喵先森",userName:"喵先森",liveNum:"17000408",videoNum:"68",sex:"1",fansNum:876,notice:"吉他《董小姐》送给你"},
		{videoName:"是你果哥儿",userName:"是你果哥儿",liveNum:"17000259",videoNum:"26",sex:"1",fansNum:374,notice:"喜欢我们的音乐吗？"},
		{videoName:"小苹果",userName:"小苹果",liveNum:"18000666",videoNum:"36",sex:"1",fansNum:1038,notice:"竖笛《三生三世十里桃花》"}
	]
	//抓取URL地址里传过来的index
		var oUrl = window.location.href.split('?')[1];
		var index = oUrl.split("=")[1];
		console.log(index)
		//性别图标
		if(anchors[index].sex == '0'){
			var sexImg = '<img src="../img/2018-3-2/Woman.png" class="sex-img">'
		}else{
			var sexImg = '<img src="../img/2018-3-2/Man.png" class="sex-img">'
		}
		
		var html = '<div class="videoplayer"><ul><a href="brilliantvideo.html">精彩视频</a><span>>> '+anchors[index].videoName+'</span></ul><div class="player-box">'
				 + '<div id="a1"></div></div>'
				 +'<div class="anchorData-box">'
				 +'<h1><img src="../img/newAnchor/anchor-head-'+(index)+'.png" class="anchor-head-img"><span>'+anchors[index].userName+sexImg+'</span><font>直播间号:'+anchors[index].liveNum+'</font></h1>'
				 +'<dl><dd>视频数:  <span>'+anchors[index].videoNum+'</span></dd><dd>粉丝数: <span>'+anchors[index].fansNum+'</span></dd></dl>'
				 +'<h2>主播公告:'+anchors[index].notice+'</h2>'
				 + '<div class="chat-box"><ul></ul></div></div></div>'
			$(".footer").before(html);	 
	var flashvars={
				f:'../ckplayer/m3u8.swf',
				a:videos[index],
				s:0,
				c:0,
				p:1
			};
//			var video=[videos[index]+'->video/mp4'];
			var params={bgcolor:'#FFF',allowScriptAccess:'always',wmode:'transparent'};
			var video=[videos[index]];
			CKobject.embed('../ckplayer/ckplayer.swf','a1','ckplayer_a1','800','500',true,flashvars,video,params);
})
