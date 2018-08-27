<%--
  Created by IntelliJ IDEA.
  User: flybear
  Date: 18-4-12
  Time: 下午10:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="en">

<head>
    <title>Home</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!-- VENDOR CSS -->
    <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/vendor/linearicons/style.css">
    <link rel="stylesheet" href="assets/vendor/chartist/css/chartist-custom.css">
    <!-- MAIN CSS -->
    <link rel="stylesheet" href="assets/css/main.css">
    <!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
    <link rel="stylesheet" href="assets/css/demo.css">
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
    <!-- ICONS -->
    <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
    <link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">

    <script>
        window.onload = function change() {
            var ii=document.getElementById("change");
            var todaypower=document.getElementById("todaypower");
            <%--todaypower.innerHTML = ${七天发电量.get(6)};--%>
            <%--ii.parentNode.innerHTML = (${七天发电量.get(6)} / ${七天发电量.get(5)} * 100)--%>
            if(${七天发电量.get(6)} > ${七天发电量.get(5)}){
                ii.setAttribute('class','fa fa-caret-up text-success');
            }else{
                ii.setAttribute('class','fa fa-caret-down text-danger');
            }

            for(var i=1;i<=5;i++){
                var span = document.getElementById("status"+i);
                if(span.innerHTML=="正常"){
                    span.setAttribute("class",'label label-success');
                }else{
                    span.setAttribute('class','label label-danger')
                }
            }
        }

    </script><%--改变标签颜色--%>
</head>

<body>
<!-- WRAPPER -->
<div id="wrapper">
    <!-- NAVBAR -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="brand" style="padding: 15px">
            <%--<a href="/visit"><img src="assets/img/logo-dark.png" alt="Klorofil Logo" class="img-responsive logo"></a>--%>
            <a href="/visit"><h1 style="margin-top: 3px">风力发电管理</h1></a>
        </div>
        <div class="container-fluid">
            <%--<div class="navbar-btn">--%>
                <%--<button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>--%>
            <%--</div>--%>
            <form class="navbar-form navbar-left">
                <%--<div class="input-group">--%>
                    <%--<input type="text" value="" class="form-control" placeholder="Search dashboard...">--%>
                    <%--<span class="input-group-btn"><button type="button" class="btn btn-primary">Go</button></span>--%>
                <%--</div>--%>
            </form>
            <%--<div class="navbar-btn navbar-btn-right">--%>
                <%--<a class="btn btn-success update-pro" href="#downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro" title="Upgrade to Pro" target="_blank"><i class="fa fa-rocket"></i> <span>UPGRADE TO PRO</span></a>--%>
            <%--</div>--%>
            <div id="navbar-menu">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/user.png" class="img-circle" alt="Avatar"> <span>${name}</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li><a href="/manege"><i class="lnr lnr-user"></i> <span>进入后台</span></a></li>
                            <%--<li><a href="#"><i class="lnr lnr-envelope"></i> <span>Message</span></a></li>--%>
                            <%--<li><a href="#"><i class="lnr lnr-cog"></i> <span>Settings</span></a></li>--%>
                            <li><a href="/logout"><i class="lnr lnr-exit"></i> <span>退出登录</span></a></li>
                        </ul>
                    </li>
                    <!-- <li>
                        <a class="update-pro" href="#downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro" title="Upgrade to Pro" target="_blank"><i class="fa fa-rocket"></i> <span>UPGRADE TO PRO</span></a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
    <!-- END NAVBAR -->

    <!-- MAIN -->
    <div class="main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
            <div class="container-fluid">
                <!-- OVERVIEW -->
                <div class="panel panel-headline">
                    <div class="panel-heading">
                        <h3 class="panel-title">最新数据</h3>
                        <p class="panel-subtitle">${日期}</p>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="metric">
                                    <span class="icon"><i class="lnr lnr-rocket"></i></span>
                                    <p>
                                        <span class="number">${瞬时功率} MV</span>
                                        <span class="title">瞬时功率</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="metric">
                                    <span class="icon"><i class="fa fa-shopping-bag"></i></span>
                                    <p>
                                        <span class="number">${当天发电量} KWH</span>
                                        <span class="title">当天发电量</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="metric">
                                    <span class="icon"><i class="fa fa-eye"></i></span>
                                    <p>
                                        <span class="number">${风机转速} 圈/分</span>
                                        <span class="title">风机转速</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="metric">
                                    <span class="icon"><i class="fa fa-bar-chart"></i></span>
                                    <p>
                                        <span class="number">${发电小时数} 小时</span>
                                        <span class="title">发电小时数</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="metric">
                                    <span class="icon"><i class="fa fa-bar-chart"></i></span>
                                    <p>
                                        <span class="number">${发电机数量} 台</span>
                                        <span class="title">发电机数量</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-9">
                                <div id="headline-chart" class="ct-chart"></div>
                            </div>
                            <div class="col-md-3">
                                <div class="weekly-summary text-right">
                                    <span id="todaypower" class="number">${七天发电量.get(6)}</span> <span class="percentage"><i id="change" class="fa fa-caret-up text-success"></i> ${发电量变化}</span>
                                    <span class="info-label">发电量较昨日</span>
                                </div>
                                <%--<div class="weekly-summary text-right">--%>
                                    <%--<span class="number">$5,758</span> <span class="percentage"><i class="fa fa-caret-up text-success"></i> 23%</span>--%>
                                    <%--<span class="info-label">Monthly Income</span>--%>
                                <%--</div>--%>
                                <%--<div class="weekly-summary text-right">--%>
                                    <%--<span class="number">$65,938</span> <span class="percentage"><i class="fa fa-caret-down text-danger"></i> 8%</span>--%>
                                    <%--<span class="info-label">Total Income</span>--%>
                                <%--</div>--%>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END OVERVIEW -->
                <div class="row">
                    <div class="col-md-6">
                        <!-- RECENT PURCHASES -->
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="panel-title">状态指标</h3>
                                <div class="right">
                                    <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
                                    <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
                                </div>
                            </div>
                            <div class="panel-body no-padding">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>项目</th>
                                        <th>状态</th>
                                        <th>正常参考值</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>功率</td>
                                        <td><span id="status1" class="label label-success">${功率}</span></td>
                                        <td>1.0-2.0</td>
                                    </tr>
                                    <tr>
                                        <td>电网三相电压</td>
                                        <td><span id="status2" class="label label-warning">${电网三相电压}</span></td>
                                        <td>10-20</td>
                                    </tr>
                                    <tr>
                                        <td>电网频率</td>
                                        <td><span id="status3" class="label label-danger">${电网频率}</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>电网传输</td>
                                        <td><span id="status4" class="label label-success">${电网传输}</span></td>
                                        <td>发电量上下10%</td>
                                    </tr>
                                    <tr>
                                        <td>三相电流</td>
                                        <td><span id="status5" class="label label-success">${三相电流}</span></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-md-6"><span class="panel-note"><i class="fa fa-clock-o"></i> Last 24 hours</span></div>
                                    <div class="col-md-6 text-right"><a href="#" class="btn btn-primary">View All Purchases</a></div>
                                </div>
                            </div>
                        </div>
                        <!-- END RECENT PURCHASES -->
                    </div>
                    <div class="col-md-6">
                        <!-- MULTI CHARTS -->
                        <div class="panel">
                            <div class="panel-heading">
                                <h3 class="panel-title">Projection vs. Realization</h3>
                                <div class="right">
                                    <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
                                    <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div id="visits-trends-chart" class="ct-chart"></div>
                            </div>
                        </div>
                        <!-- END MULTI CHARTS -->
                    </div>
                </div>

            </div>
        </div>
        <!-- END MAIN CONTENT -->
    </div>
    <!-- END MAIN -->
    <div class="clearfix"></div>
    <footer>

    </footer>
