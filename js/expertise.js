// Global Variables
var stream = "";

//onload functionCall
hideAllExpertise()


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
}

function computerScienceExpertise() {

    if (JSON.parse(sessionStorage.getItem("expertise"))) {
        expertisePage()
    }
    hideAllExpertise();
    stream = "computer-science";
    document.getElementById("computerScience").style.display = '';
    document.getElementById("button-computer-science").style.background = "#ffffff";
    document.getElementById("button-computer-science").style.borderLeft = "2px solid #FF9F1C";
}

function computerSoftwareExpertise() {
    hideAllExpertise();
    stream = "computer-software";
    document.getElementById("computerSoftware").style.display = '';
    document.getElementById("button-computer-software").style.background = "#ffffff";
    document.getElementById("button-computer-software").style.borderLeft = "2px solid #FF9F1C";
}

function engineeringExpertise() {
    hideAllExpertise();
    stream = "engineering";
    document.getElementById("engineering").style.display = '';
    document.getElementById("button-engineering").style.background = "#ffffff";
    document.getElementById("button-engineering").style.borderLeft = "2px solid #FF9F1C";
}

function historyExpertise() {
    hideAllExpertise();
    stream = "history";
    document.getElementById("history").style.display = '';
    document.getElementById("button-history").style.background = "#ffffff";
    document.getElementById("button-history").style.borderLeft = "2px solid #FF9F1C";
}

function humanitiesExpertise() {
    hideAllExpertise();
    stream = "humanities"
    document.getElementById("humanities").style.display = '';
    document.getElementById("button-humanities").style.background = "#ffffff";
    document.getElementById("button-humanities").style.borderLeft = "2px solid #FF9F1C";
}

function mathExpertise() {
    hideAllExpertise();
    stream = "math";
    document.getElementById("math").style.display = '';
    document.getElementById("button-math").style.background = "#ffffff";
    document.getElementById("button-math").style.borderLeft = "2px solid #FF9F1C";
}

function scienceExpertise() {
    hideAllExpertise();
    stream = "science";
    document.getElementById("science").style.display = '';
    document.getElementById("button-science").style.background = "#ffffff";
    document.getElementById("button-science").style.borderLeft = "2px solid #FF9F1C";
}

function socialScienceExpertise() {
    hideAllExpertise();
    stream = "social-science";
    document.getElementById("socialScience").style.display = '';
    document.getElementById("button-social-science").style.background = "#ffffff";
    document.getElementById("button-social-science").style.borderLeft = "2px solid #FF9F1C";
}

function standardizedTestsExpertise() {
    hideAllExpertise();
    stream = "standardized-tests";
    document.getElementById("standardizedTests").style.display = '';
    document.getElementById("button-standardized-tests").style.background = "#ffffff";
    document.getElementById("button-standardized-tests").style.borderLeft = "2px solid #FF9F1C";
}