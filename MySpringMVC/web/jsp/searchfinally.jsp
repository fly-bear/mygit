<%--
  Created by IntelliJ IDEA.
  User: flybear
  Date: 18-3-2
  Time: 下午9:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    <title>后台管理</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="generator" content="" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
    <link href="css/haiersoft.css" rel="stylesheet" type="text/css" media="screen,print" />
    <link href="css/print.css" rel="stylesheet" type="text/css"  media="print" />



    <script src="js/tanchu.min.js"></script>
    <script src="js/simpleAlert.js"></script>




    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>

    <script>
        function foo() {
            alert("想要删除数据吗？想都别想！\n还是找生活委员吧")
        }
    </script>

    <script type="text/javascript">

        var jsonArray;
        var headArray = [];

        function requestJson() { <%--ajax--%>
            var data='{\"week\":\"'+document.getElementById("week").innerHTML+'\",\"major\":\"'+document.getElementById("major").innerHTML+'\",\"classes\":\"'+document.getElementById("classes").innerHTML+'\"}';
            $.ajax({
                type : "post",
                url : "/guestsearch",
                contentType : "application/json;charset=utf-8",
                //数据格式是json串,传进一个person
                // data : '{"week" : "1","major" : "","classes":""}',
                data:data,


                success:function(data){
                    jsonArray=[];
                    jsonArray=data;
                    appendTable(jsonArray);
                }

            });
        }

        function parseHead(oneRow) {
            for ( var i in oneRow) {
                headArray[headArray.length] = i;
            }
        }
        function appendTable() {
            headArray=[];
            parseHead(jsonArray[0]);
            var div = document.getElementById("div1");
            var table=document.getElementById("data");
            var child=table.childNodes;
            for(var i=child.length-1;i>=0;i--){
                table.removeChild(child[i]);
            }
            if(document.getElementById("msg")) {
                div.removeChild(document.getElementById("msg"));
            }
            var thead = document.createElement("tr");
            for ( var count = 0; count < headArray.length; count++) {
                var td = document.createElement("th");
                td.innerHTML = headArray[count];
                thead.appendChild(td);
            }
            var td=document.createElement("th");
            td.innerHTML="<a>操作</a>";
            thead.appendChild(td)
            table.appendChild(thead);
            for ( var tableRowNo = 0; tableRowNo < jsonArray.length; tableRowNo++) {
                var tr = document.createElement("tr");
                for ( var headCount = 0; headCount < headArray.length; headCount++) {
                    var cell = document.createElement("td");
                    cell.innerHTML = jsonArray[tableRowNo][headArray[headCount]];
                    tr.appendChild(cell);
                }
                var index=tr.childNodes[0].innerHTML;
                var cell = document.createElement("td");
                cell.innerHTML = "<a href='javascript:void(0)' onclick='deletedata("+index+")'>删除</a>";
                tr.appendChild(cell);

                table.appendChild(tr);
            }
            div.appendChild(table);
            var msg=document.createElement("p");
            msg.class="msg";
            msg.id="msg";
            msg.innerHTML="共找到"+jsonArray.length+"条记录";
            div.appendChild(msg);
        }

    </script>


    <script src="js/jquery-1.10.1.min.js"></script>
    <script src="js/side.js" type="text/javascript"></script>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->
</head>

<body>

<!-- /wrap_left -->
<!-- picBox -->
<!-- /picBox -->



