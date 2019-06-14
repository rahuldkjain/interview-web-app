// Global Variables
var workHistoryCount = 1
var schoolCount = 1

// to reset round buttons of header
function resetButtons() {
    for (var index = 1; index <= sessionStorage.length; index++) {
        document.getElementById("button-" + index).style.backgroundColor = "white";
        document.getElementById("button-" + index).style.color = "#FF9F1C";
        document.getElementById("button-" + index).innerHTML = "&#10003";
        document.getElementById("button-" + index).style.border = "1px solid #FF9F1C";
    }
    for (var index = sessionStorage.length + 1; index <= 4; index++) {
        document.getElementById("button-" + index).style.backgroundColor = "white";
        document.getElementById("button-" + index).style.color = "black";
        document.getElementById("button-" + index).innerHTML = index;
        document.getElementById("button-" + index).style.border = "1px solid black";
    }
}

// display personalInfoPage
function personalInfoPage() {
    document.getElementById("profile").style.display = 'none';
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("personalInfo").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "black"
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "gray"

    resetButtons();

    document.getElementById("button-1").style.backgroundColor = "#FF9F1C";
    document.getElementById("button-1").style.color = "white";
    document.getElementById("button-1").style.border = "1px solid #FF9F1C";
}

//display profilePage
function profilePage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("profile").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-profile").style.color = "black"
    document.getElementById("interview__container_header-expertise").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "gray"

    resetButtons();

    document.getElementById("button-2").style.backgroundColor = "#FF9F1C";
    document.getElementById("button-2").style.color = "white";
    document.getElementById("button-2").style.border = "1px solid #FF9F1C";
}

//display expertisePage
function expertisePage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("profile").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("expertise").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "black"
    document.getElementById("interview__container_header-interview").style.color = "gray"

    resetButtons();

    document.getElementById("button-3").style.backgroundColor = "#FF9F1C";
    document.getElementById("button-3").style.color = "white";
    document.getElementById("button-3").style.border = "1px solid #FF9F1C";
}

//display interviewPage
function interviewPage() {
    document.getElementById("personalInfo").style.display = 'none';

    document.getElementById("profile").style.display = 'none';
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("thankYou").style.display = 'none';
    document.getElementById("interview").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "black"

    resetButtons();

    document.getElementById("button-4").style.backgroundColor = "#FF9F1C";
    document.getElementById("button-4").style.color = "white";
    document.getElementById("button-4").style.border = "1px solid #FF9F1C";

}

// display thankYouPage
function thankYouPage() {
    document.getElementById("personalInfo").style.display = 'none';
    document.getElementById("profile").style.display = 'none';
    document.getElementById("expertise").style.display = 'none';
    document.getElementById("interview").style.display = 'none';
    document.getElementById("thankYou").style.display = '';
    document.getElementById("interview__container_header-personalInfo").style.color = "gray"
    document.getElementById("interview__container_header-profile").style.color = "gray"
    document.getElementById("interview__container_header-expertise").style.color = "gray"
    document.getElementById("interview__container_header-interview").style.color = "gray"

    resetButtons();
    sessionStorage.clear()
}


// add another job in html
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
    option.text = "Active From"
    activeFrom.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    activeFrom.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    activeFrom.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2017)
    option.text = 2017
    activeFrom.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2016)
    option.text = 2016
    activeFrom.add(option)


    var activeTo = document.createElement("SELECT");
    activeTo.setAttribute("name", "activeTo-" + workHistoryCount);
    activeTo.setAttribute("id", "activeTo-" + workHistoryCount);
    var option = document.createElement("option");
    option.text = "Active To"
    activeTo.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    activeTo.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    activeTo.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2017)
    option.text = 2017
    activeTo.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2016)
    option.text = 2016
    activeTo.add(option)

    var br = document.createElement("br")

    var workHistoryDiv = document.getElementById("workHistory")
    workHistoryDiv.appendChild(company)
    workHistoryDiv.appendChild(br)
    workHistoryDiv.appendChild(activeFrom)
    workHistoryDiv.appendChild(activeTo)

    var oldLink = document.getElementById("addWorkLink");
    oldLink.parentNode.removeChild(oldLink);

    var br1 = document.createElement("br")
    var addWorkLink = document.createElement("a")
    addWorkLink.setAttribute("id", "addWorkLink")
    addWorkLink.setAttribute("href", "javascript: addWorkHistory();")
    addWorkLink.text = "+ Add work"

    workHistoryDiv.appendChild(br1)
    workHistoryDiv.appendChild(addWorkLink)
}


