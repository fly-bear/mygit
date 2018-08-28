<%--
  Created by IntelliJ IDEA.
  User: 我不是熊
  Date: 2018/8/26
  Time: 下午 2:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <title>ueditor demo</title>
    <script src="/blog/js/jquery-1.2.6.pack.js" type="text/javascript"></script>
    <script src="/blog/js/jquery.messager.js" type="text/javascript"></script>


    <script type="text/javascript">
        //业务指南上传图片
        function tijiao(){
            var node =document.getElementById("fil").files.length;
            if(node == 0){
                jQuery.messager.alert("提示", "没有选择业务类型，无法上传文件！", "info");
            }else{
                var form = new FormData(document.getElementById("ss"));
                $.ajax({
                    url : '${pageContext.request.contextPath}/businessGuide/insertImg.jt?id='+node.id,
                    data : form,
                    type : 'post',
                    processData:false,
                    contentType:false,
                    success : function(data){
                        var data = JSON.parse(data);
                        if(data.b==true){
                            $("#sql1").val(data.desc);
                            $("#sql2").val(data.desc);
                            //上传时回显图片
                            $("#deli").show();
                            $("#flowChartDiv").html("<img src='${pageContext.request.contextPath}/"+data.desc+"' style='width:200px; height:200px;'></img>");
                            //$.messager.alert("提示","图片上传成功！");
                        }else if(data.b==false){
                            $.messager.alert("提示",data.desc);
                        }
                    },
                    error : function(data){
                        $.messager.alert("提示",data.error);
                    }
                });
            }
        }
    </script>

</head>

<body>
<form name="dateupload" method="post" enctype="multipart/form-data" id="ss">
    <table width="80%" class="yewzn-tab" id="st">
        <td width='12%' class='gi'>经办流程图:</td>
        <td colspan="3">
            <input type="file" name="file" id="fil">
            <button type="button" onclick="tijiao()" class="yewzn-but-change">提交</button>
            <input name="flowChart" type="hidden"  id="sql2">
        </td>
    </table>
</form>
</body>

</html>

