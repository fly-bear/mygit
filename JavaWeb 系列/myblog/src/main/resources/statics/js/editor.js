function getname(file) {
    var name = file.files[0].name;
    $("#filename")[0].innerHTML = name;
}


function uploadfile() {
    var input = document.getElementById("upfile");
    if(input.files.length == 0){
        alert("请选择图片文件")
    }else {
        var formdata = new FormData();
        formdata.append("pic",input.files[0]);
        $.ajax({
            type:'POST',
            url:"/blog/uploadimage",
            data:formdata,
            processData: false,
            contentType: false,
            success:function (data) {
                if(data=="failed")
                    alert("上传失败！");
                else
                $("#successfullyupload")[0].innerHTML = data;
                alert("上传成功！");
            }
        });
    }
}

function submitarticle() {
    if($("#title")[0].value == ""){
        alert("请输入标题！");
    }else if($("#successfullyupload")[0].innerHTML == ""){
        alert("未上传图片！")
    }else {
        var article = editor.txt.html();
        var picture = $("#successfullyupload")[0].innerHTML;
        var title = $("#title")[0].value;
        var type = $("#type")[0].value;
        var formdata = new FormData();
        formdata.append("title",title);
        formdata.append("picture",picture);
        formdata.append("content",article);
        formdata.append("type",type);
        $.ajax({
            type:'POST',
            url:"/blog/newarticle",
            data:formdata,
            processData: false,
            contentType: false,
            success:function (data) {
                if(data=="failed"){
                    alert("上传失败")
                }else {
                    if(confirm("上传成功，跳转主页？")){
                        window.location.href="/blog/mainpage"
                    }
                }
            }

        })

    }
}