// add another school in html
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
    option.text = "Enrolled"
    enrolled.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    enrolled.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    enrolled.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2017)
    option.text = 2017
    enrolled.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2016)
    option.text = 2016
    enrolled.add(option)


    var graduated = document.createElement("SELECT");
    graduated.setAttribute("name", "graduated-" + schoolCount);
    graduated.setAttribute("id", "graduated-" + schoolCount);
    var option = document.createElement("option");
    option.text = "Graduated";
    graduated.add(option);
    option = document.createElement("option");
    option.setAttribute("value", 2019)
    option.text = 2019
    graduated.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2018)
    option.text = 2018
    graduated.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2017)
    option.text = 2017
    graduated.add(option)
    option = document.createElement("option");
    option.setAttribute("value", 2016)
    option.text = 2016
    graduated.add(option)

    var br = document.createElement("br")

    var educationDiv = document.getElementById("education")
    educationDiv.appendChild(school)
    educationDiv.appendChild(br);
    educationDiv.appendChild(enrolled)
    educationDiv.appendChild(graduated)

    var oldLink = document.getElementById("addSchoolLink");
    oldLink.parentNode.removeChild(oldLink);

    var br1 = document.createElement("br")
    var addSchoolLink = document.createElement("a")
    addSchoolLink.setAttribute("id", "addSchoolLink")
    addSchoolLink.setAttribute("href", "javascript: addNewSchool();")
    addSchoolLink.text = "+ Add school"

    educationDiv.appendChild(br1)
    educationDiv.appendChild(addSchoolLink)
}


// at the time of page reload
if (sessionStorage.length == 0) {
    document.getElementById("interview__container_header-personalInfo").style.color = ""
    personalInfoPage();
} else if (sessionStorage.length == 1) {
    profilePage();
} else if (sessionStorage.length == 2) {
    expertisePage();
} else if (sessionStorage.length == 3) {
    interviewPage();
} else if (sessionStorage.length == 4) {
    var questions = JSON.parse(sessionStorage.getItem("questions"))
    for (var index = 1; index <= questions.length; index++) {
        document.getElementById("questionText" + index).value = questions[index - 1].question
    }
    jump(questions.length);
    interviewPage();
}

function displayError(element) {
    document.getElementById(element).style.webkitTransition = "all 0.30s ease-in-out;";
    document.getElementById(element).style.outline = "none";
    document.getElementById(element).style.padding = "3px 0px 3px 3px";
    document.getElementById(element).style.margin = "5px 1px 3px 0px";
    document.getElementById(element).style.border = "1px solid red";
}

