<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>注册</title>
	<link rel="stylesheet" href="css/style.css" />

	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script><%--导入ajax--%>



</head>

<body>

<div class="register-container">
	<h1>用户注册</h1>
	
	<div class="connect">
		<p>欢迎使用</p>
	</div>
	
	<form action="" method="post" id="registerForm">
		<div>
			<input type="text" id="logname" name="logname" class="username" placeholder="您的用户名" autocomplete="off"/>
		</div>
		<div>
			<input type="password" id="logpwd" name="logpwd" class="password" placeholder="输入密码" oncontextmenu="return false" onpaste="return false" />
		</div>
		<div>
			<input type="password" id="confirm_password" name="confirm_password" class="confirm_password" placeholder="再次输入密码" oncontextmenu="return false" onpaste="return false" />
		</div>
		<%--<div>--%>
			<%--<input type="text" name="phone_number" class="phone_number" placeholder="输入手机号码" autocomplete="off" id="number"/>--%>
		<%--</div>--%>
		<%--<div>--%>
			<%--<input type="email" name="email" class="email" placeholder="输入邮箱地址" oncontextmenu="return false" onpaste="return false" />--%>
		<%--</div>--%>

        <%--<input type="submit" value="注册" />--%>
        <button id="reg" type="submit" onclick="sub()">注 册</button>
	</form>
	<a href="../index.html">
		<button type="button" class="register-tis">已经有账号？</button>
	</a>

</div>


<script src="js/jquery.min.js"></script>
<%--<script src="js/common.js"></script>--%>
<!--背景图片自动更换-->
<script src="js/supersized.3.2.7.min.js"></script>
<script src="js/supersized-init.js"></script>
<!--表单验证-->
<script src="js/jquery.validate.min.js?var1.14.0"></script>

<script type="text/javascript">
    var test="";

    $(function () {
        $("#registerForm").validate({
            rules:{
                logname:{
                    required:true,//必填
                    minlength:3, //最少6个字符
                    maxlength:32,//最多20个字符
                    remote:{
                        url:"http://kouss.com/demo/Sharelink/remote.json",//用户名重复检查，别跨域调用
                        type:"post",
                    },
                },
                logpwd:{
                    required:true,
                    minlength:3,
                    maxlength:32,
                },
                confirm_password:{
                    required:true,
                    minlength:3,
                    equalTo:'.password'
                }
            },
            //错误信息提示
            messages:{
                logname:{
                    required:"必须填写用户名",
                    minlength:"用户名至少为3个字符",
                    maxlength:"用户名至多为32个字符",
                    remote: "用户名已存在",
                },
                logpwd:{
                    required:"必须填写密码",
                    minlength:"密码至少为3个字符",
                    maxlength:"密码至多为32个字符",
                },
                confirm_password:{
                    required: "请再次输入密码",
                    minlength: "确认密码不能少于3个字符",
                    equalTo: "两次输入密码不一致",//与另一个元素相同
                }

            }
        });
    });

    function sub() {

        var test="";
        if(! $("#registerForm").valid()){
            return;
		}

        $.ajax({
            type : "GET",
            url : "/checkreg",
            contentType : "application/json;charset=utf-8",
            data:$('#registerForm').serializeArray(),

            success:function (data) {
                if (confirm(data + "\n是否跳转到登录页面？")) {
                    window.location.href = "../index.html";
                }
            }

        });

    }

    window.onload = function(){
        $(".connect p").eq(0).animate({"left":"0%"}, 600);
        $(".connect p").eq(1).animate({"left":"0%"}, 400);
    };
</script>


</body>
</html>