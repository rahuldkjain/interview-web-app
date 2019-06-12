function personalInfoPage() {
    document.getElementById("profile").style.display = 'none';
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("personalInfo").style.display = '';
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "gray"
}

function profilePage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("profile").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "gray"
}

function expertisePage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("profile").style.display = 'none';
    document.getElementById("button-2").innerHTML = "&#10003";
    document.getElementById("interview").style.display = 'none';
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("expertise").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "gray"
}

function interviewPage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("profile").style.display = 'none';
    document.getElementById("button-2").innerHTML = "&#10003";
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("button-3").innerHTML = "&#10003";
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("interview").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "gray"

}

function thankYouPage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("button-1").innerHTML = "&#10003";
    document.getElementById("profile").style.display = 'none';
    document.getElementById("button-2").innerHTML = "&#10003";
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("button-3").innerHTML = "&#10003";
    document.getElementById("interview").style.display = 'none';
    document.getElementById("button-4").innerHTML = "&#10003";
    document.getElementById("thankYou").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "gray"
    sessionStorage.clear()
}


var workHistoryCount = 1

function addWorkHistory() {
    workHistoryCount += 1
    var company = document.createElement("INPUT");
    company.setAttribute("type", "text");
    company.setAttribute("name", "company");
    company.setAttribute("placeholder", "Company");
    company.setAttribute("id", "company-" + workHistoryCount);

    var activeFrom = document.createElement("SELECT");
    activeFrom.setAttribute("name", "activeFrom-" + workHistoryCount);
    activeFrom.setAttribute("id", "activeFrom-" + workHistoryCount);
    var option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    activeFrom.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    activeFrom.add(option)


    var activeTo = document.createElement("SELECT");
    activeTo.setAttribute("name", "activeTo-" + workHistoryCount);
    activeTo.setAttribute("id", "activeTo-" + workHistoryCount);
    var option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    activeTo.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    activeTo.add(option)

    var workHistoryDiv = document.getElementById("workHistory")
    workHistoryDiv.appendChild(company)
    workHistoryDiv.appendChild(activeFrom)
    workHistoryDiv.appendChild(activeTo)
}

var schoolCount = 1

function addNewSchool() {
    schoolCount += 1
    var school = document.createElement("INPUT");
    school.setAttribute("type", "text");
    school.setAttribute("name", "school");
    school.setAttribute("placeholder", "School");
    school.setAttribute("id", "school-" + schoolCount);

    var enrolled = document.createElement("SELECT");
    enrolled.setAttribute("name", "enrolled-" + schoolCount);
    enrolled.setAttribute("id", "enrolled-" + schoolCount);
    var option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    enrolled.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    enrolled.add(option)


    var graduated = document.createElement("SELECT");
    graduated.setAttribute("name", "graduated-" + schoolCount);
    graduated.setAttribute("id", "graduated-" + schoolCount);
    var option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    graduated.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    graduated.add(option)

    var educationDiv = document.getElementById("education")
    educationDiv.appendChild(school)
    educationDiv.appendChild(enrolled)
    educationDiv.appendChild(graduated)
}

