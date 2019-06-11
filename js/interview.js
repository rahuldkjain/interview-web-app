if (sessionStorage.length == 0) {
    document.getElementById("profile").style.display = 'none';
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
} else if (sessionStorage.length == 1) {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
} else if (sessionStorage.length == 2) {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("profile").style.display = 'none';
    document.getElementById("button-2").innerHTML = "&#10003";
    document.getElementById("interview").style.display = 'none';
} else {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("profile").style.display = 'none';
    document.getElementById("button-2").innerHTML = "&#10003";
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("button-3").innerHTML = "&#10003";
}


function nextPage() {

    // nextPage from Personal Info
    if (document.getElementById("nextPage").value == "→ submitPersonalInfo") {
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
            document.getElementById("profile").style.display = '';
            document.getElementById("personalInfo").style.display = 'none';
            document.getElementById("button-1").innerHTML = "&#10003";
            alert("data inserted successfully")
        }

    }
    return false
}