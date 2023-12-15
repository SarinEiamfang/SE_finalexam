$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            name: {
                required: true, 
                minlength: 3
            },
            email: {
                required: true,
                pattern: ^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$
            },
            comments: {
                minlength: 6
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Name must be at least 3 characters long"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            comments: {
                minlength: "Comments must be at least 6 characters long"
            }
        }
    });
});