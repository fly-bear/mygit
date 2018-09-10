/**
 * Created by flybear on 2018/8/27.
 */
function check() {
    var form = new FormData(document.getElementById("login"));
    $.ajax({
        url:"/CarApp/checklogin",
        type:"POST",
        data:form,
        contentType: false,
        processData: false,
        success:function (data) {
            if (data=='succeed'){
                window.location.href='/CarApp/'
            }else {
                alert(data)
            }
        }
    })
}