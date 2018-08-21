/**
 * 作者信息：博瑞科技 秦帅 2017年9月12日创建，时间控件的返回格式为 年-月-日 时:分 时为24小时制。
 */
//封装插件
(function(root,factory,plug){
    root[plug] = factory(root.jQuery,plug);
})(window,function($,plug){
    var __def__ = {
        start:"",
        end:null,
        level:"YMD",
        less:false
    };
    var __prop__ = {
        _init : function(){
            var start = $(this.start);
            var end = $(this.end);
            var level = this.level;
            var less = this.less;
            borainTimeChoiceEvent(start,end,level,less);
        }
    };
    $.fn[plug] = function(options){
        $.extend(this,__def__,options,__prop__); //将后面三个对象的方法属性以及值合并后赋给this对象。
        this._init(); //this对象拥有了_init方法，进行执行
    };
    return function(options){
        var dom = options.dom;
        $(dom)[plug].call($(dom),options);//执行插件功能函数，将this指向$(dom)这个代理对象，并传入参数。
    }
},"borainTimeChoice");
//加载结构
function onLoadTimeChoiceDemo(){
    var demo = '<div class="borain-timeChoice-body">'+
        '<div class="borain-timeChoiceMask fl"></div>'+
        '<div class="borain-timeChoice">'+
        '<div class="choiceBox">'+
        '<div class="yearBox">'+
        '<a class="btn back" href="javascript:void(0);"><i class="fa fa-angle-left" aria-hidden="true"></i></a>'+
        '<div class="showBox">'+
        '<a class="year" href="javascript:void(0);"></a> - <a class="month" href="javascript:void(0);"></a>'+
        '</div><a class="btn forward" href="javascript:void(0);"><i class="fa fa-angle-right" aria-hidden="true"></i></a></div>'+
        '<div class="choiceDayBox beChoice">'+
        '<div class="week">'+
        '<span>日</span>'+
        '<span>一</span>'+
        '<span>二</span>'+
        '<span>三</span>'+
        '<span>四</span>'+
        '<span>五</span>'+
        '<span>六</span>'+
        '</div>'+
        '<div class="day">'+
        '<!--加载日期-->'+
        '</div>'+
        '</div>'+
        '<div class="choiceYearBox beChoice">'+
        '<div class="yearTitle clearFix">'+
        '<a class="btn up fl" href="javascript:void(0);"><i class="fa fa-angle-up" aria-hidden="true"></i></a>'+
        '<span class="fl"><em></em> - <em></em></span>'+
        '<a class="btn down fr" href="javascript:void(0);"><i class="fa fa-angle-down" aria-hidden="true"></i></a>'+
        '</div>'+
        '<div class="year">'+
        '<!--加载年-->'+
        '</div>'+
        '</div>'+
        '<div class="choiceMinBox beChoice">'+
        '<div class="month">'+
        '<!--<span><em>01</em>月</span>-->'+
        '</div>'+
        '</div>'+
        '<div class="tipBox">博瑞科技时间选择控件</div>'+
        '<div class="operateBox clearFix">'+
        '<a class="cancel fl" href="javascript:void (0);">取消</a>'+
        '<a class="submit fr" href="javascript:void (0);">确认</a>'+
        '</div>'+
        '</div>'+
        '<div class="revealBox">'+
        '<div class="titleBox">当前选择</div>'+
        '<div class="nowBox clearFix">'+
        '<div class="nowDay fl">'+
        '<em></em>'+
        '<span>日</span>'+
        '</div>'+
        '<div class="nowMonth fr">'+
        '<em></em>'+
        '<span>月</span>'+
        '</div>'+
        '<div class="nowYear fr">'+
        '<em></em>'+
        '<span>年</span>'+
        '</div>'+
        '</div>'+
        '<div class="timeBox">'+
        '<div class="hourBox">'+
        '<a class="add" href="javascript:void (0);"><i class="fa fa-angle-up" aria-hidden="true"></i></a>'+
        '<span></span>'+
        '<a class="minus" href="javascript:void (0);"><i class="fa fa-angle-down" aria-hidden="true"></i></a>'+
        '</div>'+
        '<div class="punctuation">'+
        '<em></em>'+
        '<em></em>'+
        '</div>'+
        '<div class="minBox">'+
        '<a class="add" href="javascript:void (0);"><i class="fa fa-angle-up" aria-hidden="true"></i></a>'+
        '<span></span>'+
        '<a class="minus" href="javascript:void (0);"><i class="fa fa-angle-down" aria-hidden="true"></i></a>'+
        '</div>'+
        '</div>'+
        '<div class="operateBox clearFix">'+
        '<a class="cancel fl" href="javascript:void (0);">取消</a>'+
        '<a class="submit fr" href="javascript:void (0);">确认</a>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';
    $("body").append(demo);
}
//时间选择控件显示与定位
function borainTimeChoiceShow(obj){
    var mask = $(".borain-timeChoiceMask");
    var box = $(".borain-timeChoice");
    var bodyWidth = $("body").width();
    var boxWidth = box.width();
    var objWidth = obj.width()+parseInt(obj.css("border-left"))+parseInt(obj.css("border-right"))+parseInt(obj.css("padding-left"))+parseInt(obj.css("padding-right"));
    var objHeight = obj.height()+parseInt(obj.css("border-top"))+parseInt(obj.css("border-bottom"))+parseInt(obj.css("padding-top"))+parseInt(obj.css("padding-bottom"));
    var objOffsetX = obj.offset().left;
    var objOffsetY = obj.offset().top;
    if(boxWidth<bodyWidth-objOffsetX){
        box.css({
            top:objOffsetY+objHeight,
            left:objOffsetX
        });
    }else {
        box.css({
            top:objOffsetY+objHeight,
            left:objOffsetX+objWidth-boxWidth
        });
    }
    mask.fadeIn(100);
    box.fadeIn(100);
    //计算位置
}
//时间选择器初始化
function borainTimeChoiceEvent(start,end,level,less){
    console.log(start,end,level,less);
    if(start==""||start==null||start=="init {}"){
        alert("请设置起始时间对象");
    }else {
        //设置输入框设为只读
        start.attr("readonly","true").css("cursor","pointer");
        //添加控件图标

        //判断是否有结束时间对象,如果end是空的，说明这是一个单值时间选择
        if(end==""||end==null){
            //判断开始时间对象是否有值，如果没有说明是新的需要赋当前时间为初始值，如果有就说明是修改值，提取原来的值并赋值
            start.unbind("click").click(function () {
                if(start.val()==""||start.val()==null){
                    notEndNewTimeDateEvent(start,level,less);
                }else {
                    notEndOldTimeDateEvent(start,level,less);
                }
                notEndTimeChoiceSubmit(start);
            });
        }else {
            //含有结束时间对象，这是一个时间段选择
            //设置结束时间输入框设为只读
            end.attr("readonly","true").css("cursor","pointer");
            start.unbind("click").click(function () {
                hasEndStartTimeDateEvent(start,end,level,less);
            });
            end.unbind("click").click(function () {
                hasEndEndTimeDateEvent(start,end,level,less);
            });
        }
        borainTimeChoiceCancel(start,end);
    }
}
//不含有end对象且新赋值
function notEndNewTimeDateEvent(obj,level,less){
    var box = $(".borain-timeChoice");
    var tip = box.find(".choiceBox .tipBox");
    //判断级别，按照对应级别将级别的值作为Class给控件，方便提取对应的css进行设置
    //首先清除Class
    box.removeClass("YM YMD HM H");
    //然后加上Class
    if(level==""||level=="YMD"){
        //表示这是年月日选择（为空时默认的年月日选择）;
        box.addClass("YMD");
        tip.text("请选择至天");
    }else{
        if(level=="YM"){
            tip.text("请选择年月");
        }else if(level=="H"){
            tip.text("请选择到小时，分钟不可选");
        }else {
            tip.text("请选择到时分");
        }
        box.addClass(level);
    }
    var nowDate = new Date();
    var year,month,day,hour,minute;
    year = nowDate.getFullYear();
    month = nowDate.getMonth()+1;
    //当级别为年月时处理为 年-月-日 时:分
    if(level == "YM"){
        //年月选择器默认处理为某年-某月-1日 00:00
        day = 1;
        hour = 0;
        minute = 0;
        //通过css默认打开年选择区域，给该区域加载对应数据
        onLoadChoiceYear(year,less);
    }else {
        if(level=="YMD"){
            //年月日选择器默认处理为某年-某月-谋日 00:00
            day = nowDate.getDate();
            hour = 0;
            minute = 0;
        }else if(level=="H"){
            //年月日时选择器默认处理为某年-某月-谋日 某时:00
            day = nowDate.getDate();
            hour = nowDate.getHours();
            minute = 0;
            setHour();
        }else if(level=="HM"){
            day = nowDate.getDate();
            hour = nowDate.getHours();
            minute = nowDate.getMinutes();
            setHour();
            setMinute();
        }
        getDaysInMonth(year,month,less);
    }
    //插入对应值到控件
    timeChoiceValue(year,month,day,hour,minute);
    //显示控件
    borainTimeChoiceShow(obj);
    //打开年月选择区域
    openChoiceYearOrMonth(year,less);
}
//不含有end对象且取旧值
function notEndOldTimeDateEvent(obj,level,less){
    var box = $(".borain-timeChoice");
    var tip = box.find(".choiceBox .tipBox");
    //判断级别，按照对应级别将级别的值作为Class给控件，方便提取对应的css进行设置
    //首先清除Class
    box.removeClass("YM YMD HM H");
    //然后加上Class
    if(level==""||level=="YMD"){
        //表示这是年月日选择（为空时默认的年月日选择）;
        box.addClass("YMD");
        tip.text("请选择至天");
    }else{
        if(level=="YM"){
            tip.text("请选择年月");
        }else if(level=="H"){
            tip.text("请选择到小时，分钟不可选");
        }else {
            tip.text("请选择到时分");
        }
        box.addClass(level);
    }
    //先获取切处理已有值
    var hasVal = obj.val();
    var year,month,day,hour,minute;
    if(level=="YM"){
        hasVal = hasVal+"-1 0:0";
    }else if(level=="YMD"){
        hasVal = hasVal+" 0:0";
    }
    var oldDate = getDateVal(hasVal);
    year = oldDate.getFullYear();
    month = oldDate.getMonth()+1;
    day = oldDate.getDate();
    hour = oldDate.getHours();
    minute = oldDate.getMinutes();
    openChoiceYearOrMonth(year,less);
    if(level=="YM"){
        onLoadChoiceYear(year,less);
    }else{
        getDaysInMonth(year,month,less);
        if(level=="H"){
            setHour();
        }else if(level=="HM"){
            setHour();
            setMinute();
        }
    }
    //插入对应值到控件
    timeChoiceValue(year,month,day,hour,minute);
    //显示控件
    borainTimeChoiceShow(obj);
    //打开年月选择区域
}
//当end对象存在，点击对象为start
function hasEndStartTimeDateEvent(start,end,level,less){
    if(start.val()==""||start.val()==null){
        //如果自身也为空就按照单值新弹窗处理
        notEndNewTimeDateEvent(start,level,less);
    }else {
        notEndOldTimeDateEvent(start,level,less);
    }
    hasEndTimeChoiceSubmit(start,start,end,level,less);
}
//当end对象存在，点击对象为end
function hasEndEndTimeDateEvent(start,end,level,less){
    var box = $(".borain-timeChoice");
    //查询开始时间是否有值,如果没有值就赋值，依有值情况进行处理
    var startDate,endDate;
    var year,month,day,hour,minute;
    var endVal;
    if(start.val()==""||start.val()==null){
        //如果开始对象为空就看自身是否有值
        if(end.val()==""||end.val()==null){
            notEndNewTimeDateEvent(end,level,less);
        }else {
            notEndOldTimeDateEvent(end,level,less);
        }
    }else {
        startDate = start.val();
        if(level=="YM"){
            startDate = startDate+"-1 0:0";
        }else if(level=="YMD"){
            startDate = startDate+" 0:0";
        }
        startDate = getDateVal(startDate);
        //如果开始对象有值，但结束对象没有值，采取默认赋值
        if(end.val()==""||end.val()==null){
            year = startDate.getFullYear();
            month = startDate.getMonth()+1;
            var lastDay = box.find(".choiceDayBox").find(".day span").not(".ban").length;
            if(level=="YM"){
                if(month<12){
                    month = month+1;
                }else {
                    year = year+1;
                    month = 1;
                }
                endVal = year+"-"+month;
            }else if(level=="YMD"){
                day = startDate.getDate();
                if(day<lastDay){
                    day = day+1;
                }else {
                    if(month==12){
                        year = year+1;
                        month = 1;
                    }else {
                        month = month+1;
                    }
                    day = 1;
                }
                endVal = year+"-"+month+"-"+day;
            }else {
                day = startDate.getDate();
                if(day<lastDay){
                    day = day+1;
                }else {
                    if(month==12){
                        year = year+1;
                        month = 1;
                    }else {
                        month = month+1;
                    }
                    day = 1;
                }
                hour = startDate.getHours();
                if(hour<10){
                    hour = "0"+hour
                }
                minute = startDate.getMinutes();
                if(minute<10){
                    minute = "0"+minute
                }
                endVal = year+"-"+month+"-"+day+" "+hour+":"+minute;
            }
            end.val(endVal);
            notEndOldTimeDateEvent(end,level,less);
        }else {
            endDate = end.val();
            if(level=="YM"){
                endDate = endDate+"-1 0:0";
            }else if(level=="YMD"){
                endDate = endDate+" 0:0";
            }
            endDate = getDateVal(endDate);
            if(endDate>startDate){
                notEndOldTimeDateEvent(end,level,less);
            }else {
                end.val("");
                notEndNewTimeDateEvent(end,level,less);
            }
        }
    }
    hasEndTimeChoiceSubmit(end,start,end,level,less);
}
//加载年选择区域的年
function onLoadChoiceYear(year,less){
    year = year < 2000 ? year + 1900 : year;
    var yearBody = year.toString().substr(2,2);
    var yearHead = year.toString().substr(0,2);
    var b;
    var c;
    if(yearBody<=19){
        b = 0;
        c = 19;
    }else if(19<yearBody<=39){
        b = 19;
        c = 39;
    }else if(39<yearBody<=59){
        b=39;
        c=59;
    }else if(59<yearBody<=79){
        b=59;
        c=79;
    }else if(79<yearBody<=99){
        b=79;
        c=99;
    }
    choiceYearBoxAppend(year,b,c,yearHead,yearBody,less);
    onLoadChoiceMonth(less);
}
//加载月选择区域的月
function onLoadChoiceMonth(less){
    var box = $(".borain-timeChoice");
    var choiceMinBox = box.find(".choiceBox").find(".choiceMinBox").find(".month");
    var obj;
    var year = parseInt(box.find(".choiceBox .yearBox .showBox").find(".year").text());
    choiceMinBox.html("");
    var nowYear = new Date().getFullYear();
    var nowMonth = new Date().getMonth()+1;
    var choiceMonth = parseInt(box.find(".choiceBox .yearBox .showBox").find(".month").text());
    var i = 1;
    //如果不可小于当前时间
    if(less==true||less=="true"){
        if(year<nowYear){
            for (;i<=12;i++ ){
                obj = "<span class='not'><em>"+i+"</em>月</span>";
                choiceMinBox.append(obj);
            }
        }else if(year==nowYear){
            for(;i<=12;i++){
                if(i<nowMonth){
                    obj = "<span class='not'><em>"+i+"</em>月</span>";
                }else if(i==nowMonth){
                    obj = "<span class='now'><em>"+i+"</em>月</span>";
                }else {
                    obj = "<span><em>"+i+"</em>月</span>";
                }
                choiceMinBox.append(obj);
            }
        }else {
            for (;i<=12;i++ ){
                obj = "<span><em>"+i+"</em>月</span>";
                choiceMinBox.append(obj);
            }
        }
        choiceMinBox.find("span").each(function () {
            if(parseInt($(this).find("em").text())==choiceMonth){
                $(this).addClass("active");
            }
        });
    }else {
        if(year==nowYear){
            for(;i<=12;i++){
                if(i==nowMonth){
                    obj = "<span class='now'><em>"+i+"</em>月</span>";
                }else {
                    obj = "<span><em>"+i+"</em>月</span>";
                }
                choiceMinBox.append(obj);
            }
        }else {
            for (;i<=12;i++ ){
                obj = "<span><em>"+i+"</em>月</span>";
                choiceMinBox.append(obj);
            }
        }
        choiceMinBox.find("span").each(function () {
            if(parseInt($(this).find("em").text())==choiceMonth){
                $(this).addClass("active");
            }
        });
    }
}
//追加年到对应结构
function choiceYearBoxAppend(year,b,c,yearHead,yearBody,less){
    var box = $(".borain-timeChoice");
    var choiceYearBox = box.find(".choiceBox").find(".choiceYearBox").find(".year");
    var obj;
    var yearTitle = box.find(".choiceBox").find(".choiceYearBox").find(".yearTitle");
    var nowYear = new Date().getFullYear();
    choiceYearBox.html("");
    for(var a=b;a<=c;a++){
        if(a==yearBody){
            if(a<10){
                obj = "<span class='active'>"+yearHead+0+a+"</span>"
            }else {
                obj = "<span class='active'>"+yearHead+a+"</span>"
            }
        }else {
            if(a<10){
                obj = "<span>"+yearHead+0+a+"</span>"
            }else {
                obj = "<span>"+yearHead+a+"</span>"
            }
        }
        choiceYearBox.append(obj);
    }
    var i = 0;
    choiceYearBox.find("span").each(function (){
        i++;
        if(parseInt($(this).text())==nowYear){
            $(this).addClass("now");
        }
    });
    yearTitle.find("span").html("<em>"+choiceYearBox.find("span").eq(0).text()+"</em>"+ "-" + "<em>"+choiceYearBox.find("span").eq(19).text()+"</em>");
    choiceYearChange(less,year);
    choiceYearLess(less,year);
    choiceYearSpanClick(year,less);
    yearMonthClickChange(less);
}
//判断是否可小于当前年
function choiceYearLess(less,year){
    var box = $(".borain-timeChoice");
    var choiceYearBox = box.find(".choiceBox").find(".choiceYearBox").find(".year");
    if(less==true||less=="true"){
        choiceYearBox.find("span").each(function () {
            if(parseInt($(this).text())<new Date().getFullYear()){
                $(this).addClass("not");
            }
        });
    }
}
//年月选择触发
function openChoiceYearOrMonth(year,less){
    var box = $(".borain-timeChoice");
    var btn = box.find(".choiceBox .yearBox .showBox").find("a");
    var choiceBox;
    btn.unbind("click").click(function () {
        if($(this).is(".year")){
            box.find(".yearBox .showBox").find(".year").addClass("active").siblings().removeClass("active");
            onLoadChoiceYear(parseInt($(this).text()),less);
            choiceYearSpanClick(year,less);
        }else if($(this).is(".month")){
            box.find(".yearBox .showBox").find(".month").addClass("active").siblings().removeClass("active");
            choiceBox= box.find(".choiceMinBox");
            box.find(".beChoice").css("display","none");
            choiceBox.css("display","block");
            year = parseInt(box.find(".choiceBox .yearBox .showBox").find(".year").text());
            choiceMonthSpanClick(year,less);
        }
    });
}
//选取年
function choiceYearSpanClick(year,less){
    var box = $(".borain-timeChoice");
    //给按钮样式
    //打开对应的选择范围
    box.find(".yearBox .showBox").find(".year").addClass("active").siblings().removeClass("active");
    var choiceBox = box.find(".choiceYearBox");
    box.find(".beChoice").css("display","none");
    choiceBox.css("display","block");
    //执行点击事件
    choiceBox.find(".year").find("span").not(".not").unbind("click").click(function () {
        var year = $(this).text();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        box.find(".yearBox .showBox").find(".year").text(year);
        choiceMonthSpanClick(year,less);
        box.find(".yearBox .showBox").find(".month").addClass("active").siblings().removeClass("active");
        choiceBox= box.find(".choiceMinBox");
        box.find(".beChoice").css("display","none");
        choiceBox.css("display","block");
    });
}
//选取月
function choiceMonthSpanClick(year,less){
    var box = $(".borain-timeChoice");
    var choiceBox = box.find(".choiceMinBox");
    //box.find(".yearBox .showBox").find(".month").addClass("active").siblings().removeClass("active");
    //box.find(".beChoice").css("display","none");
    //choiceBox.css("display","block");
    onLoadChoiceMonth(less);
    choiceBox.find(".month").find("span").not(".not").unbind("click").click(function () {
        var month = parseInt($(this).find("em").text());
        box.find(".yearBox .showBox").find(".month").text(month);
        if(box.hasClass("YM")){
            timeChoiceValue(year,month,1,0,0);
        }else {
            //非年月选择到达月选择后都要进行天选择
            getDaysInMonth(year,month,less);
            box.find(".choiceDayBox").css("display","block").siblings(".beChoice").css("display","none");
            box.find(".yearBox .showBox").find(".month").removeClass("active");
            var choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
            var lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
            if(choiceDay>lastDay){
                choiceDay=lastDay;
            }
            if(box.hasClass("YMD")){
                timeChoiceValue(year,month,choiceDay,0,0);
            }else {
                timeChoiceValue(year,month,choiceDay);
            }
        }
    });
}
//选取年翻页
function choiceYearChange(less,year) {
    var box = $(".borain-timeChoice");
    var choiceBox = box.find(".choiceYearBox");
    var choiceYearBox = box.find(".choiceBox").find(".choiceYearBox").find(".year");
    var yearBox = choiceBox.find(".year");
    var upBtn = choiceBox.find(".yearTitle .up");
    var downBtn = choiceBox.find(".yearTitle .down");
    var yearTitle = box.find(".choiceBox").find(".choiceYearBox").find(".yearTitle");
    var activeYear;
    var obj;
    upBtn.unbind("click").click(function () {
        var firstYear = parseInt(yearBox.find("span").eq(0).text());
        activeYear = box.find(".choiceBox .yearBox").find(".showBox .year").text();
        yearBox.html("");
        for (var i = 0; i < 20; i++) {
            firstYear--;
            if (firstYear == activeYear) {
                obj = "<span class='active'>" + firstYear + "</span>";
                yearBox.prepend(obj);
            } else {
                obj = "<span>" + firstYear + "</span>";
                yearBox.prepend(obj);
            }

        }
        yearTitle.find("span").html("<em>"+choiceYearBox.find("span").eq(0).text()+"</em>"+ "-" + "<em>"+choiceYearBox.find("span").eq(19).text()+"</em>");
        choiceYearLess(less,year);
        choiceYearSpanClick();
    });
    downBtn.unbind("click").click(function () {
        var lastYear = parseInt(yearBox.find("span").eq(19).text());
        activeYear = box.find(".choiceBox .yearBox").find(".showBox .year").text();
        yearBox.html("");
        for (var i = 0; i < 20; i++) {
            lastYear++;
            if (lastYear == activeYear) {
                obj = "<span class='active'>" + lastYear + "</span>";
                yearBox.append(obj);
            } else {
                var obj = "<span>" + lastYear + "</span>";
                yearBox.append(obj);
            }

        }
        yearTitle.find("span").html("<em>"+choiceYearBox.find("span").eq(0).text()+"</em>"+ "-" + "<em>"+choiceYearBox.find("span").eq(19).text()+"</em>");
        choiceYearLess(less,year);
        choiceYearSpanClick();
    });
    return true;
}
//年月点击切换
function yearMonthClickChange(less){
    var box = $(".borain-timeChoice");
    var month;
    //点击年月前进后退按钮
    box.find(".choiceBox .yearBox").find(".back").unbind("click").click(function () {
        backClick(less);
        var a = parseInt(box.find(".choiceBox .showBox").find(".month").text());
        box.find(".choiceMinBox .month").find("span").each(function () {
            if(parseInt($(this).find("em").text())==a){
                $(this).addClass("active").siblings().removeClass("active");
            }
        });
    });
    box.find(".choiceBox .yearBox").find(".forward").unbind("click").click(function () {
        forwardClick(less);
        var a = parseInt(box.find(".choiceBox .showBox").find(".month").text());
        box.find(".choiceMinBox .month").find("span").each(function () {
            if(parseInt($(this).find("em").text())==a){
                $(this).addClass("active").siblings().removeClass("active");
            }
        });
    });
}
//年月后退
function backClick(less){
    var box = $(".borain-timeChoice");
    var yearBox = box.find(".choiceBox .showBox").find(".year");
    var monthBox = box.find(".choiceBox .showBox").find(".month");
    var choiceYear = parseInt(yearBox.text());
    var choiceMonth = parseInt(monthBox.text());
    var nowYear = new Date().getFullYear();
    var nowMonth = new Date().getMonth()+1;
    var year,month,choiceDay,lastDay;
    //如果限制不可小于当前时间
    if(less==true||less=="true"){
        //选择年等于当前年
        if(choiceYear==nowYear){
            if(choiceMonth>nowMonth){
                if(choiceMonth>1){
                    monthBox.text(choiceMonth-1);
                    year = parseInt(yearBox.text());
                    month = parseInt(monthBox.text());
                    if(box.hasClass("YM")){
                        timeChoiceValue(year,month,1,0,0);
                    }else {
                        getDaysInMonth(year,month,less);
                        choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
                        lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
                        if(choiceDay>lastDay){
                            choiceDay=lastDay;
                        }
                        timeChoiceValue(year,month,choiceDay);
                    }
                }else {
                    monthBox.text(12);
                    yearBox.text(parseInt(yearBox.text())-1);
                    year = parseInt(yearBox.text());
                    month = parseInt(monthBox.text());
                    onLoadChoiceMonth(less);
                    choiceMonthSpanClick(year,less);
                    if(box.hasClass("YM")){
                        timeChoiceValue(year,month,1,0,0);
                    }else {
                        getDaysInMonth(year,month,less);
                        choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
                        lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
                        if(choiceDay>lastDay){
                            choiceDay=lastDay;
                        }
                        timeChoiceValue(year,month,choiceDay);
                    }
                }
            }else {
                box.find(".choiceBox .yearBox").find(".back").unbind();
            }
        }else if(choiceYear>nowYear){
            if(choiceMonth>1){
                monthBox.text(choiceMonth-1);
                year = parseInt(yearBox.text());
                month = parseInt(monthBox.text());
                if(box.hasClass("YM")){
                    timeChoiceValue(year,month,1,0,0);
                }else {
                    getDaysInMonth(year,month,less);
                    choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
                    lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
                    if(choiceDay>lastDay){
                        choiceDay=lastDay;
                    }
                    timeChoiceValue(year,month,choiceDay);
                }
            }else {
                monthBox.text(12);
                yearBox.text(parseInt(yearBox.text())-1);
                year = parseInt(yearBox.text());
                month = parseInt(monthBox.text());
                onLoadChoiceMonth(less);
                choiceMonthSpanClick(year,less);
                if(box.hasClass("YM")){
                    timeChoiceValue(year,month,1,0,0);
                }else {
                    getDaysInMonth(year,month,less);
                    choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
                    lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
                    if(choiceDay>lastDay){
                        choiceDay=lastDay;
                    }
                    timeChoiceValue(year,month,choiceDay);
                }
            }
        }
    }else {
        if(monthBox.text()>1){
            monthBox.text(parseInt(monthBox.text())-1);
            year = parseInt(yearBox.text());
            month = parseInt(monthBox.text());
            if(box.hasClass("YM")){
                timeChoiceValue(year,month,1,0,0);
            }else {
                getDaysInMonth(year,month,less);
                choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
                lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
                if(choiceDay>lastDay){
                    choiceDay=lastDay;
                }
                timeChoiceValue(year,month,choiceDay);
            }
        }else {
            monthBox.text(12);
            yearBox.text(parseInt(yearBox.text())-1);
            year = parseInt(yearBox.text());
            month = parseInt(monthBox.text());
            onLoadChoiceMonth(less);
            choiceMonthSpanClick(year,less);
            if(box.hasClass("YM")){
                timeChoiceValue(year,month,1,0,0);
            }else {
                getDaysInMonth(year,month,less);
                choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
                lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
                if(choiceDay>lastDay){
                    choiceDay=lastDay;
                }
                timeChoiceValue(year,month,choiceDay);
            }
        }
    }
}
//年月前进
function forwardClick(less){
    var box = $(".borain-timeChoice");
    var yearBox = box.find(".choiceBox .showBox").find(".year");
    var monthBox = box.find(".choiceBox .showBox").find(".month");
    var year,month,choiceDay,lastDay;
    if(monthBox.text()<12){
        monthBox.text(parseInt(monthBox.text())+1);
        year = parseInt(yearBox.text());
        month = parseInt(monthBox.text());
        if(box.hasClass("YM")){
            timeChoiceValue(year,month,1,0,0);
        }else {
            getDaysInMonth(year,month,less);
            choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
            lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
            if(choiceDay>lastDay){
                choiceDay=lastDay;
            }
            timeChoiceValue(year,month,choiceDay);
        }
    }else {
        monthBox.text(1);
        yearBox.text(parseInt(yearBox.text())+1);
        year = parseInt(yearBox.text());
        month = parseInt(monthBox.text());
        onLoadChoiceMonth(less);
        choiceMonthSpanClick(year,less);
        if(box.hasClass("YM")){
            timeChoiceValue(year,month,1,0,0);
        }else {
            getDaysInMonth(year,month,less);
            choiceDay = parseInt(box.find(".revealBox .nowBox .nowDay").find("em").text());
            lastDay = box.find(".choiceBox .choiceDayBox .day").find("span").not(".ban").length;
            if(choiceDay>lastDay){
                choiceDay=lastDay;
            }
            timeChoiceValue(year,month,choiceDay);
        }
    }
}
//转换为时间格式
function getDateVal(strDate) {
    var date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,
            function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');
    return date;
}
//获取对应年月的日期
function getDaysInMonth(year,month,less){
    var box = $(".borain-timeChoice");
    box.find(".yearBox .showBox").find("a").removeClass("active");
    var choiceBox = box.find(".choiceDayBox");
    box.find(".beChoice").css("display","none");
    choiceBox.css("display","block");
    month = parseInt(month,10);
    var date = new Date(year,month,0);
    date.setDate(1);
    var weekday=new Array(7);
    weekday[0]=0 ;
    weekday[1]=1;
    weekday[2]=2;
    weekday[3]=3;
    weekday[4]=4;
    weekday[5]=5;
    weekday[6]=6;
    var week = weekday[date.getDay()];
    date.setMonth(date.getMonth() + 1);
    var lastDate = new Date(date - 3600000*24);
    var lastDay = lastDate.getDate();
    getBeforeMonthLastDay(year,month-1,week,lastDay,less);
    todayStyle(year,month,less);
}
//获取上一个月的最后天数
function getBeforeMonthLastDay(year,month,week,lastDay,less){
    month = parseInt(month,10);
    var date = new Date(year,month,0);
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    var beforeLastDate = new Date(date - 3600000*24);
    var beforeLastDay = beforeLastDate.getDate();
    onLoadDayInBox(week,lastDay,beforeLastDay,less);
}
//加载日期进选择器
function onLoadDayInBox(week,lastDay,beforeLastDay,less){
    var box = $(".borain-timeChoice");
    var obj;
    box.find(".choiceDayBox").find(".day").html("");
    onLoadBeforeDay(week);
    onLoadDay(lastDay);
    onLoadAfterDay(week,lastDay);
    thisMonthDayClick();
    yearMonthClickChange(less);
    //加载上月
    function onLoadBeforeDay(week){
        if(week==0){
            week=7;
        }
        beforeLastDay = beforeLastDay-week+1;
        for(var i=0;i<week;i++){
            var obj = "<span class='ban'>"+beforeLastDay+"</span>";
            box.find(".choiceDayBox").find(".day").append(obj);
            beforeLastDay++;
        }
    }
    //加载本月
    function  onLoadDay(lastDay){
        for(var i = 1;i<=lastDay;i++){
            obj = "<span>"+i+"</span>";
            box.find(".choiceDayBox").find(".day").append(obj);
        }
    }
    //加载下月
    function onLoadAfterDay(week,lastDay){
        if(week==0){
            week=7;
        }
        //总的格子数量为42
        var afterDay = 42 - week - lastDay;
        for(var i =1;i<=afterDay;i++){
            var obj = "<span class='ban'>"+i+"</span>";
            box.find(".choiceDayBox").find(".day").append(obj);
        }
    }
    //todayStyle();
}
//加载完后对当前时间标记样式
function todayStyle(year,month,less){
    var box = $(".borain-timeChoice");
    var nowYear = new Date().getFullYear();
    var nowMonth = new Date().getMonth()+1;
    var today = new Date().getDate();
    var choiceYear = parseInt(year);
    //var choiceYear = parseInt(box.find(".choiceBox .yearBox .showBox").find(".year").text());
    var choiceMonth = parseInt(month);
    //var choiceMonth = parseInt(box.find(".choiceBox .yearBox .showBox").find(".month").text());
    if(choiceYear==nowYear && choiceMonth==nowMonth){
        box.find(".choiceBox").find(".choiceDayBox").find(".day").find("span").not(".ban").each(function () {
            if(parseInt($(this).text())==today){
                $(this).addClass("now");
            }
        });
    }
    if(less==true||less=="true"){
        if(choiceYear==nowYear){
            if(choiceMonth==nowMonth){
                box.find(".choiceBox").find(".choiceDayBox").find(".day").find("span").not(".ban").each(function () {
                    if(parseInt($(this).text())<today){
                        $(this).addClass("not");
                    }
                });
            }else if(choiceMonth<nowMonth){
                box.find(".choiceBox").find(".choiceDayBox").find(".day").find("span").not(".ban").addClass("not");
            }else {
                box.find(".choiceBox").find(".choiceDayBox").find(".day").find("span").not(".ban").removeClass("not");
            }
        }else if(choiceYear<nowYear){
            box.find(".choiceBox").find(".choiceDayBox").find(".day").find("span").not(".ban").addClass("not");
        }else {
            box.find(".choiceBox").find(".choiceDayBox").find(".day").find("span").not(".ban").removeClass("not");
        }
    }
}
//弹窗各个地方对应时间赋值
function timeChoiceValue(year,month,day,hour,minute){
    var box = $(".borain-timeChoice");
    box.find(".choiceBox .yearBox").find(".year").text(year);
    box.find(".choiceBox .yearBox").find(".month").text(month);
    box.find(".revealBox").find(".nowYear em").text(year);
    box.find(".revealBox").find(".nowMonth em").text(month);
    box.find(".revealBox").find(".nowDay em").text(day);
    box.find(".choiceBox").find(".choiceYearBox").find(".year").find("span").not(".ban").each(function () {
        if(parseInt($(this).text())==year){
            $(this).addClass("active").siblings().removeClass("active");
        }
    });
    box.find(".choiceBox").find(".choiceMinBox ").find(".month").find("span").not(".ban").each(function () {
        if(parseInt($(this).find("em").text())==month){
            $(this).addClass("active").siblings().removeClass("active");
        }
    });
    box.find(".choiceBox").find(".choiceDayBox").find(".day").find("span").not(".ban").each(function () {
        if(parseInt($(this).text())==day){
            $(this).addClass("active").siblings().removeClass("active");
        }
    });
    if(hour<10){
        hour = "0"+hour;
    }
    box.find(".revealBox").find(".hourBox span").text(hour);
    if(minute<10){
        minute = "0"+minute;
    }
    box.find(".revealBox").find(".minBox span").text(minute);
}
//可选日期点击选中样式以及赋值
function thisMonthDayClick(){
    var box = $(".borain-timeChoice");
    var choiceBox = box.find(".choiceBox");
    var dayBtn = choiceBox.find(".choiceDayBox").find(".day").find("span");
    dayBtn.unbind("click").click(function () {
        if($(this).hasClass("ban")){
            if(parseInt($(this).text())>15){
                backClick();
            }else {
                forwardClick();
            }
        }else {
            if($(this).hasClass("not")){
            }else {
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
                var year = choiceBox.find(".yearBox .showBox").find(".year").text();
                var month = choiceBox.find(".yearBox .showBox").find(".month").text();
                var day = $(this).text();
                timeChoiceValue(year,month,day);
            }
        }
    });
}
//设置小时
function setHour(){
    var box = $(".borain-timeChoice");
    var hourAdd = box.find(".revealBox .timeBox").find(".hourBox .add");
    var hourMinus = box.find(".revealBox .timeBox").find(".hourBox .minus");
    hourAdd.unbind("click").click(function () {
        var hour = parseInt(box.find(".revealBox .timeBox").find(".hourBox span").text());
        if(hour<23){
            hour = hour+1;
        }else {
            hour = 0;
        }
        if(hour<10){
            hour = "0"+hour;
        }
        box.find(".revealBox .timeBox").find(".hourBox span").text(hour);
    });
    hourMinus.unbind("click").click(function () {
        var hour = parseInt(box.find(".revealBox .timeBox").find(".hourBox span").text());
        if(hour>0){
            hour = hour-1;
        }else {
            hour = 23;
        }
        if(hour<10){
            hour = "0"+hour;
        }
        box.find(".revealBox .timeBox").find(".hourBox span").text(hour);
    });
}
//设置分钟
function setMinute(){
    var box = $(".borain-timeChoice");
    var minAdd = box.find(".revealBox .timeBox").find(".minBox .add");
    var minMinus = box.find(".revealBox .timeBox").find(".minBox .minus");
    minAdd.unbind("click").click(function () {
        var min = parseInt(box.find(".revealBox .timeBox").find(".minBox span").text());
        if(min<59){
            min = min+1;
        }else {
            min = 0;
        }
        if(min<10){
            min = "0"+min;
        }
        box.find(".revealBox .timeBox").find(".minBox span").text(min);
    });
    minMinus.unbind("click").click(function () {
        var min = parseInt(box.find(".revealBox .timeBox").find(".minBox span").text());
        if(min>0){
            min = min-1;
        }else {
            min = 59;
        }
        if(min<10){
            min = "0"+min;
        }
        box.find(".revealBox .timeBox").find(".minBox span").text(min);
    });
}
//单个选择提交选择结果
function notEndTimeChoiceSubmit(obj){
    console.log("单值触发了");
    var mask = $(".borain-timeChoiceMask");
    var box = $(".borain-timeChoice");
    var submitBtn = box.find(".operateBox").find(".submit");
    var year,month,day,hour,minute,val;
    submitBtn.unbind("click").click(function () {
        year = box.find(".revealBox .nowBox").find(".nowYear em").text();
        month = box.find(".revealBox .nowBox").find(".nowMonth em").text();
        //根据级别来取值
        if(box.hasClass("YM")){
            val = year+"-"+month;
            obj.val(val);
        }else if(box.hasClass("YMD")){
            day = box.find(".revealBox .nowBox").find(".nowDay em").text();
            val = year+"-"+month+"-"+day;
            obj.val(val);
        }else{
            day = box.find(".revealBox .nowBox").find(".nowDay em").text();
            hour = box.find(".revealBox .timeBox").find(".hourBox span").text();
            minute = box.find(".revealBox .timeBox").find(".minBox span").text();
            val = year+"-"+month+"-"+day+" "+hour+":"+minute;
            obj.val(val);
        }
        box.hide();
        mask.hide();
    });
}
function hasEndTimeChoiceSubmit(obj,start,end,level,less){
    console.log("双值触发了");
    var mask = $(".borain-timeChoiceMask");
    var box = $(".borain-timeChoice");
    var tip = box.find(".choiceBox .tipBox");
    var submitBtn = box.find(".operateBox").find(".submit");
    var year,month,day,hour,minute,val,choiceEndVal,choiceStartVal,startDate,endDate;
    submitBtn.unbind("click").click(function () {
        console.log("我点击了");
        if(obj.is(start)){
            if(end.val()==null||end.val()==""){
                sub();
                hasEndEndTimeDateEvent(start,end,level,less)
            }else {
                endDate = end.val();
                if(level=="YM"){
                    endDate = endDate+"-1 0:0"
                }else if(level=="YMD"){
                    endDate = endDate+" 0:0"
                }
                console.log(endDate);
                endDate = getDateVal(endDate);
                year = box.find(".revealBox .nowBox").find(".nowYear em").text();
                month = box.find(".revealBox .nowBox").find(".nowMonth em").text();
                //根据级别来取值
                if(box.hasClass("YM")){
                    choiceStartVal = year+"-"+month+"-1 0:0";
                }else if(box.hasClass("YMD")){
                    day = box.find(".revealBox .nowBox").find(".nowDay em").text();
                    choiceStartVal = year+"-"+month+"-"+day+" 0:0";
                }else{
                    day = box.find(".revealBox .nowBox").find(".nowDay em").text();
                    hour = box.find(".revealBox .timeBox").find(".hourBox span").text();
                    minute = box.find(".revealBox .timeBox").find(".minBox span").text();
                    choiceStartVal = year+"-"+month+"-"+day+" "+hour+":"+minute;
                }
                console.log(choiceStartVal);
                choiceStartVal = getDateVal(choiceStartVal);
                if(choiceStartVal<endDate){
                    sub();
                }else {
                    sub();
                    end.val("");
                    hasEndEndTimeDateEvent(start,end,level,less);
                }
            }
        }else if(obj.is(end)){
            if(start.val()==null||start.val()==""){
                sub();
                hasEndStartTimeDateEvent(start,end,level,less);
            }else {
                //如果都有值就要判断结束时间与开始时间的大小
                startDate = start.val();
                if(level=="YM"){
                    startDate = startDate+"-1 0:0"
                }else if(level=="YMD"){
                    startDate = startDate+" 0:0"
                }
                startDate = getDateVal(startDate);
                year = box.find(".revealBox .nowBox").find(".nowYear em").text();
                month = box.find(".revealBox .nowBox").find(".nowMonth em").text();
                //根据级别来取值
                if(box.hasClass("YM")){
                    choiceEndVal = year+"-"+month+"-1 0:0";
                }else if(box.hasClass("YMD")){
                    day = box.find(".revealBox .nowBox").find(".nowDay em").text();
                    choiceEndVal = year+"-"+month+"-"+day+" 0:0";
                }else{
                    day = box.find(".revealBox .nowBox").find(".nowDay em").text();
                    hour = box.find(".revealBox .timeBox").find(".hourBox span").text();
                    minute = box.find(".revealBox .timeBox").find(".minBox span").text();
                    choiceEndVal = year+"-"+month+"-"+day+" "+hour+":"+minute;
                }
                choiceEndVal = getDateVal(choiceEndVal);
                if(startDate<choiceEndVal){
                    sub();
                }else {
                    tip.text("结束时间必须大于开始时间！")
                }
            }
        }else {
            tip.text("数值处理出错，请关闭后重试！");
        }
    });
    function sub(){
        year = box.find(".revealBox .nowBox").find(".nowYear em").text();
        month = box.find(".revealBox .nowBox").find(".nowMonth em").text();
        //根据级别来取值
        if(box.hasClass("YM")){
            val = year+"-"+month;
            obj.val(val);
        }else if(box.hasClass("YMD")){
            day = box.find(".revealBox .nowBox").find(".nowDay em").text();
            val = year+"-"+month+"-"+day;
            obj.val(val);
        }else{
            day = box.find(".revealBox .nowBox").find(".nowDay em").text();
            hour = box.find(".revealBox .timeBox").find(".hourBox span").text();
            minute = box.find(".revealBox .timeBox").find(".minBox span").text();
            val = year+"-"+month+"-"+day+" "+hour+":"+minute;
            obj.val(val);
        }
        box.hide();
        mask.hide();
    }
}
//关闭时间选择控件
function borainTimeChoiceCancel(start,end){
    var mask = $(".borain-timeChoiceMask");
    var box = $(".borain-timeChoice");
    var cancelBtn = box.find(".operateBox").find(".cancel");
    cancelBtn.unbind("click").click(function () {
        box.hide();
        mask.hide();
    });
}