if (sessionStorage.length == 0) {
    document.getElementById("button-1").style.backgroundColor = "#FF9F1C";
    document.getElementById("button-1").style.color = "#ffffff";
    document.getElementById("button-1").style.border = "1px solid #FF9F1C";
    document.getElementById("interview__container_header-personalInfo").style.color = ""
    personalInfoPage();
} else if (sessionStorage.length == 1) {
    profilePage();
} else if (sessionStorage.length == 2) {
    expertisePage();
} else if (sessionStorage.length == 3) {
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
        var company = document.getElementById("company-1").value
        var activeFrom = document.getElementById("activeFrom-1").value
        var activeTo = document.getElementById("activeTo-1").value
        var school = document.getElementById("school-1").value
        var enrolled = document.getElementById("enrolled-1").value
        var graduated = document.getElementById("graduated-1").value

        var data = {
            aboutYou: aboutYou,
            teachingExperience: teachingExperience,
            workHistory: [{ company: company, activeFrom: activeFrom, activeTo: activeTo }],
            education: [{ school: school, enrolled: enrolled, graduated: graduated }]
        }

        for (var index = 2; index <= workHistoryCount; index++) {
            company = document.getElementById("company-" + index).value
            activeFrom = document.getElementById("activeFrom-" + index).value
            activeTo = document.getElementById("activeTo-" + index).value
            data.workHistory.push({ company: company, activeFrom: activeFrom, activeTo: activeTo })
        }

        for (var index = 2; index <= schoolCount; index++) {
            school = document.getElementById("school-" + index).value
            enrolled = document.getElementById("enrolled-" + index).value
            graduated = document.getElementById("graduated-" + index).value
            data.education.push({ school: school, enrolled: enrolled, graduated: graduated })
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
        //fetch the selected checkboxes values
        var domain = stream + "-expertise";
        var response = document.getElementsByName(domain)
        var expertise = []
        for (var i = 0; i < response.length; i++) {
            if (response[i].checked == true) {
                expertise.push(response[i].value)
            }
        }
        //validation
        if (expertise.length < 1) {
            alert("Please select atleast one expertise")
        } else {
            var data = {
                stream: stream,
                expertise: expertise
            }
            sessionStorage.setItem("expertise", JSON.stringify(data))
            interviewPage();
            alert("Expertise added successfully");
        }

    } else if (buttonID == 5) {
        document.getElementById("aboutYou").value = JSON.parse(sessionStorage.getItem("profile")).aboutYou
        document.getElementById("teachingExperience").value = JSON.parse(sessionStorage.getItem("profile")).teachingExperience

        for (var index = 1; index <= JSON.parse(sessionStorage.getItem("profile")).workHistory.length; index++) {
            if (index > 1) {
                addWorkHistory();
            }
            document.getElementById("company-" + index).value = JSON.parse(sessionStorage.getItem("profile")).workHistory[index - 1].company
            document.getElementById("activeFrom-" + index).value = JSON.parse(sessionStorage.getItem("profile")).workHistory[index - 1].activeFrom
            document.getElementById("activeTo-" + index).value = JSON.parse(sessionStorage.getItem("profile")).workHistory[index - 1].activeTo
        }

        for (var index = 1; index <= JSON.parse(sessionStorage.getItem("profile")).education.length; index++) {
            if (index > 1) {
                addNewSchool();
            }
            document.getElementById("school-" + index).value = JSON.parse(sessionStorage.getItem("profile")).education[index - 1].school
            document.getElementById("enrolled-" + index).value = JSON.parse(sessionStorage.getItem("profile")).education[index - 1].enrolled
            document.getElementById("graduated-" + index).value = JSON.parse(sessionStorage.getItem("profile")).education[index - 1].graduated
        }

        profilePage();

    } else if (buttonID == 6) {
        if (JSON.parse(sessionStorage.getItem("questions")).length == 3) {
            var answer4 = document.getElementById("questionText4").value
            if (answer4 == "") {
                alert("Please answer the question! Skipping questions not allowed")
            } else {
                var data = JSON.parse(sessionStorage.getItem("questions"))
                data.push({ question4: answer4 })
                sessionStorage.setItem("questions", JSON.stringify(data))
                document.getElementById("button-question-4").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
                alert("Question 4 response submitted")
                alert("Interview Ended! Thank You for participating")
                thankYouPage();
            }
        }

    } else if (buttonID == 7) {
        var name = JSON.parse(sessionStorage.getItem("expertise")).stream + "-expertise";
        var expertises = JSON.parse(sessionStorage.getItem("expertise")).expertise
        expertises.forEach(expertise => {
            document.getElementById(expertise).checked = true;
        });

        switch (name) {
            case "computer-science-expertise":
                computerScienceExpertise();
                break;
            case "computer-software-expertise":
                computerSoftwareExpertise();
                break;

            case "engineering-expertise":
                engineeringExpertise();
                break;
            case "history-expertise":
                historyExpertise();
                break;
            case "humanities-expertise":
                humanitiesExpertise();
                break;
            case "math-expertise":
                mathExpertise();
                break;
            case "science-expertise":
                scienceExpertise();
                break;
            case "social-science-expertise":
                socialScienceExpertise();
                break;
            case "standardized-tests-expertise":
                standardizedTestsExpertise();
                break;
            default:
                break;
        }
    }

    return false
}

// pageID: 1 => personalInfo
// pageID: 2 => profile
// pageID: 3 => expertise
// pageID: 4 => interview

function jumpPage(pageID) {
    if (pageID == 1) {
        if (sessionStorage.length == 0) {
            personalInfoPage();
        } else {
            goTo(3);
        }
    } else if (pageID == 2) {
        if (sessionStorage.length == 1) {
            profilePage();
        } else if (sessionStorage.length > 1) {
            goTo(5);
        } else {
            alert("Fill this page first! Jumping not allowed")
        }
    } else if (pageID == 3) {
        if (sessionStorage.length == 2) {
            expertisePage();
        } else if (sessionStorage.length > 2) {
            goTo(7);
        } else {
            alert("Fill this page first! Jumping not allowed")
        }
    } else if (pageID == 4) {
        if (sessionStorage.length == 3) {
            interviewPage();
        } else if (sessionStorage.length > 3) {
            interviewPage();
        } else {
            alert("Fill this page first! Jumping not allowed")
        }
    }
}