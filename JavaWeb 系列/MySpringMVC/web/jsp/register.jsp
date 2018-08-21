<%--
  Created by IntelliJ IDEA.
  User: flybear
  Date: 18-3-7
  Time: 下午10:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>注册</title>
    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>

    <script type="text/javascript">

        function register() {
            var regu=/01215\d{8}/;
            var id=document.getElementById("id").value;
            var pwd=document.getElementById("pwd").value;
            var re=new RegExp(regu);
            if(re.test(id)) {
                var data = '{"id":"' + id + '","pwd":"' + pwd + '"}';
                $.ajax({
                    type: "post",
                    url: "/register",
                    contentType: "application/json;charset=utf-8",
                    //数据格式是json串,传进一个person
                    // data : '{"week" : "1","major" : "","classes":""}',
                    data: data,

                    success: function (data) {
                        if (confirm(data)) {
                            window.location.href = "/tologin";
                        }
                    }

                });
            }
            else {
                alert("请输入正确的学号！")
            }
        }
    </script>
</head>
<body>
<div align="center">
    <h1>华丽的注册页面！</h1>
</div>
<div align="center">
        <table>
            <tr>
                <td>学号：</td>
                <td><input type="text" id="id"/></td>
            </tr>
            <tr>
                <td>密码：</td>
                <td><input type="text" id="pwd"/></td>
            </tr>
        </table>
        <button onclick="register()">注册</button>
</div>
</body>
</html>
