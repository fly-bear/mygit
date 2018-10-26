function preview() {
    var url = location.search.substr(1);
    var id = url.split("=")[1];
    document.getElementById("articleid").value = parseInt(id);
    $.ajax({
        type:"GET",
        url:"/blog/preinfo",
        data:{'articleid':parseInt(id)-1},
        success:function (data) {
            if(data!="") {
                document.getElementById("leftimg").style.backgroundImage = "url(" + "statics/images/upload/" + data['picture'] + ")";
                document.getElementById("lefttitle").childNodes[0].innerHTML = data['title'];
                document.getElementById("lefttitle").href = "/blog/detail?articleid=" +( parseInt(id) - 1)
            }
        }
    });
    $.ajax({
        type:"GET",
        url:"/blog/preinfo",
        data:{'articleid':parseInt(id)+1},
        success:function (data) {
            if(data!="") {
                document.getElementById("rightimg").style.backgroundImage = "url(" + "statics/images/upload/" + data['picture'] + ")";
                document.getElementById("righttitle").childNodes[0].innerHTML = data['title'];
                document.getElementById("righttitle").href = "/blog/detail?articleid=" + (parseInt(id) + 1)
            }
        }
    });

    loadcomments();
}


function loadcomments() {
    var url = location.search.substr(1);
    var articleid = url.split("=")[1];
    $.ajax({
        url:"getcomments",
        type:'get',
        data:{'articleid':articleid},
        success:function (data) {
            document.getElementById("comments-list-title").childNodes[0].innerHTML = data.length;
            data.forEach(function (each, index) {
                addcomment(index,each['id'],each['name'],each['date'],each['content']);
            })
        }
    })

}

function addcomment(serial,commentid,name,date,comment) {
    var ul = document.getElementById("allcomments");
    var li = document.createElement("li");
    li.id ="li-comment-"+serial;
    li.className = "comment even thread-even depth-1";
    li.innerHTML="<div id=\""+commentid+"\" class=\"comment_body contents\">\n" +
        "\t\t\t\t\t\t\t\t<div class=\"profile\">\n" +
        "\t\t\t\t\t\t\t\t\t<a href=\"\"><img src=\"statics/images/9cc50a9e422fb1c89aebafeb959cef7a.jpg\" class=\"gravatar\" alt=\""+name+"\"></a>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t<div class=\"main shadow\">\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"commentinfo\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<section class=\"commeta\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"shang\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"author\"><a href=\"\" target=\"_blank\"><img src=\"statics/images/9cc50a9e422fb1c89aebafeb959cef7a.jpg\" class=\"gravatarsmall\" alt=\""+name+"\">"+name+"</a></h4>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t</section>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"body\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<p>"+comment+"</p>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"xia info\">\n" +
        "\t\t\t\t\t\t\t\t\t\t<span><time datetime=\""+date+"\">"+date+"</time></span>\n" +
        "\t\t\t\t\t\t\t\t\t\t<span><a rel='nofollow' class='comment-reply-link' href=\"#\" onclick='' aria-label='回复给小布丁'>回复</a></span>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>";
    ul.appendChild(li);
}