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
    var data='{\"spcid\":\"'+spcid+'\",\"week\":\"'+document.getElementById("week").innerHTML+'\",\"major\":\"'+document.getElementById("major").innerHTML+'\",\"classes\":\"'+document.getElementById("classes").innerHTML+'\"}';
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

var jsonArray;
var headArray = [];

function requestJson() {
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
        cell.innerHTML = "<a href='javascript:void(0)' onclick='deletedata("+index+")'>删除</a>"+" / <a href='javascript:void(0)' onclick='terminate("+index+")'>销假</a>";
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

function terminate(index) {
    $.ajax({
        data:{"index":index},
        type:"get",
        url:"/terminate",
        contentType : "application/json;charset=utf-8",
        success:function (data) {
            alert(data);
            requestJson()
        }
    })
}