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

function validateAboutYou(aboutYou) {
    aboutYou = document.getElementById("aboutYou").value;
    if (aboutYou == "") {
        displayError("aboutYou");
        document.getElementById("aboutYouError").textContent = "Give a short bio"
        return false
    } else {
        hideError("aboutYou");
        return true;
    }
}

function validateTeachingExperience(teachingExperience) {
    teachingExperience = document.getElementById("teachingExperience").value;
    if (teachingExperience == "") {
        displayError("teachingExperience");
        document.getElementById("teachingExperienceError").textContent = "Give your teaching experience"
        return false
    } else {
        hideError("teachingExperience");
        return true;
    }
}

function validateWorkHistory(workHistory) {
    if (workHistory.length == 0) {
        displayError("company-1");
        displayError("activeFrom-1");
        displayError("activeTo-1");
        document.getElementById("company-1Error").textContent = "Please add your work"
        return false
    } else if (workHistory.length > 0) {
        var dateCheck = true;
        for (var index = 0; index < workHistory.length; index++) {
            if (workHistory[index].activeFrom > workHistory[index].activeTo) {
                displayError("company-" + (index + 1));
                displayError("activeFrom-" + (index + 1));
                displayError("activeTo-" + (index + 1));
                document.getElementById("company-" + (index + 1) + "Error").textContent = "Aww! set dates correctly"
                dateCheck = false;
            } else {
                hideError("company-" + (index + 1));

                document.getElementById("activeFrom-" + (index + 1)).style.webkitTransition = "";
                document.getElementById("activeFrom-" + (index + 1)).style.outline = "";
                document.getElementById("activeFrom-" + (index + 1)).style.padding = "";
                document.getElementById("activeFrom-" + (index + 1)).style.margin = "";
                document.getElementById("activeFrom-" + (index + 1)).style.border = "";

                document.getElementById("activeTo-" + (index + 1)).style.webkitTransition = "";
                document.getElementById("activeTo-" + (index + 1)).style.outline = "";
                document.getElementById("activeTo-" + (index + 1)).style.padding = "";
                document.getElementById("activeTo-" + (index + 1)).style.margin = "";
                document.getElementById("activeTo-" + (index + 1)).style.border = "";
            }
        }
        if (dateCheck == false) {
            return false
        }
    }
    return true;
}

function validateEducation(education) {
    if (education.length == 0) {
        displayError("school-1");
        displayError("enrolled-1");
        displayError("graduated-1");
        document.getElementById("school-1Error").textContent = "Please add your education"
        return false
    } else {
        var dateCheck = true;
        for (var index = 0; index < education.length; index++) {
            if (education[index].enrolled > education[index].graduated) {
                displayError("school-" + (index + 1));
                displayError("enrolled-" + (index + 1));
                displayError("graduated-" + (index + 1));
                document.getElementById("school-" + (index + 1) + "Error").textContent = "Aww! set dates correctly"
                dateCheck = false;
            } else {
                hideError("school-" + (index + 1));

                document.getElementById("enrolled-" + (index + 1)).style.webkitTransition = "";
                document.getElementById("enrolled-" + (index + 1)).style.outline = "";
                document.getElementById("enrolled-" + (index + 1)).style.padding = "";
                document.getElementById("enrolled-" + (index + 1)).style.margin = "";
                document.getElementById("enrolled-" + (index + 1)).style.border = "";

                document.getElementById("graduated-" + (index + 1)).style.webkitTransition = "";
                document.getElementById("graduated-" + (index + 1)).style.outline = "";
                document.getElementById("graduated-" + (index + 1)).style.padding = "";
                document.getElementById("graduated-" + (index + 1)).style.margin = "";
                document.getElementById("graduated-" + (index + 1)).style.border = "";
            }
        }
        if (dateCheck == false) {
            return false
        }
    }
    return true;
}