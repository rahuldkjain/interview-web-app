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

function validateProfile(profileData) {
    if (profileData.aboutYou == "") {
        alert("Please tell us a little bit about yourself")
        return false
    } else if (profileData.teachingExperience == "") {
        alert("Please tell us about your teaching experience")
        return false
    } else if (profileData.workHistory.length == 0) {
        alert("Please tell us about your work history")
        return false
    } else if (profileData.workHistory.length > 0) {
        for (var index = 0; index < profileData.workHistory.length; index++) {
            if (profileData.workHistory[index].activeFrom > profileData.workHistory[index].activeTo) {
                alert("Please set the Work History dates correctly")
                return false
            }
        }
    }
    if (profileData.education.length == 0) {
        alert("Please tell us about your education")
        return false
    } else {
        for (var index = 0; index < profileData.education.length; index++) {
            if (profileData.education[index].enrolled > profileData.education[index].graduated) {
                alert("Please set the Education dates correctly")
                return false
            }
        }
    }
    return true
}