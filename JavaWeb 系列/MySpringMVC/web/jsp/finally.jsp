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
    <link rel="stylesheet" href="css/simpleAlert.css">

    <script src="js/tanchu.min.js"></script>
    <script src="js/simpleAlert.js"></script>
    <script src="js/JsonExportExcel.min.js"></script>


    <script>


        function getout() {
            var data='{\"spcid\":\"ALL\",' +
                '\"week\":\"'+document.getElementById("week").innerHTML+'\",' +
                '\"major\":\"'+document.getElementById("major").innerHTML+'\",' +
                '\"classes\":\"'+document.getElementById("classes").innerHTML+'\",' +
                '\"isleft\":\"'+document.getElementById("isleft").innerHTML+'\",' +
                '\"isinlib\":\"'+document.getElementById("isinlib").innerHTML+'"}';
            $.ajax({
                type:"POST",
                url:"/detail",
                contentType : "application/json;charset=utf-8",
                traditional:true,
                data:data,
                success:function(data){
                    outfile(data);
                }
            });
        }

        function outfile(data) {

            var option = {};

            option.fileName = '离校登记表';
            option.datas = [
                {
                    sheetData: data,
                    sheetName: 'sheet',
                    sheetHeader: ['周数','年级','专业','班级','学号','姓名','园区','宿舍','目的地','请假原因','离校时间','返校时间','是否离汉','是否武汉库','本人联系方式',
                        '紧急联系人','紧急联系人电话','家庭联系人','家庭联系人电话']
                },
            ];
            var toExcel = new ExportJsonExcel(option);
            toExcel.saveExcel();
        }

    </script><%--导出--%>

    <script>

        var result;
        function display(data) {
            var ul = document.createElement("ul");
            ul.style="margin:30px;padding:10px";
            for(var key in data[0]) {
                var li = document.createElement("li");
                li.innerHTML = key+" : "+data[0][key];
                ul.appendChild(li)
            }
            result=ul.outerHTML;
            detail(result);

        }

        function get(spcid) {
            var data='{\"spcid\":\"'+spcid+'\",' +
                '\"week\":\"'+document.getElementById("week").innerHTML+'\",' +
                '\"major\":\"'+document.getElementById("major").innerHTML+'\",' +
                '\"classes\":\"'+document.getElementById("classes").innerHTML+'\",' +
                '\"isleft\":\"'+document.getElementById("isleft").innerHTML+'\",' +
                '\"isinlib\":\"'+document.getElementById("isinlib").innerHTML+'"}';
            $.ajax({
                type:"POST",
                contentType : "application/json;charset=utf-8",
                url:"/detail",
                traditional:true,
                data:data,
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

    </script><%--详细信息--%>


    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>


    <script type="text/javascript">
        function openstatu() {
            if (confirm("确定允许？")){
                $.ajax({
                    type: "post",
                    url: "/changestatu",
                    contentType: "application/json;charset=utf-8",
                    // dataType:"text",
                    scriptCharset: 'utf-8',
                    data: '{"statu":"1"}',

                    success: function (data) {
                        alert(data);
                    }
                });
            }
        }

        function closestatu() {
            if (confirm("确定关闭？")){
                $.ajax({
                    type: "post",
                    url: "/changestatu",
                    contentType: "application/json;charset=utf-8",
                    scriptCharset: 'utf-8',
                    // dataType:"text",

                    data: '{"statu":"0"}',

                    success: function (data) {
                        alert(data);
                    }
                });
            }
        }
    </script><%--打开/关闭提交允许--%>

    <script>

        function changecheck() {
            //给全选按钮加上点击事件
            var xz = document.getElementById("checkall").checked;
            var others=document.getElementsByName("checkbox");
            for(var i=0;i<others.length;i++){
                others[i].checked=xz;
            }
        }
    </script><%--全选--%>
    <script type="text/javascript">
        function reason() {
            var temp = window.prompt("请输入理由：", "");
            if (temp != null){
                var myreason = "不批准：" + temp;
                approve(myreason);
            }
        }
        function approve(statu) {
            var box=document.getElementsByName("checkbox");
            var spcid=new Array();
            for( var i=0;i<box.length;i++) {
                if (box[i].checked == true) {
                spcid.push(box[i].value)
            }
            }
            $.ajax({
                type:"GET",
                url:"/approve",
                traditional:true,
                data:{
                    "spcid":spcid,
                    "statu":statu
                },
                success:function(data){
                    alert(data);
                    requestJson();
                }
            });
        }
    </script><%--审批--%>

    <script type="text/javascript">

        function deletedata(index){
            if(confirm("确定删除这条数据？")) {
                var data = '{"index":"' + index.toString() + '"}';
                $.ajax({
                    type: "post",
                    url: "/delete",
                    contentType: "application/json;charset=utf-8",
                    // dataType:"text",

                    data: data,


                    success: function (data) {
                        if (data == "ojbk") {
                            alert("删除成功！");
                            requestJson();
                        } else {
                            alert(data);
                        }
                    }
                });
            }
        }
    </script><%--删除数据--%>


    <script type="text/javascript">

        var jsonArray;
        var headArray = [];

        function requestJson() { <%--ajax--%>
            var data='{\"spcid\":\"ALL\",' +
                '\"week\":\"'+document.getElementById("week").innerHTML+'\",' +
                '\"major\":\"'+document.getElementById("major").innerHTML+'\",' +
                '\"classes\":\"'+document.getElementById("classes").innerHTML+'\",' +
                '\"isleft\":\"'+document.getElementById("isleft").innerHTML+'\",' +
                '\"isinlib\":\"'+document.getElementById("isinlib").innerHTML+'"}';
            $.ajax({
                type : "post",
                url : "/search",
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
            td.innerHTML="<a name='approve'>审批</a>"+"<br />"+"<input type=\"checkbox\" id=\"checkall\" onclick='changecheck();'/>全选<br />";
            thead.appendChild(td)
            var td=document.createElement("th");
            td.innerHTML="<a name='delete'>操作</a>";
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
                cell.innerHTML = "<input class='qx' type='checkbox' name='checkbox' value='"+index+"'></input>";
                tr.appendChild(cell);
                var cell = document.createElement("td");
                cell.innerHTML = "<a href='javascript:void(0)' onclick='deletedata("+index+")'>删除</a>"+" / <a href='javascript:void(0)' onclick='get("+index+")'>详细</a>";
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

    </script><%--生成表格--%>


    <script src="js/jquery-1.10.1.min.js"></script>
    <script src="js/side.js" type="text/javascript"></script>

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
    <![endif]-->
</head>

<body onload="requestJson()">

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
                <div class="user"><a href="javascript:showmenu(UserList)">${logname}</a>
                    <div id="UserList"><a href="">修改</a>
                        <a href="/tologin">注销</a>
                        <a href="#" onclick="window.opener=null; window.open('','_self');window.close();">退出</a></div>
                </div>
            </div>
            <!-- /Head -->
            <nav>
                <ul id="Navi">

                    <li class="active"><a href=""><img src="images/common/navi03.png" width="26" height="36" alt="请假数据"><span>请假数据</span></a></li>

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
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">6</a></li>
                        <li><a href="#">7</a></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">9</a></li>
                        <li><a href="#">10</a></li>
                        <li><a href="#">11</a></li>
                        <li><a href="#">12</a></li>
                        <li><a href="#">13</a></li>
                        <li><a href="#">14</a></li>
                        <li><a href="#">15</a></li>
                        <li><a href="#">16</a></li>
                        <li><a href="#">17</a></li>
                        <li><a href="#">18</a></li>
                        <li><a href="#">19</a></li>
                        <li><a href="#">20</a></li>
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
            <div class="selectbox floatL mag_r20">
                <span class="sttl">是否离汉：</span>
                <dl class="select" style="width:200px;">
                    <dt id="isleft">全部</dt>
                    <dd><ul>
                        <li><a href="#">是</a></li>
                        <li><a href="#">否</a></li>
                        <li><a href="#">全部</a></li>
                    </ul></dd></dl>
            </div>
            <div class="selectbox floatL mag_r20">
                <span class="sttl">是否武汉库：</span>
                <dl class="select" style="width:200px;">
                    <dt id="isinlib">全部</dt>
                    <dd><ul>
                        <li><a href="#">是</a></li>
                        <li><a href="#">否</a></li>
                        <li><a href="#">全部</a></li>
                    </ul></dd></dl>
            </div>
            <!-- /selectbox -->

            <!-- btn_box -->
            <div class="btn_box floatL"><input name="" type="button" value="查询" style="margin: 3px" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="requestJson();"></div>
            &nbsp;
            <div class="btn_box floatL"><input name="" type="button" value="导出" style="margin: 3px" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="getout();"></div>
            &nbsp;
            <div style="float: right" class="btn_box floatL"><input name="" type="button" value="允许提交" style="background-color: cornflowerblue;margin: 3px" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="openstatu();"></div>
            &nbsp;
            <div style="float: right" class="btn_box floatL"><input name="" type="button" value="关闭提交" style="background-color: cornflowerblue;margin: 3px" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="closestatu();"></div>
            <!-- /btn_box -->
        </div>
        <!-- /TopMain -->



        <!-- MainForm -->
        <div id="MainForm">
            <div id="div1" class="form_boxA">

                <h2>请假名单</h2>
                <div  style="float: right" class="btn_box floatL"><input style="background-color:darksalmon;margin: 3px" name="" type="button" value="不批准" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="reason()"></div>
                <div  style="float: right" class="btn_box floatL"><input style="background-color:darksalmon;margin: 3px" name=""  type="button" value="签假条" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="approve('签假条')"></div>
                <div  style="float: right" class="btn_box floatL"><input style="background-color:darksalmon;margin: 3px" name=""  type="button" value="核实" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="approve('核实')"></div>
                <div  style="float: right" class="btn_box floatL"><input style="background-color:darksalmon;margin: 3px" name=""  type="button" value="批准" onmousemove="this.className='input_move'" onmouseout="this.className='input_out'" onclick="approve('批准')"></div>
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

