// 切换
function changeactive(self,focus){
    document.getElementsByClassName("active")[0].classList.remove("active");
    self.parentNode.classList.add("active");
    switch (focus) {
        case 0:break;
        case 1:article();break;
        case 2:notice();break;
        default:break;
    }
}

function article() {
    var main = document.getElementById("main");
    destroyue();
    main.innerHTML = "<form action=\"/Article/checkAll\" method=\"post\">\n" +
        "        <h1 class=\"page-header\">操作</h1>\n" +
        "        <ol class=\"breadcrumb\">\n" +
        "          <li><a href=\"#\" onclick=\"addarticle()\" draggable=\"false\">增加文章</a></li>\n" +
        "        </ol>\n" +
        "        <h1 class=\"page-header\">管理 <span class=\"badge\">7</span></h1>\n" +
        "        <div class=\"table-responsive\">\n" +
        "          <table class=\"table table-striped table-hover\">\n" +
        "            <thead>\n" +
        "              <tr>\n" +
        "                <th><span class=\"glyphicon glyphicon-th-large\"></span> <span class=\"visible-lg\">选择</span></th>\n" +
        "                <th><span class=\"glyphicon glyphicon-file\"></span> <span class=\"visible-lg\">标题</span></th>\n" +
        "                <th><span class=\"glyphicon glyphicon-list\"></span> <span class=\"visible-lg\">栏目</span></th>\n" +
        "                <th class=\"hidden-sm\"><span class=\"glyphicon glyphicon-tag\"></span> <span class=\"visible-lg\">标签</span></th>\n" +
        "                <th class=\"hidden-sm\"><span class=\"glyphicon glyphicon-comment\"></span> <span class=\"visible-lg\">评论</span></th>\n" +
        "                <th><span class=\"glyphicon glyphicon-time\"></span> <span class=\"visible-lg\">日期</span></th>\n" +
        "                <th><span class=\"glyphicon glyphicon-pencil\"></span> <span class=\"visible-lg\">操作</span></th>\n" +
        "              </tr>\n" +
        "            </thead>\n" +
        "            <tbody>\n" +
        "              <tr>\n" +
        "                <td><input type=\"checkbox\" class=\"input-control\" name=\"checkbox[]\" value=\"\"></td>\n" +
        "                <td class=\"article-title\">这是测试的文章标题这是测试的文章标题这是测试的文章标题这是测试的文章标题</td>\n" +
        "                <td>这个是栏目</td>\n" +
        "                <td class=\"hidden-sm\">PHP、JavaScript</td>\n" +
        "                <td class=\"hidden-sm\">0</td>\n" +
        "                <td>2015-12-03</td>\n" +
        "                <td><a href=\"update-article.html\" draggable=\"false\">修改</a> <a rel=\"6\" draggable=\"false\">删除</a></td>\n" +
        "              </tr>\n" +
        "              <tr>\n" +
        "                <td><input type=\"checkbox\" class=\"input-control\" name=\"checkbox[]\" value=\"\"></td>\n" +
        "                <td class=\"article-title\">这是测试的文章标题这是测试的文章标题这是测试的文章标题这是测试的文章标题</td>\n" +
        "                <td>这个是栏目</td>\n" +
        "                <td class=\"hidden-sm\">PHP、JavaScript</td>\n" +
        "                <td class=\"hidden-sm\">0</td>\n" +
        "                <td>2015-12-03</td>\n" +
        "                <td><a href=\"\" draggable=\"false\">修改</a> <a rel=\"6\" draggable=\"false\">删除</a></td>\n" +
        "              </tr>\n" +
        "            </tbody>\n" +
        "          </table>\n" +
        "        </div>\n" +
        "        <footer class=\"message_footer\">\n" +
        "          <nav>\n" +
        "            <div class=\"btn-toolbar operation\" role=\"toolbar\">\n" +
        "              <div class=\"btn-group\" role=\"group\"> <a class=\"btn btn-default\" onclick=\"select()\" draggable=\"false\">全选</a> <a class=\"btn btn-default\" onclick=\"reverse()\" draggable=\"false\">反选</a> <a class=\"btn btn-default\" onclick=\"noselect()\" draggable=\"false\">不选</a> </div>\n" +
        "              <div class=\"btn-group\" role=\"group\">\n" +
        "                <button type=\"submit\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" name=\"checkbox_delete\" data-original-title=\"删除全部选中\">删除</button>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "            <ul class=\"pagination pagenav\">\n" +
        "              <li class=\"disabled\"><a aria-label=\"Previous\" draggable=\"false\"> <span aria-hidden=\"true\">«</span> </a> </li>\n" +
        "              <li class=\"active\"><a href=\"#\" draggable=\"false\">1</a></li>\n" +
        "              <li><a href=\"#\" draggable=\"false\">2</a></li>\n" +
        "              <li><a href=\"#\" draggable=\"false\">3</a></li>\n" +
        "              <li><a href=\"#\" draggable=\"false\">4</a></li>\n" +
        "              <li><a href=\"#\" draggable=\"false\">5</a></li>\n" +
        "              <li><a href=\"#\" aria-label=\"Next\" draggable=\"false\"> <span aria-hidden=\"true\">»</span> </a> </li>\n" +
        "            </ul>\n" +
        "          </nav>\n" +
        "        </footer>\n" +
        "      </form>";
}


