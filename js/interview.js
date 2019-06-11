function personalInfoPage() {
    document.getElementById("profile").style.display = 'none';
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("personalInfo").style.display = '';
}

function profilePage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("profile").style.display = '';
}

function expertisePage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("profile").style.display = 'none';
    document.getElementById("button-2").innerHTML = "&#10003";
    document.getElementById("interview").style.display = 'none';
    document.getElementById("expertise").style.display = '';
}

function interviewPage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("profile").style.display = 'none';
    document.getElementById("button-2").innerHTML = "&#10003";
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("button-3").innerHTML = "&#10003";
    document.getElementById("interview").style.display = '';
}


if (sessionStorage.length == 0) {
    personalInfoPage();
} else if (sessionStorage.length == 1) {
    profilePage();
} else if (sessionStorage.length == 2) {
    expertisePage();
} else {
    interviewPage();
}


// buttonID: 1 => submitPersonalInfo
// buttonID: 2 => submitProfile
// buttonID: 3 => goBackToPersonalInfo
// buttonID: 4 => submitExpertise
// buttonID: 5 => goBackToProfile
// buttonID: 6 => submitInterview
// buttonID: 7 => goBackToExpertise


function goTo(buttonID) {

    // nextPage from Personal Info
    if (buttonID == 1) {
        var validated = true
        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var whatAreYou = document.querySelector('input[name="whatAreYou"]:checked').value
        var university = document.getElementById("university").value
        var major = document.getElementById("major").value
        var graduationDate = document.getElementById("graduationDate").value
        var taxID = document.querySelector('input[name="taxID"]:checked').value
        var mobile = document.getElementById("mobile").value
        console.log("email: " + email)

        validated = validateName(name);
        if (validated) {
            validated = validateEmail(email);
        }
        if (validated) {
            if (university == "") {
                validated = false
                alert("Please enter your university")
            } else if (major == "") {
                validated = false
                alert("Please enter your major")
            } else if (graduationDate == "") {
                validated = false
                alert("Please select your graduation year")
            }
        }
        if (validated) {
            validated = validateMobile(mobile)
        }
        if (validated) {
            var data = {
                name: name,
                email: email,
                whatAreYou: whatAreYou,
                university: university,
                major: major,
                graduationDate: graduationDate,
                taxID: taxID,
                mobile: mobile
            }
            sessionStorage.setItem("personalInfo", JSON.stringify(data))
            console.log(JSON.parse(sessionStorage.getItem("personalInfo")))
            profilePage();
            alert("data inserted successfully")
        }

    } else if (buttonID == 2) {
        var validated = true
        var aboutYou = document.getElementById("aboutYou").value
        var teachingExperience = document.getElementById("teachingExperience").value
        var company = document.getElementById("company").value
        var activeFrom = document.getElementById("activeFrom").value
        var activeTo = document.getElementById("activeTo").value
        var school = document.getElementById("school").value
        var enrolled = document.getElementById("enrolled").value
        var graduated = document.getElementById("graduated").value

        var data = {
            aboutYou: aboutYou,
            teachingExperience: teachingExperience,
            workHistory: [{ company: company, activeFrom: activeFrom, activeTo: activeTo }],
            education: [{ school: school, enrolled: enrolled, graduated: graduated }]
        }

        validated = validateProfile(data)

        if (validated) {
            sessionStorage.setItem("profile", JSON.stringify(data))
            console.log(JSON.parse(sessionStorage.getItem("profile")))
            expertisePage();
            alert("profile inserted successfully")
        }
    } else if (buttonID == 3) {
        document.getElementById("name").value = JSON.parse(sessionStorage.getItem("personalInfo")).name
        document.getElementById("email").value = JSON.parse(sessionStorage.getItem("personalInfo")).email
        document.querySelector('input[name="whatAreYou"]:checked').value = JSON.parse(sessionStorage.getItem("personalInfo")).whatAreYou
        document.getElementById("university").value = JSON.parse(sessionStorage.getItem("personalInfo")).university
        document.getElementById("major").value = JSON.parse(sessionStorage.getItem("personalInfo")).major
        document.getElementById("graduationDate").value = JSON.parse(sessionStorage.getItem("personalInfo")).graduationDate
        document.querySelector('input[name="taxID"]:checked').value = JSON.parse(sessionStorage.getItem("personalInfo")).taxID
        document.getElementById("mobile").value = JSON.parse(sessionStorage.getItem("personalInfo")).mobile

        personalInfoPage();
    } else if (buttonID == 4) {

    } else if (buttonID == 5) {

    } else if (buttonID == 6) {

    } else if (buttonID == 7) {

    }

    return false
}