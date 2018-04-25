$(function () {
    $(".make_infor img").click(function () {
        $(".nickname").attr("disabled", false).css("border", "1px solid #ccc").focus();
        var t = $(".nickname").val();
        $(".nickname").val("").focus().val(t);
    })
    //点击退出按钮
    $(".signIn-out-btn").click(function () {
        $(this).hide();
        $(".signIn-login-btn").show();
        delcookie("isSign", 1, -1);
        delcookie("username", 1, -1);
        Editor_usercenter.removeCookie("balance");
        var path = window.location.pathname;
        //根据index.html和其他html文件路径不同做判断
        if (path == "/page/index.html") {
            window.location.href = "./index.html";
        } else {
            window.location.href = "../index.html";
        }
    })
    //点击登录按钮
    $(".login-btn").click(function () {
        var phone = $(".phone-number").val();
        var pass = $(".pass-number").val();
        toLogin(phone, pass)
    })
});
/**
 * 更换密码
 * @param userId
 */
function changepassword(userId) {
    //alert();
    var oldpassord = $("#oldpassword").val();
    var newp = $("#newpassword").val();
    var newpt = $("#newpasswordt").val();
    $(".error").hide();
    if (oldpassord == null || $.trim(oldpassord).length < 6) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("原始密码错误，请重新输入");
        return false;
    } else {
        $(".login-box-error").hide();
    }

    var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    if (!reg.test(newp) || newp.length < 6 || newp.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");
        return false;
    } else {
        $(".login-box-error").hide();
    }
    if (!reg.test(newpt) || newpt.length < 6 || newpt.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");

        return false;
    } else {
        $(".login-box-error").hide();
    }

    if (newp != newpt) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("密码不一致，请确认后重新输入");

        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "http://wwwtest100.cread.com/acount/savepassword.json",
            data: "userId=" + userId + "&newpassword=" + newpt + "&oldpassword=" + oldpassord + "",
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    $(".unite_success").show();
                    setTimeout(function () {
                        $(".unite_success").hide();
                        window.location.reload();
                    }, 1000);

                } else {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html("密码修改失败");

                    //  alert("密码修改失败");
                }
            },
            error: function () {
                $(".login-box-error").show();
                $(".login-box-error>span").html("系统错误，请稍后重试");

                // alert("系统错误，请稍后重试");
            }
        });
    }
};
/**
 * 发送验证码
 * @returns {boolean}
 */
function sendVerificationCode(target) {
    $(".error").hide();
    var phone = $("#phonenum").val();
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(phone)) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入正确的手机号");
        return false;
    } else {
        $(".login-box-error").hide();
    }

    if (target == 'register') { //手机号校验
        var flag = $("#data_phonenum_flag").val();
        if (flag != 1) {
            $(".login-box-error").show();
            $(".login-box-error>span").html("请输入正确的手机号");
            return;
        } else {
            $(".login-box-error").hide();
        }
    }

    //图像验证码
    var imagecode = $("#id_imagecode").val();
    if (!imagecode) { //不存在设置成空字符串
        imagecode = '';
    }

    $("#verificationCodebtn").attr("disabled", "disabled");

    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/usercenter/sendVerificationCode.json",
        data: "phonenum=" + phone + "&target=" + target + "&imagecode=" + imagecode,
        dataType: "json",
        success: function (data) {
            if (data.success) {
                $(".login-box-error").show();
                $(".login-box-error>span").html("验证码已发送请注意查收");

                sms_time_job(_time, $("#verificationCodebtn")); //定时提示
            } else {
                if (data.obj == 2) {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html(data.msg);
                } else {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html(data.msg);

                }
                $("#verificationCodebtn").removeAttr("disabled");
            }
        },
        error: function () {
            $(".login-box-error").show();
            $(".login-box-error>span").html("系统错误，请稍后重试");

            $("#verificationCodebtn").removeAttr("disabled");
        }
    });
}

