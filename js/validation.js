function validateName(name) {
    if (name == "") {
        alert("Please enter your name")
        return false
    }
    return true
}

function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email == "") {
        alert("Please enter your email");
        return false;
    } else if (reg.test(email) == false) {
        alert('Invalid Email Address');
        return false;
    }

    return true;
}

function validateMobile(mobile) {
    if (mobile == "") {
        alert("Please enter your mobile number");
        return false
    } else if (mobile.length > 10) {
        alert("Please enter valid mobile number");
        return false;
    }

    return true
}