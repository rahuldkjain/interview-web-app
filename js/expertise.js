// Global Variables
var stream = "";

//onload functionCall
if (!sessionStorage.getItem("expertise")) {
    computerScienceExpertise();
} else {
    hideAllExpertise()
}


function hideAllExpertise() {
    document.getElementById("computerScience").style.display = 'none';
    document.getElementById("button-computer-science").style.background = "#eee";
    document.getElementById("computerSoftware").style.display = 'none';
    document.getElementById("button-computer-software").style.background = "#eee";
    document.getElementById("engineering").style.display = 'none';
    document.getElementById("button-engineering").style.background = "#eee";
    document.getElementById("history").style.display = 'none';
    document.getElementById("button-history").style.background = "#eee";
    document.getElementById("humanities").style.display = 'none';
    document.getElementById("button-humanities").style.background = "#eee";
    document.getElementById("math").style.display = 'none';
    document.getElementById("button-math").style.background = "#eee";
    document.getElementById("science").style.display = 'none';
    document.getElementById("button-science").style.background = "#eee";
    document.getElementById("socialScience").style.display = 'none';
    document.getElementById("button-social-science").style.background = "#eee";
    document.getElementById("standardizedTests").style.display = 'none';
    document.getElementById("button-standardized-tests").style.background = "#eee";

    document.getElementById("button-computer-science").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-computer-software").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-engineering").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-humanities").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-math").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-history").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-social-science").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-science").style.borderLeft = "0px solid #FF9F1C";
    document.getElementById("button-standardized-tests").style.borderLeft = "0px solid #FF9F1C";

    var response = document.getElementsByName("computer-science-expertise")
    uncheckAll(response);

    response = document.getElementsByName("computer-software-expertise")
    uncheckAll(response);

    response = document.getElementsByName("engineering-expertise")
    uncheckAll(response);

    response = document.getElementsByName("humanities-expertise")
    uncheckAll(response);

    response = document.getElementsByName("history-expertise")
    uncheckAll(response);

    response = document.getElementsByName("math-expertise")
    uncheckAll(response);

    response = document.getElementsByName("science-expertise")
    uncheckAll(response);

    response = document.getElementsByName("social-science-expertise")
    uncheckAll(response);

    response = document.getElementsByName("standardized-tests-expertise")
    uncheckAll(response);
}

function uncheckAll(response) {
    for (var i = 0; i < response.length; i++) {
        if (response[i].checked == true) {
            response[i].checked = false;
        }
    }
}

function showChecked() {
    var expertises = JSON.parse(sessionStorage.getItem("expertise")).expertise
    expertises.forEach(expertise => {
        document.getElementById(expertise).checked = true;
    });
}

function computerScienceExpertise() {

    if (JSON.parse(sessionStorage.getItem("expertise"))) {
        expertisePage();
    }
    hideAllExpertise();

    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "computer-science";
    document.getElementById("computerScience").style.display = '';
    document.getElementById("button-computer-science").style.background = "#ffffff";
    document.getElementById("button-computer-science").style.borderLeft = "2px solid #FF9F1C";
}

function computerSoftwareExpertise() {

    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "computer-software";
    document.getElementById("computerSoftware").style.display = '';
    document.getElementById("button-computer-software").style.background = "#ffffff";
    document.getElementById("button-computer-software").style.borderLeft = "2px solid #FF9F1C";
}

function engineeringExpertise() {
    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "engineering";
    document.getElementById("engineering").style.display = '';
    document.getElementById("button-engineering").style.background = "#ffffff";
    document.getElementById("button-engineering").style.borderLeft = "2px solid #FF9F1C";
}

function historyExpertise() {
    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "history";
    document.getElementById("history").style.display = '';
    document.getElementById("button-history").style.background = "#ffffff";
    document.getElementById("button-history").style.borderLeft = "2px solid #FF9F1C";
}

function humanitiesExpertise() {
    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "humanities"
    document.getElementById("humanities").style.display = '';
    document.getElementById("button-humanities").style.background = "#ffffff";
    document.getElementById("button-humanities").style.borderLeft = "2px solid #FF9F1C";
}

function mathExpertise() {
    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "math";
    document.getElementById("math").style.display = '';
    document.getElementById("button-math").style.background = "#ffffff";
    document.getElementById("button-math").style.borderLeft = "2px solid #FF9F1C";
}

function scienceExpertise() {
    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "science";
    document.getElementById("science").style.display = '';
    document.getElementById("button-science").style.background = "#ffffff";
    document.getElementById("button-science").style.borderLeft = "2px solid #FF9F1C";
}

function socialScienceExpertise() {
    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "social-science";
    document.getElementById("socialScience").style.display = '';
    document.getElementById("button-social-science").style.background = "#ffffff";
    document.getElementById("button-social-science").style.borderLeft = "2px solid #FF9F1C";
}

function standardizedTestsExpertise() {
    hideAllExpertise();
    if (sessionStorage.getItem("expertise")) {
        showChecked();
    }
    stream = "standardized-tests";
    document.getElementById("standardizedTests").style.display = '';
    document.getElementById("button-standardized-tests").style.background = "#ffffff";
    document.getElementById("button-standardized-tests").style.borderLeft = "2px solid #FF9F1C";
}