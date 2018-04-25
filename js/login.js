
function showLogin()
{
    $(".login_shadow").show();
}

$(document).ready(function(){
    $("body").keydown(function() {
        if (event.keyCode == "13") {//keyCode=13是回车键
            dologin();
        }
    });

    $(".read_close").click(function(){
        $(".shadowUp").fadeOut();
    });
})

function dologin()
{
    var username = $(".use_name input").val();
    var passwod = $(".password input").val();

    if(username === null || $.trim(username).length == 0||passwod === null || $.trim(passwod).length == 0){
        $(".wrong").html('请输入用户名和密码');
        $(".wrong").show();
        return;
    }
    var rem_login= $(".rem_psw input").is(":checked");
    var remember = rem_login?1:0;

    var target = $("#login_target").val();

    $.ajax({
        type:"POST",
        url:"/login/dologin.json",
        data:"uname="+username+"&passwd="+passwod+"&remember="+remember,
        dataType:"json",
        success:function (data)
        {
            if(data.success)
            {
                if(target){
                    window.location.href=target;
                }else{
                    window.location.reload();//页面刷新
                }
            }
            else
            {
                $(".wrong").html(data.msg);
                $(".wrong").show();
            }
        },
        error:function () {
            $(".wrong").html("系统错误，请稍后重试");
            $(".wrong").show();
        }
    });
}