function destroyue(){
    try {
        UE.delEditor("container");
        document.getElementById("container").remove();
    }catch (e) {

    }
}
function notice() {
    var main = document.getElementById("main");
    destroyue();

    main.innerHTML="<form action=\"/Article/checkAll\" method=\"post\">\n" +
        "        <h1 class=\"page-header\">操作</h1>\n" +
        "        <ol class=\"breadcrumb\">\n" +
        "          <li><a href=\"add-notice.html\" draggable=\"false\">增加公告</a></li>\n" +
        "        </ol>\n" +
        "        <h1 class=\"page-header\">管理 <span class=\"badge\">3</span></h1>\n" +
        "        <div class=\"table-responsive\">\n" +
        "          <table class=\"table table-striped table-hover\">\n" +
        "            <thead>\n" +
        "              <tr>\n" +
        "                <th><span class=\"glyphicon glyphicon-th-large\"></span> <span class=\"visible-lg\">选择</span></th>\n" +
        "                <th><span class=\"glyphicon glyphicon-file\"></span> <span class=\"visible-lg\">标题</span></th>\n" +
        "                <th><span class=\"glyphicon glyphicon-time\"></span> <span class=\"visible-lg\">日期</span></th>\n" +
        "                <th><span class=\"glyphicon glyphicon-pencil\"></span> <span class=\"visible-lg\">操作</span></th>\n" +
        "              </tr>\n" +
        "            </thead>\n" +
        "            <tbody>\n" +
        "              <tr>\n" +
        "                <td><input type=\"checkbox\" class=\"input-control\" name=\"checkbox[]\" value=\"\"></td>\n" +
        "                <td class=\"article-title\">这是测试的公告标题这是测试的公告标题这是测试的公告标题这是测试的公告标题</td>\n" +
        "                <td>2015-12-03</td>\n" +
        "                <td><a href=\"\" draggable=\"false\">修改</a> <a rel=\"6\" draggable=\"false\">删除</a></td>\n" +
        "              </tr>\n" +
        "              <tr>\n" +
        "                <td><input type=\"checkbox\" class=\"input-control\" name=\"checkbox[]\" value=\"\"></td>\n" +
        "                <td class=\"article-title\">这是测试的公告标题这是测试的公告标题这是测试的公告标题这是测试的公告标题</td>\n" +
        "                <td>2015-12-03</td>\n" +
        "                <td><a href=\"\" draggable=\"false\">修改</a> <a rel=\"6\" draggable=\"false\">删除</a></td>\n" +
        "              </tr>\n" +
        "            </tbody>\n" +
        "          </table>\n" +
        "        </div>\n" +
        "        <footer class=\"message_footer\">\n" +
        "          <nav>\n" +
        "            <div class=\"btn-toolbar operation\" role=\"toolbar\">\n" +
        "              <div class=\"btn-group\" role=\"group\"> <a class=\"btn btn-default\" onclick=\"select()\" draggable=\"false\">全选</a> <a class=\"btn btn-default\" onclick=\"reverse()\" draggable=\"false\">反选</a> <a class=\"btn btn-default\" onclick=\"noselect()\" draggable=\"false\">不选</a> </div>\n" +
        "              <div class=\"btn-group\" role=\"group\">\n" +
        "                <button type=\"submit\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" name=\"checkbox_delete\" data-original-title=\"删除全部选中\">删除</button>\n" +
        "              </div>\n" +
        "            </div>\n" +
        "            <ul class=\"pagination pagenav\">\n" +
        "              <li class=\"disabled\"><a aria-label=\"Previous\" draggable=\"false\"> <span aria-hidden=\"true\">«</span> </a> </li>\n" +
        "              <li class=\"active\"><a draggable=\"false\">1</a></li>\n" +
        "              <li class=\"disabled\"><a aria-label=\"Next\" draggable=\"false\"> <span aria-hidden=\"true\">»</span> </a> </li>\n" +
        "            </ul>\n" +
        "          </nav>\n" +
        "        </footer>\n" +
        "      </form>";
}

function addarticle() {

    var main = document.getElementById("main");
    main.innerHTML="";

    var form=document.createElement("form");
    form.action="/blog/back/subarticle";
    form.method="POST";


    var script = document.createElement("script");
    script.type="text/plain";
    script.id="container";
    script.name="content";
    script.innerHTML="内容";
    form.appendChild(script);
    //
    //
    // script = document.createElement("script");
    // script.type="text/javascript";
    // script.src="/blog/plugins/ueditor/ueditor.config.js";
    // main.appendChild(script);

    // script.type="text/javascript";
    // script.src="/blog/plugins/ueditor/ueditor.all.js";
    // main.appendChild(script);

    var script = document.createElement("script");
    script.type="text/javascript";
    script.innerHTML="var ue = UE.getEditor('container')";
    form.appendChild(script);

    var div=document.createElement("div");
    div.style.position = "relative";
    div.style.left="50%";
    var button=document.createElement("button");
    button.className="btn btn-primary";
    button.type="submit";
    button.name="submit";
    button.innerHTML="发布";
    div.appendChild(button);
    form.appendChild(div);

    main.appendChild(form);
}