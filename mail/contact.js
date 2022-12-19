$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);
            Email.send({
                SecureToken : "a0b85244-b42c-4004-8add-11653c5c523e",
                To : "m06011558@gmail.com",
                From : email,
                Subject : subject,
                Body : message
            }).then(
              message => alert(message)
            );
             Email.send({
                SecureToken : "a0b85244-b42c-4004-8add-11653c5c523e",
                To : email,
                From : "m06011558@gmail.com",
                Subject : subject,
                Body : "We have recieved your email./n If you are interested to use our services then Message us in our whatsapp +923260209662 or visit our fiverr profile https://fiverr.com/jsdeveloper2194"
            }).then(
                function () {
                            $('#success').html("<div class='alert alert-success'>");
                            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                                    .append("</button>");
                            $('#success > .alert-success')
                                    .append("<strong>Your message has been sent. </strong>");
                            $('#success > .alert-success')
                                    .append('</div>');
                            $('#contactForm').trigger("reset");
                        }
            ).catch(
                function () {
                            $('#success').html("<div class='alert alert-danger'>");
                            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                                    .append("</button>");
                            $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                            $('#success > .alert-danger').append('</div>');
                            $('#contactForm').trigger("reset");
                        }
            );


            // $.ajax({
            //     contentType: 'application/json',
            //     dataType: 'json',
            //     url: "http://ec2-65-0-29-248.ap-south-1.compute.amazonaws.com:5000/api/sendmsg",
            //     type: "POST",
            //     data: JSON.stringify({
            //         name: name,
            //         email: email,
            //         subject: subject,
            //         message: message
            //     }),
            //    caches:false,
            //     success: function () {
            //         $('#success').html("<div class='alert alert-success'>");
            //         $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //                 .append("</button>");
            //         $('#success > .alert-success')
            //                 .append("<strong>Your message has been sent. </strong>");
            //         $('#success > .alert-success')
            //                 .append('</div>');
            //         $('#contactForm').trigger("reset");
            //     },
            //     error: function () {
            //         $('#success').html("<div class='alert alert-danger'>");
            //         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //                 .append("</button>");
            //         $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
            //         $('#success > .alert-danger').append('</div>');
            //         $('#contactForm').trigger("reset");
            //     },
            //     complete: function () {
            //         setTimeout(function () {
            //             $this.prop("disabled", false);
            //         }, 1000);
            //     }
            // });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