<!-- wrap_right -->
<div class="wrap_right">
    <header>
        <!-- Header -->
        <div id="Header">
            <!-- Head -->
            <div id="Head">
                <h1 title="后台数据管理系统"><%--img src="images/common/page_ttl.gif" width="398" height="26" alt="后台数据管理系统"--%></h1>
                <script language="javascript">
                    function showmenu(id){id.style.visibility = "visible";}
                    function hidmenu(){UserList.style.visibility = "hidden";}
                    document.onclick = hidmenu;
                </script>
                <div class="user"><a href="javascript:showmenu(UserList)">guest</a>
                    <div id="UserList">
                        <a href="#" onclick="window.opener=null; window.open('','_self');window.close();">退出</a></div>
                </div>
            </div>
            <!-- /Head -->
            <nav>
                <ul id="Navi">

                    <li class="active"><a href=""><img src="images/common/navi03.png" width="26" height="36" alt="合同信息"><span>请假数据</span></a></li>

                </ul>
            </nav>
        </div>
        <!-- /Header -->
    </header>


    <!-- Contents -->
    <div id="Contents">
        <script type="text/javascript">



            $(function(){
                $(".select").each(function(){
                    var s=$(this);
                    var z=parseInt(s.css("z-index"));
                    var dt=$(this).children("dt");
                    var dd=$(this).children("dd");
                    var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};
                    var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};
                    dt.click(function(){dd.is(":hidden")?_show():_hide();});
                    dd.find("a").click(function(){dt.html($(this).html());_hide();});
                    $("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});})})
        </script>




        <!-- TopMain -->
        <div id="TopMain">
            <!-- selectbox -->
            <div class="selectbox floatL mag_r20">
                <span class="sttl">周数：</span>
                <dl class="select" style="width:200px;">
                    <dt id="week">全部</dt>
                    <dd><ul>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><  <script src="js/tanchu.min.js"></script>
    <script src="js/simpleAlert.js"></script>



    <script>

        var result;
        function display(data) {
            var ul = document.createElement("ul");
            ul.style="margin:50px;padding:10px";
            for(var key in data[0]) {
                var li = document.createElement("li");
                li.innerHTML = key+" : "+data[0][key];
                ul.appendChild(li)
            }
            result=ul.outerHTML;
            detail(result);

        }

        function get(spcid) {
            $.ajax({
                type:"GET",
                url:"/detail",
                traditional:true,
                data:{
                    "spcid":spcid
                },
                success:function(data){
                    display(data);
                }
            });
        }
        function detail(content) {
            //单次单选弹框
            var onlyChoseAlert = simpleAlert({
                "content":content,
                "buttons":{
                    "确定":function () {
                        onlyChoseAlert.close();
                    }
                }
            })
        }

    </script>
a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">全部</a></li>
                    </ul></dd></dl>
            </div>
            <!-- /selectbox -->

            <!-- selectbox -->
            <div class="selectbox floatL mag_r20">
                <span class="sttl">专业：</span>
                <dl class="select" style="width:200px;">
                    <dt id="major">全部</dt>
                    <dd><ul>
                        <li><a href="#">自动化</a></li>
                        <li><a href="#">自动化zy</a></li>
                        <li><a href="#">电气</a></li>
                        <li><a href="#">电气zy</a></li>
                        <li><a href="#">全部</a></li>
                    </ul></dd></dl>
            </div>

            <div class="selectbox floatL mag_r20">
                <span class="sttl">班级：</span>
                <dl class="select" style="width:200px;">
                    <dt id="classes">全部</dt>
                    <dd><ul>
                        <li><a href="#">1501</a></li>
                        <li><a href="#">1502</a></li>
                        <li><a href="#">1503</a></li>
                        <li><a href="#">1504</a></li>
                        <li><a href="#">1505</a></li>
                        <li><a href="#">1506</a></li>
                        <li><a href="#">全部</a></li>
                    </ul></dd></dl>
            </div>
            <!-- /selectbox -->

            <!-- btn_box -->
            <div class="btn_box floatL"><input name="" type="button" value="查询" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="requestJson();"></div>
            <!-- /btn_box -->
        </div>
        <!-- /TopMain -->



        <!-- MainForm -->
        <div id="MainForm">
            <div id="div1" class="form_boxA">

                <h2>请假名单</h2>
                <table id="data"></table>

            </div>
        </div>
        <!-- /MainForm -->


        <!-- PageNum -->
        <ul id="PageNum">
            <li><a href="">首页</a></li>
            <li><a href="">上一页</a></li>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">5</a></li>
            <li><a href="">6</a></li>
            <li><a href="">下一页</a></li>
            <li><a href="">尾页</a></li>
        </ul>
        <!-- /PageNum -->
    </div>
    <!-- /Contents -->

    <!-- /footer -->
    <!-- /footer -->

</div>
<!-- /wrap_right -->
</body>
</html>

