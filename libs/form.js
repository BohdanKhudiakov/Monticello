$(function() {
    $(".contact__btn").on("click", validate);

    // Validate email
    function validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }

    // send form
    function sendForm() {
        $(".contact__error").text("Form sending").fadeIn();
    }

    // validate email and send form after success validation
    function validate() {
        var email = $(".contact__input__mail").val();
        var $error = $(".contact__error");
        $error.text("");

        if (validateEmail(email)) {
            $error.fadeOut();
            sendForm();
        } else {
            $error.fadeIn();
            $error.text(email + " error");
        }
        return false;
    }
});