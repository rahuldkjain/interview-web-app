function validateName(name) {
    name = document.getElementById("name").value;
    if (name == "") {
        displayError("name")
        document.getElementById("nameError").textContent = "Please enter your name"
        return false
    } else {
        hideError("name");
    }
    return true
}

function validateUniversity(university) {
    university = document.getElementById("university").value;
    if (university == "") {
        displayError("university")
        document.getElementById("universityError").textContent = "Please enter your university"
        return false
    } else {
        hideError("university");
    }
    return true
}

function validateMajor(major) {
    major = document.getElementById("major").value;
    if (major == "") {
        displayError("major")
        document.getElementById("majorError").textContent = "Please enter your major"
        return false
    } else {
        hideError("major");
    }
    return true
}

function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    email = document.getElementById("email").value;
    if (email == "") {
        displayError("email");
        document.getElementById("emailError").textContent = "Please enter your email"
        return false;
    } else if (reg.test(email) == false) {
        displayError("email");
        document.getElementById("emailError").textContent = "Enter valid email address"
        return false;
    } else {
        hideError("email")
    }

    return true;
}

function validateMobile(mobile) {
    mobile = document.getElementById("mobile").value;
    if (mobile == "") {
        displayError("mobile");
        document.getElementById("mobileError").textContent = "Please enter mobile number";
        return false
    } else if (mobile.length < 10 || mobile.length > 12) {
        displayError("mobile");
        document.getElementById("mobileError").textContent = "Enter valid mobile number";
        return false;
    } else {
        hideError("mobile");
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