var _time = 120;

function sms_time_job(time, btn) {
    if (time > 0) {
        $("#verificationCodebtn").val("重新发送(" + time + ")");
        time = time - 1;
        setTimeout('sms_time_job("' + time + '")', 1000);
    } else {
        $("#verificationCodebtn").removeAttr("disabled");
        $("#verificationCodebtn").val("再次发送");
    }
}


/**
 * 绑定账号
 * @returns {boolean}
 */
function bindaccount(userId) {
    $(".error").hide();
    var phone = $("#phonenum").val();
    var password = $("#password").val();
    var passwordt = $("#passwordt").val();
    var smsvcode = $("#smsvcode").val();
    $(".error").hide();
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(phone)) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入正确的手机号");
        return false;
    }
    var reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
    if (!reg.test(password) || password.length < 6 || password.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");

        return false;
    } else {
        $(".login-box-error").hide();
    }
    if (!reg.test(passwordt) || passwordt.length < 6 || passwordt.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");
        return false;
    } else {
        $(".login-box-error").hide();
    }

    if (password != passwordt) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("密码不一致，请确认后重新输入");

        return false;
    } else {
        $(".login-box-error").hide();
    }

    if (smsvcode == null || smsvcode.length < 6) { //这里还要判断一下验证码是否正确
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入正确的验证码");
        return;
    } else {
        $(".login-box-error").hide();
    }

    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/acount/bindaccount.json",
        data: "userId=" + userId + "&phonenum=" + phone + "&password=" + password + "&smsvcode=" + smsvcode,
        dataType: "json",
        success: function (data) {
            if (data.success) {
                $(".unite_success").show();
                setTimeout(function () {
                    $(".unite_success").hide();
                    window.location.href = "/acount/bindcount.html";
                }, 1000);
            } else {
                if (data.obj == 1) {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html(data.msg);
                } else {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html(data.msg);

                }
            }
        },
        error: function () {
            $(".login-box-error").show();
            $(".login-box-error>span").html("系统错误，请稍后重试");

        }
    });
};

/**
 *用户注册
 * @returns {boolean}
 */
function registeruser() {
    var phone_falg = $("#data_phonenum_flag").val();
    var password = $("#password").val();
    var passwordt = $("#passwordt").val();
    var smsvcode = $("#smsvcode").val();
    var ck = $("#insure");
    $(".error").hide();

    if (phone_falg != 1) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入正确的手机号");
        return false;
    } else {
        $(".login-box-error").hide();

    }
    var mobile = $("#phonenum").val();

    //var reg = /^[0-9a-zA-Z]/;
    var reg = /^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/;
    if (!reg.test(password) || password.length < 6 || password.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");
        return false;
    } else {
        $(".login-box-error").hide();
    }
    if (!reg.test(passwordt) || password.length < 6 || password.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");
        return false;
    } else {
        $(".login-box-error").hide();
    }

    if (password != passwordt) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("密码不一致，请确认后重新输入");

        return false;
    } else {
        $(".login-box-error").hide();

    }
    if (smsvcode == null || smsvcode.length < 6) { //这里还要判断一下验证码是否正确
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入正确的验证码");
        return false;
    } else {
        $(".login-box-error").hide();
    }

    if (!($("#insure").attr("checked"))) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请选择用户协议");

        return false;
    } else {
        $.ajax({
            type: "POST",
            url: "http://wwwtest100.cread.com/usercenter/registeruser.json",
            data: "phonenum=" + mobile + "&password=" + password + "&passwordt=" + passwordt + "&smsvcode=" + smsvcode,
            dataType: "json",
            success: function (data) {
                if (data.success) {
                    $(".reg_bg").hide();
                    $(".login-success").show();
                    //                  toLogin(mobile,password);
                } else if (data.obj == -1 || data.obj == -3 || data.obj == -4) {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html(data.msg);

                } else if (data.obj == -2) {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html("请输入正确的验证码");

                }
            },
            error: function () {
                $(".login-box-error").show();
                $(".login-box-error>span").html("系统错误，请稍后重试");

            }
        });
    }
};

