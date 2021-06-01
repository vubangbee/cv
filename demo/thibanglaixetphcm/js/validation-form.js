/*-------------------------
     AJAX CONTACT FORM - Get Google Sheet
-------------------------*/
function validateEmail(email) {

	"use strict";

	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validatePhone(phone) {
	var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
	return vnf_regex.test(phone);
}
function sendEmail() {

	"use strict";

	var name = $('#name').val();
	var email = $('#email').val();
	// var comments = $('#comments').val();
	var phone = $('#phone').val();
	// var address = $('#address').val();
	
	if (!name) {
		$('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
		$('.toast-body').html('Vui lòng nhập tên');
	} else if (!phone) {
		$('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
		$('.toast-body').html('Nhập số điện thoại');
	} else if (!validatePhone(phone)) {
		$('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
		$('.toast-body').html('Nhập số điện thoại không hợp lệ');
		
	// } else if (!email) {
	// 	$('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
	// 	$('.toast-body').html('Vui lòng nhập địa chỉ email');
	// } else if (!validateEmail(email)) {
	// 	$('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
	// 	$('.toast-body').html('Email không hợp lệ');

	} else {
		var data = $('#contactForm').serialize();
		
		$.ajax({
			type: 'GET',
			data: data,
			url: "https://script.google.com/macros/s/AKfycbxGIMccC2VUqI-e4AmrlxzlNb7BmAibE5rLMLF36Lj7lhDhAJY/exec",
			dataType: 'json',
			crossDomain: true,
			beforeSend: function () {
				$('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Loading..');
			},
			success: function (data) {
				var redirectUrl = 'contact-form-thank-you.html';

				$('#submit-btn').html('Đã gửi');
				$(location).attr('href',redirectUrl);
				if (data == 'false') {
					$('#message').toast('show').addClass('bg-warning').removeClass('bg-success bg-danger');
					$('.toast-body').html('Gửi không thành công');
				} else {
					$('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
					$('.toast-body').html('Cảm ơn bạn đã gửi đặt hàng thành công');
					fbq('track', 'Lead');
					

				}
			},
			error: function (xhr) {
				$('#submit-btn').html('Submit');
				$('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
				$('.toast-body').html('<strong> Error : </strong> Lỗi trong quá trình gửi, vui lòng liên hệ qua số điện thoại 0969066500');
			},
		});
	}
}
