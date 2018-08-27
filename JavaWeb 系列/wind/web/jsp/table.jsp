<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html class="no-js">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>管理员登录</title>
  <meta name="description" content="这是一个 table 页面">
  <meta name="keywords" content="table">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="renderer" content="webkit">
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <link rel="icon" type="image/png" href="assets/i/favicon.png">
  <link rel="apple-touch-icon-precomposed" href="assets/i/app-icon72x72@2x.png">
  <meta name="apple-mobile-web-app-title" content="Amaze UI" />
  <link rel="stylesheet" href="assets/css/amazeui.min.css"/>
  <link rel="stylesheet" href="assets/css/admin.css">

  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script><%--导入ajax--%>

  <script type="text/javascript"><%--生成表格--%>

      var jsonArray=[];
      var headArray = [];

      function requestJson() { <%--ajax--%>
          // var data='{\"week\":\"'+document.getElementById("week").innerHTML+'\",\"major\":\"'+document.getElementById("major").innerHTML+'\",\"classes\":\"'+document.getElementById("classes").innerHTML+'\"}';
          $.ajax({
              type : "post",
              url : "/getall",
              contentType : "application/json;charset=utf-8",
              //数据格式是json串,传进一个person
              // data : '{"week" : "1","major" : "","classes":""}',
              data:'{}',


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
          // var div = document.getElementById("div1");
          var table=document.getElementById("data");
          table.innerText="";
          var head=document.createElement("thead");
          table.appendChild(head);
          var thead = document.createElement("tr");
          for ( var count = 0; count < headArray.length; count++) {
              var td = document.createElement("th");
              td.setAttribute("style","text-align:center;vertical-align:middle;");
              td.innerHTML = headArray[count];
              thead.appendChild(td);
          }
          var td = document.createElement("th");
          td.setAttribute("style","text-align:center;vertical-align:middle;");
          td.innerHTML = "操作";
          thead.appendChild(td);
          head.appendChild(thead);
          var body=document.createElement("tbody");
          table.appendChild(body);
          var flag=1;
          for ( var tableRowNo = 0; tableRowNo < jsonArray.length; tableRowNo++) {
              var tr = document.createElement("tr");
              for ( var headCount = 0; headCount < headArray.length; headCount++) {
                  var cell = document.createElement("td");
                  cell.innerHTML = jsonArray[tableRowNo][headArray[headCount]];
                  cell.setAttribute("style","text-align:center;vertical-align:middle;");
                  tr.appendChild(cell);
              }
              var index=tr.childNodes[0].innerHTML;
              var cell = document.createElement("td");
              cell.setAttribute("style","text-align:center;vertical-align:middle;");
              cell.innerHTML = '<div class="am-btn-toolbar">'+' <div class="am-btn-group am-btn-group-xs">'+
                    ' <button type="button" class="am-btn am-btn-default am-btn-xs am-text-secondary" onclick="update(this,'+flag+','+index+')"><span class="am-icon-pencil-square-o"></span> 编辑</button>'+
                    ' <button type="button" class="am-btn am-btn-default am-btn-xs am-text-danger" onclick="del('+index+')"><span class="am-icon-trash-o"></span> 删除</button></div></div>';
              tr.appendChild(cell);
              body.appendChild(tr);
              flag++;
          }
          // div.appendChild(table);
          var msg=document.getElementById("count");
          msg.innerHTML="共找到"+jsonArray.length+"条记录";
      }

  </script><%--生成表格--%>
</head>
<body onload="requestJson()">
<!--[if lte IE 9]>
<p class="browsehappy">你正在使用<strong>过时</strong>的浏览器，Amaze UI 暂不支持。 请 <a href="http://browsehappy.com/" target="_blank">升级浏览器</a>
  以获得更好的体验！</p>
<![endif]-->

<header class="am-topbar admin-header">
  <div class="am-topbar-brand">
    <h1>后台管理</h1>
  </div>

  <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>

  <div class="am-collapse am-topbar-collapse" id="topbar-collapse">

    <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
      <li class="am-dropdown" data-am-dropdown>
        <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
          <span class="am-icon-users"></span> ${name} <span class="am-icon-caret-down"></span>
        </a>
        <ul class="am-dropdown-content">
          <li><a href="/visit"><span class="am-icon-user"></span> 返回主页</a></li>
          <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
          <li><a href="/logout"><span class="am-icon-power-off"></span> 退出登录</a></li>
        </ul>
      </li>
      <li><a href="javascript:;" id="admin-fullscreen"><span class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li>
    </ul>
  </div>
</header>

<div class="am-cf admin-main">

  <!-- content start -->
  <div class="admin-content">

    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">数据</strong> / <small>Data</small></div>
    </div>

    <div class="am-g">
      <div class="am-u-md-6 am-cf">
        <div class="am-fl am-cf">
          <div class="am-btn-toolbar am-fl">
            <div class="am-btn-group am-btn-group-xs">
              <button type="button" class="am-btn am-btn-default" onclick="addnew()"><span class="am-icon-plus"></span> 新增</button>
              <%--<button type="button" class="am-btn am-btn-default"><span class="am-icon-trash-o"></span> 删除</button>--%>
            </div>
          </div>
        </div>
      </div>
      <div class="am-u-md-3 am-cf">
        <div class="am-fr">
          <div class="am-input-group am-input-group-sm">
            <input type="date" class="am-form-field" id="searchdate">
                <span class="am-input-group-btn">
                  <button class="am-btn am-btn-default" type="button" onclick="search()">搜索</button>
                </span>
          </div>
        </div>
      </div>
    </div>

    <div class="am-g">
      <div class="am-u-sm-12">
        <form class="am-form">
          <table id="data" class="am-table am-table-striped am-table-hover table-main">
            <thead>
              <%--<tr>--%>
                <%--<th class="table-check"><input type="checkbox" /></th><th class="table-id">ID</th><th class="table-title">标题</th><th class="table-type">类别</th><th class="table-author">作者</th><th class="table-date">修改日期</th><th class="table-set">操作</th>--%>
              <%--</tr>--%>
          </thead>
          <tbody>
            <%--<tr>--%>
              <%--<td><input type="checkbox" /></td>--%>
              <%--<td>1</td>--%>
              <%--<td><a href="#">Business management</a></td>--%>
              <%--<td>default</td>--%>
              <%--<td>测试1号</td>--%>
              <%--<td>2014年9月4日 7:28:47</td>--%>
              <%--<td>--%>
                <%--<div class="am-btn-toolbar">--%>
                  <%--<div class="am-btn-group am-btn-group-xs">--%>
                    <%--<button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span> 编辑</button>--%>
                    <%--<button class="am-btn am-btn-default am-btn-xs"><span class="am-icon-copy"></span> 复制</button>--%>
                    <%--<button class="am-btn am-btn-default am-btn-xs am-text-danger"><span class="am-icon-trash-o"></span> 删除</button>--%>
                  <%--</div>--%>
                <%--</div>--%>
              <%--</td>--%>
            <%--</tr>--%>

          </tbody>
        </table>
          <div id="count" class="am-cf">
  共 0 条记录
  <div class="am-fr">
    <ul class="am-pagination">
      <li class="am-disabled"><a href="#">«</a></li>
      <li class="am-active"><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">»</a></li>
    </ul>
  </div>
</div>
          <hr />
        </form>
      </div>

    </div>
  </div>
  <!-- content end -->
</div>


<!--[if lt IE 9]>
<script src="http://libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>
<script src="http://cdn.staticfile.org/modernizr/2.8.3/modernizr.js"></script>
<script src="assets/js/polyfill/rem.min.js"></script>
<script src="assets/js/polyfill/respond.min.js"></script>
<script src="assets/js/amazeui.legacy.js"></script>
<![endif]-->

<!--[if (gte IE 9)|!(IE)]><!-->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/amazeui.min.js"></script>
<!--<![endif]-->
<script src="assets/js/app.js"></script>

<script>
  function del(id) {
      $.ajax({
          type : "post",
          url : "/deletemsg",
          // contentType : "application/json;charset=utf-8",
          //数据格式是json串,传进一个person
          // data : '{"week" : "1","major" : "","classes":""}',
          data:{"id":id},


          success:function(data) {
              alert(data)
              requestJson();
          }
      });
  }
</script><%--删除--%>

<script>
    function update(obj,x,id){
        var table = document.getElementById("data");
        for(var i=0;i<table.rows[x].cells.length-1;i++){
            var text = table.rows[x].cells[i].innerHTML;
            table.rows[x].cells[i].innerHTML = '<input class="input" name="input'+ x + '" type="text" value=""/>';
            var input = document.getElementsByName("input" + x);
            input[i].value = text;
            input[0].focus();
            input[0].select();
        }
        obj.innerHTML = "确定";
        obj.onclick = function onclick(event) {
            update_success(this,x,id)
        };
    }
    function update_success(obj,x,id){
        var arr = [];
        var table = document.getElementById("data");
        var input = document.getElementsByName("input" + x);
        for(var i=0;i<table.rows[x].cells.length-1;i++){
            var text = input[i].value;
            arr.push(text);
        }
        arr[0]=id;
        //把值赋值给表格，不能在取值的时候给，会打乱input的个数
        for(var j=0;j<arr.length;j++){
            table.rows[x].cells[j].innerHTML = arr[j];
        }
        //回到原来状态
        obj.innerHTML = "<span class=\"am-icon-pencil-square-o\"></span> 编辑";
        obj.onclick = function onclick(event) {
            update(this,x,id)
        };
        change(arr);
    }

    function change(arrdata) {
        $.ajax({
            type : "post",
            url : "/changemsg",
            // contentType : "application/json;charset=utf-8",
            //数据格式是json串,传进一个person
            // data : '{"week" : "1","major" : "","classes":""}',
            data:{"data":arrdata},


            success:function(data) {
                alert(data)
                requestJson();
            }
        });

    }
</script><%--修改--%>

<script>
  var myid;
  function addnew() {
      var body=document.getElementById("data").childNodes[1];
      var tr = document.createElement("tr");
      var mb = body.childNodes[0].childNodes;
      for ( var headCount = 0; headCount < body.childNodes[0].childElementCount; headCount++) {
          var cell = document.createElement("td");
          cell.innerHTML = mb[headCount].innerHTML;
          cell.setAttribute("style","text-align:center;vertical-align:middle;");
          tr.appendChild(cell);
      }
      <%
          java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyy-MM-dd");
      java.util.Date currentTime_1 = new java.util.Date();

  %>
      tr.childNodes[1]= '<%=formatter.format(currentTime_1)%>';
      tempsign('<%=formatter.format(currentTime_1)%>');
      var thisid=myid;
      tr.childNodes[0].innerHTML=thisid;
      tr.childNodes[tr.childElementCount-1].innerHTML='<div class="am-btn-toolbar">'+' <div class="am-btn-group am-btn-group-xs">'+
          ' <button type="button" class="am-btn am-btn-default am-btn-xs am-text-secondary" onclick="update(this,'+(body.childElementCount+1)+','+thisid+')"><span class="am-icon-pencil-square-o"></span> 编辑</button>'+
          ' <button type="button" class="am-btn am-btn-default am-btn-xs am-text-danger" onclick="del('+thisid+')"><span class="am-icon-trash-o"></span> 删除</button></div></div>';

      body.appendChild(tr);
      update(tr.childNodes[tr.childElementCount-1],body.childElementCount,thisid);

  }

  function tempsign(date) {
      var id;
      $.ajax({
          type : "post",
          url : "/tempsign",
          async: false,
          // contentType : "application/json;charset=utf-8",
          data:{"data":date},

          success:function(data) {
              var test=data;
              if(data=="failed"){
                  return;
              }
              myid=data;
          }

      });

  }
</script>

<script>
  function search() {
      var date=document.getElementById("searchdate").value;
      // console.log(date)
      $.ajax({
          type : "post",
          url : "/search",
          async: false,
          // contentType : "application/json;charset=utf-8",
          data:{"data":date},

          success:function(data) {
              jsonArray = data;
              appendTable(jsonArray);
          }
      });

  }
</script>


</body>
</html>