//手机号校验
function checkMobile(mobile, obj) {
    $(".error").hide();
    var mobile_reg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!mobile_reg.test(mobile)) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入正确的手机号");
        $("#data_phonenum_flag").val('0');
        return false;
    } else {
        $(".login-box-error").hide();
        $("#data_phonenum_flag").val('1');

        console.log($("#data_phonenum_flag").val())
    }

    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/usercenter/chckmobile.json",
        data: "mobile=" + mobile,
        dataType: "json",
        success: function (data) {
            if (data.success) {
                $("#data_phonenum_flag").val('1');
            } else {
                $("#data_phonenum_flag").val('0');
                $(".login-box-error").show();
                $(".login-box-error>span").html(data.msg);

            }
        },
        error: function () {
            $("#data_phonenum_flag").val('0');
            //          $(".login-box-error").show();
            //      $(".login-box-error>span").html("系统错误，请稍后重试");

        }
    });
}

/**
 * 找回密码
 */
function getbackpass() {
    var phonenum = $.trim($("#phonenum").val());
    var vcode = $.trim($("#vcode").val());

    $(".error").hide();
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

    if (!myreg.test(phonenum)) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入正确的手机号");
        return false;
    }
    var phonestar = phonenum.substr(0, 3);
    var phonecen = "****";
    var phoneend = phonenum.substr(7, phonenum.length);
    var phone = phonestar + phonecen + phoneend;
    if (vcode == null || vcode.length < 4) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("验证码格式不正确");

        return;
    }
    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/usercenter/getbackpassone.json",
        data: "phone=" + phonenum + "&vercode=" + vcode,
        dataType: "json",
        success: function (data) {
            if (data.success) { //验证码验证通过
                $(".re_psw1").hide();
                $(".re_psw2").show();
                $("#phone").val(phone);
            } else { //验证码验证不通过
                if (data.obj == 1) {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html(data.msg);

                } else {
                    $(".login-box-error").show();
                    $(".login-box-error>span").html(data.msg);
                }
            }
        },
        error: function () {

        }
    });

};

function secondstep() {
    $(".error").hide();
    var smscode = $("#smscode").val(); //用户输入的验证码
    if (smscode == null || smscode.length < 6) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("验证码错误请重新输入");

        return;
    }

    //验证手机验证码
    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/usercenter/getbackpasstwo.json",
        data: "phone=" + phonenum + "&smscode=" + smscode,
        dataType: "json",
        success: function (data) {
            if (data.success) {
                $(".re_psw2").hide();
                $(".re_psw3").show()
            } else {
                $(".login-box-error").show();
                $(".login-box-error>span").html(data.msg);

            }
        },
        error: function () {
            $(".login-box-error").show();
            $(".login-box-error>span").html("系统异常,请重试");

        }
    });
};

function resetpass() {
    $(".error").hide();
    var phonenum = $("#phonenum").val();
    var password = $("#password").val();
    var passwordt = $("#passwordt").val();
    var reg = /^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/;
    if (!reg.test(password) || password.length < 6 || password.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");
        return false;
    } else {
        $(".login-box-error").hide();
    }
    if (!reg.test(passwordt) || passwordt.length < 6 || passwordt.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");
        return false;
    } else {
        $(".login-box-error").hide();
    }
    if (passwordt != password) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("两次输入密码不一致!");
        return false;
    } else {
        $(".login-box-error").hide();
    }
    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/usercenter/resetpass.json",
        data: "phone=" + phonenum + "&password=" + password + "&passwordt=" + passwordt + "",
        dataType: "json",
        success: function (data) {
            if (data.success) {
                $(".re_psw3").hide();
                $(".re_psw4").show();
            } else {
                $(".login-box-error").show();
                $(".login-box-error>span").html(data.msg);

            }

        },
        error: function () {
            $(".login-box-error").show();
            $(".login-box-error>span").html("密码重置失败");
        }
    });
};

