/**
 * Created by 我不是熊 on 2018/9/9.
 */

function change_pwd() {
    content = document.getElementById("content");
    content.innerHTML="<form id='pwd'> <table>" +
        "<tr><td style='text-align: right'><label>old password:</label></td><td style='text-align: left'><input type='password' name='old_pwd' id='old_pwd'></td></tr>" +
        "<tr><td colspan='2'><span id='oldmsg' style='color: #000dff'></span></td></tr>" +
        "<tr><td style='text-align: right'><label>new password:</label></td><td style='text-align: left'><input type='password' name='new_pwd' id='new_pwd'></td></tr>" +
        "<tr><td colspan='2'><span id='newmsg' style='color: #000dff'></span></td></tr>" +
        "<tr><td colspan='2'><a class='button button-highlight button-pill' onclick='pwd_change()' >submit</a></td></tr>" +
        "</table></form>";
}
function pwd_change() {
    if(check_pwd()==0) {
        var form = new FormData(document.getElementById("pwd"));
        $.ajax({
            url: "/CarApp/changepwd",
            type: "POST",
            data: form,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 'succeed!') {
                    alert(data);
                    window.location.href = '/CarApp/login';
                } else {
                    alert(data);
                }
            }
        });
    }
}

function check_pwd() {
    if(!$("#old_pwd").val()){
        $('#oldmsg').text('Please input your old password');
        return 1;
    }else {
        re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,20}$/;
        result=re.test($("#old_pwd").val());
        if(!result){
            $('#oldmsg').text('Passwords contain at least uppercase letters, lowercase letters, numbers, and not less than 6 bits.');
            return 1;
        }else {
            $('#oldmsg').text('');
        }
    }

    if(!$("#new_pwd").val()){
        $('#newmsg').text('Please input your new password');
        return 1;
    }else {
        re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,20}$/;
        result=re.test($("#new_pwd").val());
        if(!result){
            $('#newmsg').text('Passwords contain at least uppercase letters, lowercase letters, numbers, and not less than 6 bits.');
            return 1;
        }else {
            $('#newmsg').text('');
        }
    }

    return 0;
}

function change_addr(address) {
    content = document.getElementById("content");
    content.innerHTML="<form id='addr'><table>" +
        "<tr><td><label>old address:</label></td><td><label style='color: #76ffe7'>"+address+"</label></td></tr>" +
        "<tr><td><label>new address:</label></td><td><input id='new_addr' name='new_addr' style='width: 100%' required='required'></td></tr>" +
        "<tr><td colspan='2'><a class='button button-highlight button-pill' onclick='addr_change()'>submit</a></td></tr>" +
        "</table></form>";
}

function addr_change() {
    var form = new FormData(document.getElementById("addr"));
        $.ajax({
            url: "/CarApp/changeaddr",
            type: "POST",
            data: form,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 'succeed!') {
                    alert(data);
                    window.location.href = '/CarApp/account';
                } else {
                    alert(data);
                }
            }
        });
}


function change_phone(phone) {
    content = document.getElementById("content");
    content.innerHTML="<form id='phone'><table>" +
        "<tr><td><label>old phone number:</label></td><td><label style='color: #76ffe7'>"+phone+"</label></td></tr>" +
        "<tr><td><label>new phone number:</label></td><td><input id='new_phone' name='new_phone' style='width: 100%' required='required'></td></tr>" +
        "<tr><td colspan='2'><a class='button button-highlight button-pill' onclick='phone_change()'>submit</a></td></tr>" +
        "</table></form>";
}

function phone_change() {
    var form = new FormData(document.getElementById("phone"));
        $.ajax({
            url: "/CarApp/changephone",
            type: "POST",
            data: form,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 'succeed!') {
                    alert(data);
                    window.location.href = '/CarApp/account';
                } else {
                    alert(data);
                }
            }
        });
}
