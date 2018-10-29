var formAnim = {
	$form: $('#form'),
	animClasses: ['face-up-left', 'face-up-right', 'face-down-left', 'face-down-right', 'form-complete', 'form-error'],
	resetClasses: function() {
		var $form = this.$form;
		
		$.each(this.animClasses, function(k, c) {
			$form.removeClass(c);
		});
	},
	faceDirection: function(d) {
		this.resetClasses();
		
		d = parseInt(d) < this.animClasses.length? d : -1;
		
		if(d >= 0) {
			this.$form.addClass(this.animClasses[d]);
		} 
	}
};

var $input = $('#email, #password'),
		$submit = $('#submit'),
		focused = false,
		completed = false;


$input.focus(function() {
	focused = true;
	
	if(completed) {
		formAnim.faceDirection(1);
	} else {
		formAnim.faceDirection(0);
	}
});

$input.blur(function() {
	formAnim.resetClasses();
});

$input.on('input paste keyup', function() {
	completed = true;
	
	$input.each(function() {
		if(this.value == '') {
			completed = false;
		}
	});
	
	if(completed) {
		formAnim.faceDirection(1);
	} else {
		formAnim.faceDirection(0);
	}
});

$submit.click(function() {
	focused = true;
	formAnim.resetClasses();
	
	if(completed) {
		$submit.css('pointer-events', 'none');

			$.ajax({
				url:'/blog/checklogin',
				type:'POST',
				data:{'username':$input[0].value,'password':$input[1].value},
				success:function (data) {
					if(data == "succeed"){
                        formAnim.faceDirection(4);
                        $input.val('');
                        completed = false;
                        $submit.css('pointer-events', '');
                        formAnim.resetClasses();
                        setTimeout(window.location.href="mainpage",2000)
					}else {
					    alert(data)
                    }
                }
			});

	} else {
		setTimeout(function() {
			formAnim.faceDirection(5);

			setTimeout(function() {
				formAnim.resetClasses();
			}, 2000);
		}, 1000);
	}
});

$(function() {
	setTimeout(function() {
		if(!focused) {
			$input.eq(0).focus();
		}
	}, 2000);
});