function updateuser(userId) {
    var nickName = $("#nickName").val();
    var sex = $('input:radio[name="sex"]:checked').val();
    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/acount/updateUser.json",
        data: "userId=" + userId + "&nickName=" + nickName + "&sex=" + sex + "",
        dataType: "json",
        success: function (data) {
            if (data.success) {
                $(".unite_success").show();
                setTimeout(function () {
                    $(".unite_success").hide();
                    window.location.reload();
                }, 1000);
            }
        },
        error: function () {
            alert('修改失败,系统异常,请稍后重试');
        }
    });
};



function toLogin(phone, password) {
    var username = phone;
    var passwod = password;
    $.ajax({
        type: "POST",
        url: "http://wwwtest100.cread.com/login/dologin.json",
        data: "uname=" + username + "&passwd=" + passwod + "&remember=0",
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.success) {
                //                window.location.reload();//页面刷新
                loginInfoShow(username);
                //登录成功后设置cookie用于判断
                addcookie("isSign", 1, 1);
                addcookie("username", username, 1);
                //              window.location.href="/acount/userinfo.html";//跳转页面
            }

        }
    });
}

// 显示登录用户
function loginInfoShow(username) {
    $(".login-userName").show()
    $(".login-phone").html(username);
    $(".login-box-frame").hide();
    $(".login-box").hide();
    $(".signIn-login-btn").hide();
    $(".signIn-out-btn").show();
    $(".signIn-img").hide();
    window.location.reload();
}


function changeImage() {
    $('#login_image').attr('src', '/login/generateImage?' + new Date().getTime());
}


function checkpass(pass) {
    $(".error").hide();
    var password = $("#password").val();
    var passwordt = $("#passwordt").val();
    var reg = /^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/;
    if (!reg.test(password) || password.length < 6 || password.length > 16) {
        $(".login-box-error").show();
        $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");

        return false;
    } else {
        $(".login-box-error").hide();
    }
    if (pass == 2) {
        if (!reg.test(passwordt) || password.length < 6 || password.length > 16) {
            $(".login-box-error").show();
            $(".login-box-error>span").html("请输入6-16位字母数字组合的密码");
            return false;
        } else {

            if (passwordt != password) {
                $(".login-box-error").show();
                $(".login-box-error>span").html("两次输入密码不一致!");
                return false;
            } else {
                $(".login-box-error").hide();
            }
        }
    }
}


$(function () {
    // 弹幕初始化
    Editor_usercenter.init();
})

var Editor_usercenter = {
    init: function () {
        var that = this;
        //初始化-具体执行方法
        Editor_usercenter.reader();
    },
    reader: function () {
        var that = this;
        $(document).on("click", ".cbtn", function () {
            var ctoggle = $(this).attr("data-toggle");
            switch (ctoggle) {
                case "":
                    break;

                default:
                    break;
            }
        });
        Editor_usercenter.loginState();
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
    //删除cookie
    removeCookie: function (name) {
        Editor_usercenter.setCookie(name, 1, -1);
    },
    // 登录状态渲染
    loginState: function () {
        var isLogin = Editor_usercenter.getCookie("isSign");
        var username = Editor_usercenter.getCookie("username");
        if (isLogin) {
            Editor_usercenter.loginInfoShow(username);
        }
    },
    // 显示登录用户
    loginInfoShow: function (username) {
        $(".login-userName").show();
        $(".login-phone").html(username);
        $(".login-box-frame").hide();
        $(".login-box").hide();
        $(".signIn-login-btn").hide();
        $(".signIn-out-btn").show();
        $(".signIn-img").hide();
    },
}