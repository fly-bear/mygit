function getall() {
    $.ajax({
        url:"/blog/getallarticles",
        type:'POST',
        data:"",
        success:function (data) {
            for(var a=data.length-1;a>=0;a--){
                var i = data[a];
                var type = i['type'];
                switch (type) {
                    case "1":{
                        var article="";
                        if(i['content'].length>80){
                            article = i['content'].substring(0,80)+"......";
                        }else{
                            article = i['content'];
                        }
                        createstyle1(i['picture'],i['title'],article,i['id']);
                        break;
                    }
                    case "2":{
                        var article="";
                        if(i['content'].length>80){
                            article = i['content'].substring(0,80)+"......";
                        }else{
                            article = i['content'];
                        }
                        createstyle2(i['picture'],i['title'],article,0,i['date'],0,i['id']);
                        break;
                    }
                    case "3":createstyle3();break;
                    default:break;
                }
            }
        }
    })
}

function createstyle1(image,title,content,id) {

    var list = document.getElementById("lists");
    var div = document.createElement("div");
    div.className="post post-layout-list";
    div.setAttribute("data-aos","fade-up");
    div.innerHTML = "<div class=\"status_list_item icon_kyubo\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"status_user\" style=\"background-image: url(statics/images/upload/" +image+
        ");\">\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"status_section\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<a href=\"detail?articleid="+id+"\" class=\"status_btn\">"+title+"</a>\n" +
        "\t\t\t\t\t\t\t\t\t\t<p class=\"section_p\">"+content+"</p>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>";
    list.appendChild(div);
}

function createstyle2(image,title,content,readnum,date,Comments,id) {
    var list = document.getElementById("lists");
    var div = document.createElement("div");
    div.className="post post-layout-list";
    div.setAttribute("data-aos","fade-up");
    div.innerHTML="<div class=\"postnormal review \">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"post-container review-item\">\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"row review-item-wrapper\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<a rel=\"nofollow\" href=\"detail?articleid="+id+"\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-item-img\" style=\"background-image: url(statics/images/upload/" +image+
        ");\"></div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9 flex-xs-middle\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-item-title\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"detail?articleid="+id+"\" rel=\"bookmark\">"+title+"</a>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-item-creator\"><b>发布日期：</b>"+date+"</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<span class=\"review-item-info\"><b>总浏览量：</b>"+readnum+" reads</span>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"review-bg-wrapper\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"bg-blur\" style=\"background-image: url(statics/images/upload/" +image+
        ");\"></div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t<div class=\"post-container\">\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">"+content+"</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"post-footer\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<a class=\"gaz-btn primary\" href=\"detail?articleid="+id+"\">READ MORE</a>\n" +
        "\t\t\t\t\t\t\t\t\t\t<span class=\"total-comments-on-post pull-right\"><a href=\"detail?articleid="+id+"\">"+Comments+" Comments</a></span>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>";
    list.appendChild(div);
}

function createstyle3() {
    var list = document.getElementById("lists");
    var div = document.createElement("div");
    div.className = "post post-layout-list";
    div.setAttribute("data-aos", "fade-up");

    div.innerHTML = "<div class=\"post-album\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"row content\">\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"bg\" style=\"background-image: url(statics/images/IMG_0150.jpg);\"></div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"contentext flex-xs-middle\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"album-title\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<a href=\"detail.html\">重构图像样式测试</a>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t<h5 class=\"review-item-creator\"><b>发布日期：</b>2017-11-13</h5>\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"album-content\">如眼所见是一个图像样式，必须写五十左右的文字作为这个文本框的空白填充，不写也是可以的，强迫症不能容忍空白。</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"album-thumb-width flex-xs-middle\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"row album-thumb no-gutter\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/IMG_0150-250x250.jpg\" /></div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/IMG_0149-250x250.jpg\" /></div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/IMG_0146-250x250.jpg\" /></div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/IMG_0147-250x250.jpg\" /></div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/IMG_0148-250x250.jpg\" /></div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\">5 pics</a>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>";


    list.appendChild(div);
}