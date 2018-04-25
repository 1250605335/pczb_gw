$(function () {
	// var indexData = {
	// 	index = 1,
	// }
	// Editor.init();

	//视频列表
	var videos = [
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/chengzi.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/chengzi.mp4',
		'https://ks3-cn-beijing.ksyun.com/wwlive/huifang/chengzi.mp4',
	]
	var anchors = [{
			videoName: "橙子",
			userName: "橙子",
			liveNum: "17000402",
			videoNum: "292",
			sex: "0",
			fansNum: 9343,
			notice: "一首《嘀嗒》送给大家~"
		},
		{
			videoName: "橙子",
			userName: "橙子",
			liveNum: "17000402",
			videoNum: "292",
			sex: "0",
			fansNum: 9343,
			notice: "一首《嘀嗒》送给大家~"
		},
		{
			videoName: "橙子",
			userName: "橙子",
			liveNum: "17000402",
			videoNum: "292",
			sex: "0",
			fansNum: 9343,
			notice: "一首《嘀嗒》送给大家~"
		},
	]
	//抓取URL地址里传过来的index
	var oUrl = window.location.href.split('?')[1];
	var index = oUrl.split("=")[1];
	// console.log(index);
	Editor.setCookie("livingIndex", index, 1);
	var indexasdfsd = anchors[index];
	console.log(indexasdfsd);
	//性别图标
	if (anchors[index].sex == '0') {
		var sexImg = '<img class="ui_gender fun_gender" src="../img/2018-3-2/Woman.png">'
	} else {
		var sexImg = '<img class="ui_gender fun_gender" src="../img/2018-3-2/Man.png">'
	}

	var html = '<div class="videoplayer"><ul class="crumbs-nav-main"><a href="brilliantvideo.html" class="jcsp">精彩视频</a><span>>></span><span class="fun_crumbs_nav_item"> ' + anchors[index].videoName + '</span></ul><div class="player-box container">' +
		'<div id="a1"></div></div>' +
		'<div class="anchorData-box"><div class="ui_coverImg fun_coverImg"><img src="http://cdn.ikanshu.cn/wwlive/video/1804/ef6976259eb149e486ce6777f9e5d7cb_400.jpg" alt=""></div><h1><span class="ui_userName fun_userName">' + anchors[index].userName + '</span> ' + sexImg + '</h1>' +
		'<p class="ui_zbjh">直播间号:<span class="fun_chatroomId">' + anchors[index].liveNum + '</span></p><dl><dd>视频数:  <span>' + anchors[index].videoNum + '</span></dd><dd>观看人数: <span class="fun_viewers">' + anchors[index].fansNum + '</span></dd></dl>' +
		'<p class="ui_zbgg"><span>主播公告：</span><span class="fun_notice">' + anchors[index].notice + '</span></p>' +
		'</div></div>';
	var ui_live_interaction = $(".ui_live_interaction")
	$(".footer").before(html);
	$(".anchorData-box").append(ui_live_interaction);

	Editor.init();


})

