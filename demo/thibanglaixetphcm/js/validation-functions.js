$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            name: {
             message: 'The name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The  name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The name can only accept alphabetical input'
                    },
                }
            },
			 comment: {
                message: 'comment is not valid',
                validators: {
                    notEmpty: {
                        message: 'comment is required and cannot be empty'
                    }
                }
            },
			 subject: {
                message: 'subject is not valid',
                validators: {
                    notEmpty: {
                        message: 'subject is required and cannot be empty'
                    }
                }
            },
			 email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
			firstName: {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            lastName: {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'Last Names can only consist of alphabetical characters'
                    },
                }
            },
			password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    password: {
                        message: 'The password is not a valid'
                    }
                }
            },
           
           
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            },
			name: {
             message: 'The name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The  name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The name can only accept alphabetical input'
                    },
                }
            },
			email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
			 comment: {
                message: 'comment is not valid',
                validators: {
                    notEmpty: {
                        message: 'comment is required and cannot be empty'
                    }
                }
            },
			mobile: {
                validators: {
                    notEmpty: {
                        message: 'The mobile number is required and cannot be empty'
                    },
                    mobilenumber: {
                        message: 'The mobile number is not a valid'
                    }
                }
            },
			 
			
        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        // var url = 'https://script.google.com/macros/s/AKfycbyGjwqtLZXQKnsbAUmrHTJQr3Px-cGzFNgRCy1xGuZxlYYyyfDV/exec';
        var url = 'https://script.google.com/macros/s/AKfycbw3E0FOlsCX0FYZvn2EGMmaJJ6j42BC3ihn1XEqH6BawWHK2_o/exec';
        var redirectUrl = 'contact-form-thank-you.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    });
});