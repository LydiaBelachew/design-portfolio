


// SCROLL-REVEAL



// CONTACT-FORM VALIDATION 
$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name_input").val();
        var email = $("#email_input").val();
        var subject = $("#subject_input").val();
        $("#contact_form").empty; //To empty previous error/success message.
        //Checking for blank fields.
        if (name == '' || email == '' || subject == '') {
            alert("Please Fill Required Fields");
        } else {
            //Returns successful data submission message when the entered information is stored in database.
            $.post("contact-form.php"), {
                name1: name,
                email1: email,
                subject1: subject,
                message1: message
            }, function (data) {
                $("#contact_form").append(data); //Append returned message to message paragraph.
                if (data == "Your Query has been received, we will contact you soon.") {
                    $("#contact")[0].reset(); //To reset form fields on success.
                }
            }
        }
    })
});
    //             });
// }
//         });
//     });