</div>
<!-- END WRAPPER -->
<!-- Javascript -->
<script src="assets/vendor/jquery/jquery.min.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
<script src="assets/vendor/chartist/js/chartist.min.js"></script>
<script src="assets/scripts/klorofil-common.js"></script>
<script>
    $(function() {
        var data, options;

        // headline charts
        data = {
            labels: ['${七天日期.get(0)}','${七天日期.get(1)}','${七天日期.get(2)}','${七天日期.get(3)}','${七天日期.get(4)}','${七天日期.get(5)}','${七天日期.get(6)}'],
            series: [
                ${七天发电量},
                // [14, 25, 18, 34, 29, 38, 44],
            ]
        };

        options = {
            height: 300,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showGrid: false
            },
            lineSmooth: false,
        };

        new Chartist.Line('#headline-chart', data, options);


        // visits trend charts
        data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [{
                name: 'series-real',
                data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 750, 900],
            }, {
                name: 'series-projection',
                data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800],
            }]
        };

        options = {
            fullWidth: true,
            lineSmooth: false,
            height: "270px",
            low: 0,
            high: 'auto',
            series: {
                'series-projection': {
                    showArea: true,
                    showPoint: false,
                    showLine: false
                },
            },
            axisX: {
                showGrid: false,

            },
            axisY: {
                showGrid: false,
                onlyInteger: true,
                offset: 0,
            },
            chartPadding: {
                left: 20,
                right: 20
            }
        };

        new Chartist.Line('#visits-trends-chart', data, options);


        // real-time pie chart
        var sysLoad = $('#system-load').easyPieChart({
            size: 130,
            barColor: function(percent) {
                return "rgb(" + Math.round(200 * percent / 100) + ", " + Math.round(200 * (1.1 - percent / 100)) + ", 0)";
            },
            trackColor: 'rgba(245, 245, 245, 0.8)',
            scaleColor: false,
            lineWidth: 5,
            lineCap: "square",
            animate: 800
        });

        var updateInterval = 3000; // in milliseconds

        setInterval(function() {
            var randomVal;
            randomVal = getRandomInt(0, 100);

            sysLoad.data('easyPieChart').update(randomVal);
            sysLoad.find('.percent').text(randomVal);
        }, updateInterval);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    });
</script>
</body>

</html>