function hideError(element) {
    document.getElementById(element).style.webkitTransition = "";
    document.getElementById(element).style.outline = "";
    document.getElementById(element).style.padding = "";
    document.getElementById(element).style.margin = "";
    document.getElementById(element).style.border = "";
    document.getElementById(element + "Error").textContent = "";
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
        if (sessionStorage.length == 1) {
            profilePage();
        } else if (sessionStorage.length > 1) {
            goTo(5);
        } else {
            var validated = true
            var name = document.getElementById("name").value
            var email = document.getElementById("email").value
            var whatAreYou = document.querySelector('input[name="whatAreYou"]:checked').value
            var university = document.getElementById("university").value
            var major = document.getElementById("major").value
            var graduationDate = document.getElementById("graduationDate").value
            var taxID = document.querySelector('input[name="taxID"]:checked').value
            var mobile = document.getElementById("mobile").value

            if (validated) {
                validated = validateName(name);
                validated = validateEmail(email);
                validated = validateUniversity(university);
                validated = validateMajor(major);
                validated = validateMobile(mobile);
            }
            var nameElement = document.getElementById("name");
            nameElement.addEventListener('change', function() {
                name = document.getElementById("name").value
                validated = validateName(name);
            });

            var emailElement = document.getElementById("email");
            emailElement.addEventListener('change', function() {
                validated = validateEmail(document.getElementById("email").value);
            });

            var universityElement = document.getElementById("university");
            universityElement.addEventListener('change', function() {
                university = document.getElementById("university").value
                validated = validateUniversity(university);
            });

            var majorElement = document.getElementById("major");
            majorElement.addEventListener('change', function() {
                major = document.getElementById("major").value
                validated = validateMajor(major);
            });

            var mobileElement = document.getElementById("mobile");
            mobileElement.addEventListener('change', function() {
                mobile = document.getElementById("mobile").value
                validated = validateMobile(mobile);
            });


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
                profilePage();
                swal("Good job!", "Personal Info added successfully!");

            }
        }


    } else if (buttonID == 2) {
        //nextPage from profilePage
        if (sessionStorage.length == 2) {
            expertisePage();
        } else if (sessionStorage.length > 2) {
            goTo(7);
        } else {
            var validated = true
            var aboutYou = document.getElementById("aboutYou").value
            var teachingExperience = document.getElementById("teachingExperience").value
            var company = document.getElementById("company-1").value
            var activeFrom = document.getElementById("activeFrom-1").value
            var activeTo = document.getElementById("activeTo-1").value
            var school = document.getElementById("school-1").value
            var enrolled = document.getElementById("enrolled-1").value
            var graduated = document.getElementById("graduated-1").value

            if (activeFrom == "" || activeTo == "") {
                alert("Please set the work history dates!")
                return false;
            }

            if (enrolled == "" || graduated == "") {
                alert("Please set the dates education dates!")
                return false;
            }

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
                if (activeFrom == "" || activeTo == "") {
                    alert("Please set the work history dates!")
                    return false;
                }
                data.workHistory.push({ company: company, activeFrom: activeFrom, activeTo: activeTo })
            }

            for (var index = 2; index <= schoolCount; index++) {
                school = document.getElementById("school-" + index).value
                enrolled = document.getElementById("enrolled-" + index).value
                graduated = document.getElementById("graduated-" + index).value
                if (enrolled == "" || graduated == "") {
                    alert("Please set the dates education dates!")
                    return false;
                }
                data.education.push({ school: school, enrolled: enrolled, graduated: graduated })
            }

            validated = validateProfile(data)
            if (validated) {
                sessionStorage.setItem("profile", JSON.stringify(data))
                expertisePage();
                alert("✔✔ Profile recorded successfully")
            }
        }
    } else if (buttonID == 3) {
        //backPage from profile
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
        // nextPage from expertise
        if (sessionStorage.length == 3) {
            interviewPage();
        } else {
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
                alert("✔✔ Expertise added successfully");
            }
        }
    } else if (buttonID == 5) {
        //backPage from expertise
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
        //submit interview
        if (JSON.parse(sessionStorage.getItem("questions")).length == 3) {
            var answer4 = document.getElementById("questionText4").value
            if (answer4 == "") {
                alert("Please answer the question! Skipping questions not allowed")
            } else {
                var data = JSON.parse(sessionStorage.getItem("questions"))
                data.push({ questions: answer4 })
                sessionStorage.setItem("questions", JSON.stringify(data))
                document.getElementById("button-question-4").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
                console.log("final personalInfo: " + sessionStorage.getItem("personalInfo"));
                console.log("final profile: " + sessionStorage.getItem("profile"));
                console.log("final expertise: " + JSON.parse(sessionStorage.getItem("expertise")).expertise);
                console.log("final Interview: " + JSON.parse(sessionStorage.getItem("questions"))[0].question + ', ' + JSON.parse(sessionStorage.getItem("questions"))[1].question + ', ' + JSON.parse(sessionStorage.getItem("questions"))[2].question + ', ' + JSON.parse(sessionStorage.getItem("questions"))[3].question);
                alert("✔ Question 4 response submitted")
                alert("✔✔ Interview Ended! Thank You for participating")
                thankYouPage();
            }
        }

    } else if (buttonID == 7) {
        //back to expertisePage
        var name = JSON.parse(sessionStorage.getItem("expertise")).stream + "-expertise";
        var expertises = JSON.parse(sessionStorage.getItem("expertise")).expertise
        expertises.forEach(expertise => {
            document.getElementById(expertise).checked = true;
        });

        switch (name) {
            case "computer-science-expertise":
                computerScienceExpertise();
                expertisePage();
                break;
            case "computer-software-expertise":
                computerSoftwareExpertise();
                expertisePage();
                break;

            case "engineering-expertise":
                engineeringExpertise();
                expertisePage();
                break;
            case "history-expertise":
                historyExpertise();
                expertisePage();
                break;
            case "humanities-expertise":
                humanitiesExpertise();
                expertisePage();
                break;
            case "math-expertise":
                mathExpertise();
                expertisePage();
                break;
            case "science-expertise":
                scienceExpertise();
                expertisePage();
                break;
            case "social-science-expertise":
                socialScienceExpertise();
                expertisePage();
                break;
            case "standardized-tests-expertise":
                standardizedTestsExpertise();
                expertisePage();
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