function Lunch() {
    document.querySelector(".rest").classList.remove("active");
    document.querySelector(".Breakfast-button").classList.remove("active");
    document.querySelector(".lunch-button").classList.add("active");
    document.querySelector(".restaurant").classList.remove("show");
    document.querySelector(".breakfast").classList.remove("show");
    document.querySelector(".lunch").classList.add("show");
}

function Breakfast() {
    document.querySelector(".rest").classList.remove("active");
    document.querySelector(".Breakfast-button").classList.add("active");
    document.querySelector(".lunch-button").classList.remove("active");
    document.querySelector(".restaurant").classList.remove("show");
    document.querySelector(".breakfast").classList.add("show");
    document.querySelector(".lunch").classList.remove("show");
}

function RestaurantMeal() {
    document.querySelector(".rest").classList.add("active");
    document.querySelector(".Breakfast-button").classList.remove("active");
    document.querySelector(".lunch-button").classList.remove("active");
    document.querySelector(".restaurant").classList.add("show");
    document.querySelector(".breakfast").classList.remove("show");
    document.querySelector(".lunch").classList.remove("show");
}

function CheckTheEmail() {
    var emailSub = document.getElementById("sub-email");
    if (emailSub.value.length == 0) {
        document.getElementById("subscribe-message").innerHTML = "يرجى ملء هذا الحقل";
    } else {
        alert("تم اشتراكك بالخدمة بالبريد التالي\nEmail : " + emailSub.value);
        emailSub.value = "";
        document.getElementById("subscribe-message").innerHTML = "";
    }
}
document.getElementById("sub-email").onkeydown = function() {
    document.getElementById("subscribe-message").innerHTML = "";
}

function CheckTheMessage() {
    var name = document.getElementById("name");
    var email = document.getElementById("msg-email");
    var message = document.getElementById("message");
    if (name.value.length == 0) {
        document.getElementById("name-msg").innerHTML = "يرجى ملء هذا الحقل";
    }
    if (email.value.length == 0) {
        document.getElementById("email-msg").innerHTML = "يرجى ملء هذا الحقل";
    }
    if (message.value.length == 0) {
        document.getElementById("msg").innerHTML = "يرجى ملء هذا الحقل";
    }
    if (name.value.length != 0 && email.value.length != 0 && message.value.length != 0) {
        var accept = confirm("هل تريد إرسال رسالة بهذه البيانات ؟ :\n Name : " + name.value + "\n Email : " + email.value + "\n Message : " + message.value);
        if (accept) {
            alert("تم ارسال الرسالة بنجاح");
        } else {
            alert("تم إلغاء ارسال الرسالة");
        }
        name.value = "";
        email.value = "";
        message.value = "";
    }
}
document.getElementById("name").onkeydown = function() {
    document.getElementById("name-msg").innerHTML = "";
}
document.getElementById("msg-email").onkeydown = function() {
    document.getElementById("email-msg").innerHTML = "";
}
document.getElementById("message").onkeydown = function() {
    document.getElementById("msg").innerHTML = "";
}