// $(function () {
// 	// 弹幕初始化
// 	Editor.init();
// })
var datas = {
	standURL: null,
	videoList: null,
	balance: 100, //余额
	giftCheckedIndex: 0,
	giftPrice: null, //礼物价格
	chatListHeight: 250, //聊天列表元素的高度
	gifts: {
		"code": 0,
		"info": "SUCCESS",
		"toolTip": "",
		"requestId": "",
		"data": {
			"goodsList": [{
					"goodsId": 9,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1802/5ac01e64eb5d4379b258c0aa2617e9f8_144.png",
					"goodsPrice": 5,
					"special": "",
					"type": 0,
					"goodsName": "幸运狗",
					"goodsType": 2
				},
				{
					"goodsId": 10,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1802/9fed4a5ef0764f5daea260d80b447cbd_144.png",
					"goodsPrice": 2,
					"special": "",
					"type": 0,
					"goodsName": "福临门",
					"goodsType": 2
				},
				{
					"goodsId": 11,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1802/6c1bddeb8a044c809b07dbff2fc72808_144.png",
					"goodsPrice": 1,
					"special": "",
					"type": 0,
					"goodsName": "炮竹",
					"goodsType": 2
				},
				{
					"goodsId": 12,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1802/585af82ed65e4d01a10b3872f4ce7e05_144.png",
					"goodsPrice": 2,
					"special": "",
					"type": 0,
					"goodsName": "红灯笼",
					"goodsType": 2
				},
				{
					"goodsId": 5,
					"goodsImg": "https://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/valentine.gif",
					"goodsPrice": 231,
					"special": "valentine",
					"type": 0,
					"goodsName": "喜欢你",
					"goodsType": 1
				},
				{
					"goodsId": 6,
					"goodsImg": "https://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/newyear.gif",
					"goodsPrice": 299,
					"special": "newYear",
					"type": 0,
					"goodsName": "恭贺新春",
					"goodsType": 1
				},
				{
					"goodsId": 7,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1611/25a69254ac0b4aed817e48021240879a.png",
					"goodsPrice": 520,
					"special": "superCat",
					"type": 0,
					"goodsName": "超跑",
					"goodsType": 1
				},
				{
					"goodsId": 8,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1611/7a732a6c723241c689738895762fef43.png",
					"goodsPrice": 1314,
					"special": "yacht",
					"type": 0,
					"goodsName": "游艇",
					"goodsType": 1
				},
				{
					"goodsId": 43,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1703/f21c1b5c46ae4026816c1cd530cb42cf.png",
					"goodsPrice": 5,
					"special": "",
					"type": 0,
					"goodsName": "玫瑰",
					"goodsType": 2
				},
				{
					"goodsId": 45,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1712/c902dc9613e84820ad0ef11bd24967b5_144.png",
					"goodsPrice": 66,
					"special": "",
					"type": 0,
					"goodsName": "水晶鞋",
					"goodsType": 2
				},
				{
					"goodsId": 46,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1712/0a30a264a4074f5799a2dee33959d202_144.png",
					"goodsPrice": 100,
					"special": "",
					"type": 0,
					"goodsName": "香水",
					"goodsType": 2
				},
				{
					"goodsId": 41,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1703/eec3d48038cd4721a196d6a158e31750.png",
					"goodsPrice": 2,
					"special": "",
					"type": 0,
					"goodsName": "么么哒",
					"goodsType": 2
				},
				{
					"goodsId": 44,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1703/56e5edc3d36d41c581ae5029955e4272.png",
					"goodsPrice": 5,
					"special": "",
					"type": 0,
					"goodsName": "巧克力",
					"goodsType": 2
				},
				{
					"goodsId": 31,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1712/82959ec1265641faa148feb420b57c4c_144.png",
					"goodsPrice": 1,
					"special": "",
					"type": 0,
					"goodsName": "隔壁老王",
					"goodsType": 2
				},
				{
					"goodsId": 40,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1703/33956f32b0f347adb2b1b43e667ce2a0.png",
					"goodsPrice": 1,
					"special": "",
					"type": 0,
					"goodsName": "荧光棒",
					"goodsType": 2
				},
				{
					"goodsId": 26,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1612/247b1c98edfe445abb4fd60e407f012e.png",
					"goodsPrice": 66,
					"special": "",
					"type": 0,
					"goodsName": "钻戒",
					"goodsType": 2
				},
				{
					"goodsId": 32,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1712/4331187e99374dba979feba31e555ea6_144.png",
					"goodsPrice": 5,
					"special": "",
					"type": 0,
					"goodsName": "金瓶梅",
					"goodsType": 2
				},
				{
					"goodsId": 33,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1612/5f1a754c053a41f4b46a922d1886d6d9.png",
					"goodsPrice": 10,
					"special": "",
					"type": 0,
					"goodsName": "书香门第",
					"goodsType": 2
				},
				{
					"goodsId": 30,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1612/833166c9cf8f4bebbbfcfc4a5fe6c427.png",
					"goodsPrice": 1,
					"special": "",
					"type": 0,
					"goodsName": "啪啪啪",
					"goodsType": 2
				},
				{
					"goodsId": 27,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1612/31ff2a04a0a44fe2a1b3bed1ec5280b0.png",
					"goodsPrice": 100,
					"special": "",
					"type": 0,
					"goodsName": "包包",
					"goodsType": 2
				},
				{
					"goodsId": 39,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1703/6f12f7bc50814cd09dc29102f088e387.png",
					"goodsPrice": 1,
					"special": "",
					"type": 0,
					"goodsName": "甜蜜蜜",
					"goodsType": 2
				},
				{
					"goodsId": 42,
					"goodsImg": "http://cdn.ikanshu.cn/wwlive/gift/1703/6f7c47889cd94fcaafcf5e1867dffc2e.png",
					"goodsPrice": 2,
					"special": "",
					"type": 0,
					"goodsName": "抱抱",
					"goodsType": 2
				}
			],
			"nobleList": [{
					"nobleName": "黑骑专属",
					"goodsId": 78,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/huojian.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/5e08b13bf5744b2d9894c6c5cd5d6b70_144.png",
					"isUse": 1,
					"goodsPrice": 666,
					"special": "rocket",
					"type": 1,
					"goodsName": "火箭",
					"goodsType": 3,
					"orderRow": 1
				},
				{
					"nobleName": "圣骑专属",
					"goodsId": 67,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/shilitaohua.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/0eebefb7fc27431183442e9f72a04a13_144.png",
					"isUse": 0,
					"goodsPrice": 6,
					"special": "",
					"type": 1,
					"goodsName": "十里桃林",
					"goodsType": 4,
					"orderRow": 5
				},
				{
					"nobleName": "圣骑专属",
					"goodsId": 71,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/liuxingyu.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/b6495e96474640849d4975027f5ca6b5_144.png",
					"isUse": 0,
					"goodsPrice": 222,
					"special": "meteor",
					"type": 1,
					"goodsName": "流星雨",
					"goodsType": 3,
					"orderRow": 6
				},
				{
					"nobleName": "龙骑专属",
					"goodsId": 68,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/xiannvbang.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/fa28d6bc4dc345c9830869a73cdcf0bd_144.png",
					"isUse": 1,
					"goodsPrice": 10,
					"special": "",
					"type": 1,
					"goodsName": "仙女棒",
					"goodsType": 4,
					"orderRow": 7
				},
				{
					"nobleName": "龙骑专属",
					"goodsId": 75,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/yigui.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/465185aebfa94e4cb3b2411dc503a26a_144.png",
					"isUse": 1,
					"goodsPrice": 520,
					"special": "wardrobe",
					"type": 1,
					"goodsName": "梦幻衣柜",
					"goodsType": 3,
					"orderRow": 8
				},
				{
					"nobleName": "黑骑专属",
					"goodsId": 69,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/gaobaiqiqiu.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/2e695aecd29a4c7aaa52fc9a29fe2178_144.png",
					"isUse": 1,
					"goodsPrice": 21,
					"special": "",
					"type": 1,
					"goodsName": "告白气球",
					"goodsType": 3,
					"orderRow": 9
				},
				{
					"nobleName": "黑骑专属",
					"goodsId": 70,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/richu.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/70ed4297414045cf85c92acb87870c76_144.png",
					"isUse": 1,
					"goodsPrice": 1314,
					"special": "sunrise",
					"type": 1,
					"goodsName": "陪你看日出",
					"goodsType": 5,
					"orderRow": 10
				},
				{
					"nobleName": "魔法专属",
					"goodsId": 64,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/shouhuzhijian.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/858d715b5f7149e189ca3981580ed9ca_144.png",
					"isUse": 1,
					"goodsPrice": 52,
					"special": "sword",
					"type": 1,
					"goodsName": "守护之剑",
					"goodsType": 3,
					"orderRow": 11
				},
				{
					"nobleName": "魔法专属",
					"goodsId": 72,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/xinhuanufang.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/09fbe74e390a4f9d8496c8fba8899fb6_144.png",
					"isUse": 1,
					"goodsPrice": 2888,
					"special": "beWildWthJoy",
					"type": 1,
					"goodsName": "心花怒放",
					"goodsType": 5,
					"orderRow": 12
				},
				{
					"nobleName": "魔法专属",
					"goodsId": 66,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/caidan.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/ae205d7dd5e0482397e05511cecd8e1e_144.png",
					"isUse": 1,
					"goodsPrice": 3344,
					"special": "eggs",
					"type": 1,
					"goodsName": "兔兔彩蛋",
					"goodsType": 5,
					"orderRow": 13
				},
				{
					"nobleName": "紫荆专属",
					"goodsId": 63,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/motianlun.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/9986f0c7d7804e2aa9a4427af0f60ae6_144.png",
					"isUse": 1,
					"goodsPrice": 99,
					"special": "ferrisWheel",
					"type": 1,
					"goodsName": "摩天轮",
					"goodsType": 3,
					"orderRow": 14
				},
				{
					"nobleName": "紫荆专属",
					"goodsId": 74,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/queqiaoxianghui.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/d3cf53225a664a059910116f2b62535a_144.png",
					"isUse": 1,
					"goodsPrice": 8888,
					"special": "magpieBridge",
					"type": 1,
					"goodsName": "鹊桥相会",
					"goodsType": 5,
					"orderRow": 15
				},
				{
					"nobleName": "紫荆专属",
					"goodsId": 73,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/fenhonghai.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/10ee9ffbbe2746d795c31286df68c012_144.png",
					"isUse": 1,
					"goodsPrice": 12014,
					"special": "pinkSea",
					"type": 1,
					"goodsName": "许你一片粉红海",
					"goodsType": 5,
					"orderRow": 16
				},
				{
					"nobleName": "神殿专属",
					"goodsId": 76,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/tianshi.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/a060e3fcd3e2476daf80c2951dd5a4b4_144.png",
					"isUse": 1,
					"goodsPrice": 980,
					"special": "angel",
					"type": 1,
					"goodsName": "天使",
					"goodsType": 3,
					"orderRow": 17
				},
				{
					"nobleName": "神殿专属",
					"goodsId": 65,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/shendianfazhang.gif",
					"goodsImg": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/11eb94c26e0c44249c848330f76ace3a_144.png",
					"isUse": 1,
					"goodsPrice": 66666,
					"special": "staff",
					"type": 1,
					"goodsName": "神殿法杖",
					"goodsType": 5,
					"orderRow": 18
				},
				{
					"nobleName": "神殿专属",
					"goodsId": 77,
					"goodsGif": "http://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/huanqiu.gif",
					"goodsImg": "https://ks3-cn-beijing.ksyun.com/wwlive/imgs/goods/5dbf32cbed934c36bb3480efa2a58a4c_144.png",
					"isUse": 1,
					"goodsPrice": 131420,
					"special": "world",
					"type": 1,
					"goodsName": "环游世界",
					"goodsType": 5,
					"orderRow": 28
				}
			]
		}
	}
}
var Editor = {
	init: function () {
		var that = this;
		//初始化-具体执行方法
		Editor.reader();
		Editor.getBalance();
	},
	reader: function () {
		var that = this;
		Editor.danmuInit(); //弹幕初始化
		$(document).on("click", ".cbtn", function () {
			var ctoggle = $(this).attr("data-toggle");
			switch (ctoggle) {
				case "chatBox-send":
					Editor.showChatBoxSend($(this)); //显示聊天输入框
					break;
				case "danmu":
					Editor.showDanMuBoxSend($(this)); //显示弹幕输入框
					break;
				case "chatSend":
					Editor.chatSend(); //发送聊天消息
					break;
				case "danMuSend":
					Editor.danMuSend(); //发送弹幕消息
					break;
				case "gifts":
					Editor.showGiftsBox($(this)); //显示送礼页面
					Editor.chatListMoveUp();
					break;
				case "chooseGift":
					Editor.chooseGift($(this)); //选择礼物
					break;
				case "sendGifts":
					Editor.sendGifts(); //选择礼物
					break;
				case "rechargeBtn":
					Editor.rechargeBtn(); //充值
					break;
				default:
					break;
			}
		});
		$(document).keyup(function (event) {
			if (event.keyCode == 13) {
				Editor.chatSend(); //判断并设置聊天列表的位置
				Editor.danMuSend(); //发送弹幕消息				
			}
		});
		// Editor.loginState();
		//直播
		Editor.getLivingInfo(Editor.getCookie("livingIndex")); //直播入口跳转
		// Editor.setAnchorInfo(0);

	},
	// 弹幕初始化
	danmuInit: function () {
		var option = {
			container: ".container", //弹幕墙的id
			barrageLen: 15 //弹幕的行数
		}
		barrageWall.init(option); //初始化弹幕墙
		// barrageWall.upWall("images/aq.png", "hello", "我说的话"); //初始化弹幕墙
		// //////////////////////////////////////////////////////////////////////
		// ////////// 以下注释掉的部分为测试弹幕效果的各种定时器，模拟用户输入 //////////
		// //////////////////////////////////////////////////////////////////////
		// var num = 0,
		// 	timer = setInterval(function () {
		// 		num++;
		// 		if (num > 50) {
		// 			clearInterval(timer)
		// 		}
		// 		barrageWall.upWall("../img/2018-3-2/Woman.png", "我是说话人" + num, "hello world");
		// 	}, 1500);
	},
	// 添加tab选中样式
	addActiveClass: function (ele) {
		$(".fun_tab_pane").hide();
		$(ele).parent("li").addClass("active");
		$(ele).parent("li").siblings("li").removeClass("active");
	},
	// 显示聊天输入框
	showChatBoxSend: function (ele) {
		Editor.addActiveClass(ele);
		Editor.addActiveClass(ele);
		$("#chat").show();
		Editor.chatListMoveUp(); //判断并设置聊天列表的位置		
	},
	// 显示弹幕输入框
	showDanMuBoxSend: function (ele) {
		Editor.addActiveClass(ele);
		$("#barrage").show();
	},
	// 显示送礼
	showGiftsBox: function (ele) {
		Editor.addActiveClass(ele);
		$("#gift").show();
		Editor.giftsListRender(); //礼物列表渲染		
		Editor.balanceRender(); //余额渲染		
	},
	// 聊天消息发送
	chatSend: function () {
		var username = Editor.getCookie("username");
		var textContent = $(".fun_chat_textarea").val().replace(/[\n\r]/g, '<br>')
		var html = '<div class="clearfloat">\
		<div class="left">\
			<div class="chat-message">\
				<span class="ui_author_name">' + username + '：</span>\
				<span class="ui_chat_text">\
					' + textContent + '\
				</span>\
			</div>\
		</div>\
	</div>';
		if (textContent != "") {
			$(".chatBox-content-demo").append(html);
			//发送后清空输入框
			$(".div-textarea").val("");
			//聊天框默认最底部
			$(document).ready(function () {
				$("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
			});
		}
		$(".fun_tab_pane").hide(); //隐藏输入框
		$(".ui_tabs").children("li").removeClass("active"); //取消选中状态		
		Editor.chatListMoveUp(); //判断并设置聊天列表的位置

	},
	// 弹幕发送
	danMuSend: function () {
		var username = Editor.getCookie("username");
		var vla = $(".fun_danmu_textarea").val().replace(/[\n\r]/g, '<br>')
		if (vla) {
			barrageWall.upWall("../img/videostx2.png", username, vla); //初始化弹幕墙
		}
		//发送后清空输入框
		$(".fun_danmu_textarea").val("");
		$(".fun_tab_pane").hide(); //隐藏输入框		
		$(".ui_tabs").children("li").removeClass("active"); //取消选中状态
	},
	// 礼物列表渲染
	giftsListRender: function () {
		// var url = "http://app.live.cread.com/app/goods/list.json?app=dl&platform=android&model=vivo_X7Plus&requestId=f1700e45f06546d5be090619bab4e4c8&nickname=%E6%9D%A5%E7%9C%8B%E5%A6%B9%E5%92%AF&pushType=0&version=3.2.4&coverKey=f4fcbfb995d15de4236961c29b2ff1e4&IMEI=862591032502929&nonce=PMTV7SX4&token=61f840906c6c4aea972c6dda1ec07ec0&deviceToken=AhtJBZOoaevl5sLhA_psAK3QVuVlBJF8J6UjqFrQHftD&userId=5448873&cnid=ceshi";//礼物列表接口
		// 获取数据
		// $.ajax({
		// 	url: url,
		// 	dataType: "json",
		// 	success: function (data) {
		// 		console.log(data);
		// 	}
		// });
		var gifts = datas.gifts.data.goodsList;
		var ulEle = $(".fun_gift_list");
		// 清空礼物列表
		ulEle.html("");
		// 获取到数据循环遍历渲染
		if (gifts) {
			gifts.forEach(
				function (item, index) {
					var html = '<li class="cbtn" data-toggle="chooseGift"><img src="' + item.goodsImg + '" alt=""><p class="ui_gift_name">' + item.goodsName + '</p><p class="ui_gift_price fun_gift_price">' + item.goodsPrice + '<i class="ui_zuan_small"></i></p></li>';
					ulEle.append(html);
				}
			)
		} else {
			console.error("请求数据不成功或无数据。");
		}
		Editor.firstActive(); //渲染html后默认选中第一个礼物
	},
	// 礼物选择
	chooseGift: function (ele) {
		Editor.whichActive(ele);
		Editor.showGiftPrice();
	},
	// 礼物选中添加选中样式
	whichActive: function (ele) {
		var Lis = $(".fun_gift_list").children("li");
		Lis.removeClass("active");
		$(ele).addClass("active");
		datas.giftCheckedIndex = $(ele).index(); //确定是选中的礼物列表的第几个
	},
	// 礼物默认选中第一个
	firstActive: function () {
		var firstLi = $(".fun_gift_list").children("li").eq(0);
		firstLi.addClass("active");
		Editor.showGiftPrice();
	},
	// 显示选中礼物的价格
	showGiftPrice: function () {
		var liActive = $(".fun_gift_list").children("li.active"); //获取选中的礼物对象
		var showEle = $(".fun_gift_price_show"); //获取显示价格的元素
		var giftPrice = liActive.children(".fun_gift_price").text(); //获取礼物的价格
		showEle.text(giftPrice); //填充价格
		datas.giftPrice = giftPrice; //将礼物价格保存到数据中供后面直接获取
	},
	// 获取余额
	getBalance: function () {
		var phonenum = Editor.getCookie("username");
		// 判断有没有账户登录
		if (true) { //如果有账户登录

			// 判断cookie里面有没有余额数据
			if (Editor.getCookie("balance")) {
				var balance = Editor.getCookie("balance");
				datas.balance = balance;
			} else { //没有cookie余额
				// 获取余额
				// http://hd.app.live.cread.com/static/account.json?userId=163352720
				$.ajax({
					type: "GET",
					url: "http://wwwtest100.cread.com/static/account.json",
					data: {
						phonenum: phonenum
					},
					dataType: "json",
					success: function (data) {
						var balance = data.obj.total;
						console.log(balance + "ajax1");
						// balance = Math.round(balance/100);//余额缩小到百分之一，四舍五入
						Editor.setCookie("balance", balance, 7);
						datas.balance = balance; //赋值给本地数据
					}
				});

			}

		} else { //如果没有账户登录
			datas.balance = 0;
		}

	},
	// 余额渲染
	balanceRender: function () {
		var username = Editor.getCookie("username");
		var ele = $(".fun_balance_number");

		if (username) {
			var balance = datas.balance;
			ele.text(balance);
		} else {
			var balance = datas.balance;
			ele.html(0);
		}

	},
	// 礼物发送
	sendGifts: function () {
		// 判断余额是否足够
		var balance = datas.balance; //获取余额
		// 获取礼物的价格
		var giftPrice = datas.giftPrice;
		var subNum = balance - giftPrice

		if (subNum < 0) { //如果余额不够
			window.location.href = "./recharge.html"; //跳转到充值页面
		} else {
			Editor.showGiftsSend(); // 发送的礼物在聊天室显示
			// 修改余额
			datas.balance = balance - giftPrice;
			Editor.setCookie("balance", datas.balance, 7);
			$("#gift").hide(); //隐藏礼物列表
			$(".ui_tabs").children("li").removeClass("active"); //取消送礼选中状态
		}

	},
	// 发送的礼物在聊天室显示
	showGiftsSend: function () {
		var username = Editor.getCookie("username");
		var index = datas.giftCheckedIndex; //获取选中的礼物的索引
		var imgSrc = datas.gifts.data.goodsList[index].goodsImg; //获取礼物的图片地址
		var goodsName = datas.gifts.data.goodsList[index].goodsName; //获取礼物的图片地址
		var html = '<div class="clearfloat">\
		<div class="left">\
			<div class="chat-message">\
				' + username + '：<span class="ui_gift_send_text">送了主播' + goodsName + '</span>\
				<span class="ui_gift_send_img">\
				<img src="' + imgSrc + '" alt=""></span>\
			</div>\
		</div>\
	</div>';
		$(".chatBox-content-demo").append(html);
		//聊天框默认最底部
		$(document).ready(function () {
			$("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
		});
	},
	// 聊天输入框弹出后，聊天列表上移
	chatListMoveUp: function () {
		// 获取聊天输入框的高度
		var chatTextareaHeight = $(".chatBox-send").height();
		if (!$("#chat").is(":hidden")) { //如果聊天输入框是显示状态
			$(".chatBox-content-demo").height(datas.chatListHeight - chatTextareaHeight - 30);
			//聊天框默认最底部
			$("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
		} else { //如果聊天输入框是隐藏状态
			$(".chatBox-content-demo").height(datas.chatListHeight);
			//聊天框默认最底部
			$("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
		}
	},
	//cookie
	//设置cookie
	setCookie: function (name, value, iDay) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + iDay);
		document.cookie = name + '=' + value + ';expires=' + oDate;
	},
	//获取cookie
	getCookie: function (name) {
		var arr = document.cookie.split('; ');
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('=');
			if (arr2[0] == name) {
				return arr2[1];
			}
		}
		return '';
	},
	// 登录状态渲染
	loginState: function () {
		var isLogin = Editor.getCookie("isSign");
		var username = Editor.getCookie("username");
		Editor.loginInfoShow(username);
	},
	// 显示登录用户
	loginInfoShow: function (username) {
		$(".login-userName").show()
		$(".login-phone").html(username);
		$(".login-box-frame").hide();
		$(".login-box").hide();
		$(".signIn-login-btn").hide();
		$(".signIn-out-btn").show();
	},
	// 获取直播中的主播信息
	getLivingInfo: function (index) {
		var url = "http://hd.app.live.cread.com/external/website/living.json";
		$.ajax({
			type: "POST",
			url: url,
			data: {},
			dataType: "json",
			success: function (data) {
				var videoList = data.data.videoList;
				if (videoList) {
					datas.videoList = videoList;
					Editor.setAnchorInfo(index); //主播信息渲染
					Editor.vidioLiving(index); //直播视频渲染
				}

			}
		});
	},
	// 设置直播中的主播信息
	setAnchorInfo: function (index) {
		var anchorName = $(".fun_userName"); //主播昵称
		var chatroomId = $(".fun_chatroomId"); //房间号
		var coverImg = $(".fun_coverImg"); //头像
		var viewers = $(".fun_viewers"); //观看人数
		var notice = $(".fun_notice"); //公告
		var crumbsNavItem = $(".fun_crumbs_nav_item"); //面包屑导航
		var sexEle = $(".fun_gender"); //性别元素
		// 获取性别
		var gender = datas.videoList[index].sex;
		if (gender == "0" || gender == 0) {
			sexEle.attr("src", "../img/2018-3-2/Woman.png");
		} else {
			sexEle.attr("src", "../img/2018-3-2/Man.png");
		}
		anchorName.text(datas.videoList[index].anchorName);
		chatroomId.text(datas.videoList[index].chatroomId);
		viewers.text(datas.videoList[index].viewers);
		notice.text(datas.videoList[index].notice);
		crumbsNavItem.text(datas.videoList[index].anchorName);
		coverImg.attr("src", datas.videoList[index].coverImg);
	},
	// 充值跳转条件
	rechargeBtn: function () {
		var username = Editor.getCookie("username");
		if (username) {
			window.location.href = "./recharge.html";
		} else {
			alert("请先登录！");
			// rtmp%3A%2F%2Frtmplive.cread.com%2Flive%2F000000023538_259
			// rtmp://rtmplive.cread.com/live/000000023538_259
		}

	},
	// 直播liveing
	vidioLiving: function (index) {
		// var vidioSrc = datas.videoList[index];
		// console.log(datas.videoList[0].ext);
		var vidioSrc = datas.videoList[index].ext;
		// var decodeSrc = decodeURI(vidioSrc);
		var decodeSrc = decodeURIComponent(vidioSrc); //解码
		var vidioSrcObj = JSON.parse(decodeSrc);
		var fullHeighURL = vidioSrcObj.fullHeighURL, //超高清
			heighURL = vidioSrcObj.heighURL, //高清
			standURL = vidioSrcObj.standURL //标准
		// console.log(standURL);
		// videos.f = standURL;
		datas.standURL = standURL;
		console.log(standURL);
		// console.log(datas.standURL);
		Editor.flashvars();

	},
	flashvars: function () {
		// 提示开启flash
		if (window.ActiveXObject) {
			var s = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if (!s) {
				alert('请将您的浏览器设置falsh插件在此网站上始终允许！');
			}
		} else {
			var s = navigator.plugins['Shockwave Flash'];
			if (!s) {
				alert('请将您的浏览器设置falsh插件在此网站上始终允许！');
			}
		}
		var flashvars = {
			f: datas.standURL,
			// a: videos[index],
			s: 0,
			c: 0,
			p: 1
		};
		//			var video=[videos[index]+'->video/mp4'];
		var params = {
			bgcolor: '#FFF',
			allowScriptAccess: 'always',
			wmode: 'transparent'
		};
		// var video = [videos[index]];
		CKobject.embed('../ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '800', '500', false, flashvars, params);
		// 判断提示开启flash

	}

};