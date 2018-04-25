$(function () {
    // 弹幕初始化
    Editor.init();
})
var datas = {
    balance: 100, //余额
}
var pay_sub_lock = true;
var _count = 100;
var _timeout_obj;
var money_regx = /^(\d+|\d+\.\d{1,2})$/;


var Editor = {
    init: function () {
        var that = this;
        //初始化-具体执行方法
        Editor.reader();
    },
    reader: function () {
        var that = this;
        Editor.showBalance();
        $(document).on("click", ".cbtn", function () {
            var ctoggle = $(this).attr("data-toggle");
            switch (ctoggle) {
                case "":
                    console.log("hello");
                    break;
                default:
                    break;
            }
        });
        $(".sum").click(function (e) {
            $(".fun_recharge_num").removeClass("active")
            $(e.target).addClass("active");
        });
        $(".abolish input").click(function () {
            $(".shadowUp , .recharge_tip , .wx_pay ").fadeOut();
        })
        $(".read_close").click(function () {
            $(".shadowUp , .recharge_tip , .wx_pay ").fadeOut();
        })
        $("#pay_finish").click(function () {
            Editor.reload_page();
        });

        $("#pay_cancle").click(function () {
            $("#recharge_tip,.recharge_tip").hide();
        });

        $(".confirmation").click(function () {
            Editor.make_order();
        });
        Editor.loginState();
    },
    // 设置余额到页面元素
    showBalance: function () {
        var isSign = Editor.getCookie("isSign");
        if (isSign) {
            var balance = Editor.getBalance();
            $(".remainder .blue").text(balance);
        } else {
            $(".remainder .blue").text("0");
        }

    },
    // 获取余额
    getBalance: function () {
        var balance = Editor.getCookie("balance");
        return balance;
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
    make_order: function () {
        var _money = $("input[name=money]:checked").val();
        var _way = $("input[name=way]:checked").val();
        var _count = parseInt(_money * 100);
        // var _amount = $("#amount").val();
        var _amount = Editor.getCookie("username");
        // console.log(_amount);


        if (_money == null || $.trim(_money).length == 0 || !money_regx.test(_money) ||
            _money <= 0) {
            alert('金额只能是正整数!');
            return;
        }
        if (_amount == null || _amount == "undefined" || _amount == "") {
            alert('请先登录！');
            return;
        }

        var _title = "充值" + _count + "钻";

        if (_way == 1) {
            Editor.wexinPay(_money, _count, _title);
        } else {
            Editor.alipay(_money, _count, _title);
        }
    },
    // 微信支付请求支付二维码
    wexinPay: function (money, count, _title) {
        // http://hd.pc.live.cread.com/wxpay/payQRcode.json?money=0.1&copperCount=10&orderType=01&title=%E5%85%85%E5%80%BC10%E9%93%9C%E5%B8%81&phonenum=15515086664
        var domain = "http://wwwtest100.cread.com/";
        var url = domain + "/static/payQRcode.json?";
        var money = 0.01;
        var count = 1;
        var _title = "充值" + count + "钻";
        var phonenum = Editor.getCookie("username");

        if (pay_sub_lock) {
            pay_sub_lock = false;
            $.ajax({
                type: "POST",
                url: url,
                data: "money=" + money + "&copperCount=" + count + "&orderType=01&title=" + _title + "&phonenum=" + phonenum,
                success: function (data) {
                    // console.log(data);
                    if (data.success) {
                        Editor.wxpre_order_success(data.obj, money);
                    } else {
                        // alert(data.msg);
                        // console.log("wx");
                    }
                    pay_sub_lock = true;
                },
                error: function () {
                    console.log('wx系统错误,请重试!');
                    pay_sub_lock = true;
                }
            });
        }
    },
    //预支付成功
    wxpre_order_success: function (orderno, money) {
        $("#id_rqcode").attr("src", "http://wwwtest100.cread.com/static/paycode?orderNo=" + orderno);
        $(".pay_copper .blue").html(money);

        $("#recharge_tip,.wx_pay").show(); //弹窗
        console.log(orderno);
        // var orderno = orderno;

        //启动定时检查
        _timeout_obj = setInterval(function () {
            Editor.checkPayResult(orderno);
        }, 2000);
    },
    checkPayResult: function (orderno) {
        var url = "http://wwwtest100.cread.com/static/check.json";
        // console.log("orderno");
        console.log(orderno);
        $.ajax({
            type: "POST",
            url: url,
            data: "orderNo=" + orderno,
            success: function (data) {
                console.log(data);
                if (data.success) {
                    Editor.getBalanceAfterRechage();
                    // alert('充值成功!');
                    alert('充值成功!');
                    Editor.reload_page();
                    //show_pay_result(orderno);
                    return;
                } else {
                    if (data.obj && data.obj == '-1000') {
                        _count = 0;
                        // console.log('无效的订单1!');
                        // alert('无效的订单1!');
                        // $("#recharge_tip,.wx_pay").hide();
                        return;
                    }
                }
                // _count = _count - 1;
                // if (_count > 0 && ($(".wx_pay").is(":visible") || $(".recharge_tip").is(":visible"))) {
                //     _timeout_obj = setTimeout('check_pay_result("' + orderno + '")', 2000);
                // } else if (_count <= 0) {
                //     window.location.reload(); //刷新页面
                // }
            },
            error: function () {
                //系统错误
            }
        });
    },
    // 获取余额
    getBalanceAfterRechage: function () {
        var phonenum = Editor.getCookie("username");
        $.ajax({
            type: "GET",
            url: "http://wwwtest100.cread.com/static/account.json",
            data: {
                phonenum: phonenum
            },
            dataType: "json",
            success: function (data) {
                var balance = data.obj.total;
						console.log(balance+"ajax");                
                // balance = Math.round(balance/100);//余额缩小到百分之一，四舍五入
                Editor.setCookie("balance", balance, 7);
            }
        });
    },
    //已完成充值,跳转到结果页
    show_pay_result: function (orderNo) {
        var form = $('<form></form>');
        form.attr('action', "/pay/result.html?orderNo=" + orderNo);
        form.attr('method', 'POST');
        form.attr('target', '_self');
        $(form).submit();
    },

    //已完成充值
    reload_page: function (userId) {
        window.location.reload();
    },
    // 登录状态渲染
    loginState: function () {
        var isLogin = Editor.getCookie("isSign");
        var username = Editor.getCookie("username");
        if (isLogin) {
            Editor.loginInfoShow(username);
        }
    },
    // 显示登录用户
    loginInfoShow: function (username) {
        $(".login-userName").show()
        $(".login-phone").html(username);
        $(".login-box-frame").hide();
        $(".login-box").hide();
        $(".signIn-login-btn").hide();
        $(".signIn-out-btn").show();
        // Editor.showBalance();
        // Editor.reload_page();
    },
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

}