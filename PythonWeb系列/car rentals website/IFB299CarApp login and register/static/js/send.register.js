/**
 * Created by flybear on 2018/8/27.
 */
function send() {
    if (check()==0) {
        var form = new FormData(document.getElementById("register"));
        $.ajax({
            url: "/CarApp/checkregister",
            type: "POST",
            data: form,
            contentType: false,
            processData: false,
            success: function (data) {
                var flag = confirm(data + '!\nGo to login?');
                if (flag) {
                    window.location.href = '/CarApp/login'
                }
            }
        });
    }
}

function check() {
    if(!$("#name").val()){
        $('#namemsg').text('Please input your full name');
        return 1;
    }else {
        re=/^[a-zA-Z\d_\s]*$/g;
        result=re.test($("#name").val());
        if(!result){
            $('#namemsg').text('You can only type uppercase letters, lowercase letters and Numbers');
            return 1;
        }else {
            $('#namemsg').text('');
        }
    }

    if(!$("#password").val()){
        $('#pwdmsg').text('Please input your password');
        return 1;
    }else {
        re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,20}$/;
        result=re.test($("#password").val());
        if(!result){
            $('#pwdmsg').text('Passwords contain at least uppercase letters, lowercase letters, numbers, and not less than 6 bits.');
            return 1;
        }else {
            $('#pwdmsg').text('');
        }
    }

    if(!$("#address").val()){
        $('#addrmsg').text('Please input your address');
        return 1;
    }else {
        re=/^[a-zA-Z\d_\s]*$/g;
        result=re.test($("#address").val());
        if(!result){
            $('#addrmsg').text('You can only type uppercase letters, lowercase letters and Numbers');
            return 1;
        }else {
            $('#addrmsg').text('');
        }
    }

    if(!$("#phone").val()){
        $('#phonemsg').text('Please input your phone number');
        return 1;
    }else {
        re=/^\d{6,}$/;
        result=re.test($("#phone").val());
        if(!result){
            $('#phonemsg').text('Phone number should be no less than 6 digits.');
            return 1;
        }else{
            $('#phonemsg').text('');
        }
    }

    if(!$('#state').val()){
        $('#statemsg').text('Please choose your state');
        return 1;
    }else {
        re=/^[a-zA-Z\d_\s]*$/g;
        result = re.test($("#state").val());
        if(!result){
            $('#statemsg').text('You can only type uppercase letters, lowercase letters and Numbers');
            return 1;
        }else {
            $('#statemsg').text('');
        }
    }


    if(!$('#occupation').val()){
        $('#occupmsg').text('Please input your occupation');
        return 1;
    }else {
        re=/^[a-zA-Z\d_\s]*$/g;
        result = re.test($("#occupation").val());
        if(!result){
            $('#occupmsg').text('You can only type uppercase letters, lowercase letters and Numbers');
            return 1;
        }else {
            $('#occupmsg').text('');
        }
    }


    if(!($('#day').val()&&$('#month').val()&&$('#year').val())){
        $('#datemsg').text('Please input your birthday');
        return 1;
    }else{
        re=/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/
        result=re.test($('#year').val().toString()+"-"+$('#month').val().toString()+"-"+$('#day').val().toString())
        if(!result){
            $('#datemsg').text('Please input the correct format date');
            return 1;
        }else {
            $('#datemsg').text('');
        }
    }


    if(!(document.getElementsByName("gender")[0].checked || document.getElementsByName("gender")[1].checked)){
        $('#gendermsg').text('Please choose your gender');
        return 1;
    }else {
        $('#gendermsg').text('');
    }

    return 0
}