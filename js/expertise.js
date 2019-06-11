hideAllExpertise();

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
}

function computerScienceExpertise() {
    hideAllExpertise();
    document.getElementById("computerScience").style.display = '';
    document.getElementById("button-computer-science").style.background = "#ffffff";
    // document.getElementById("button-computer-science").style.borderLeftColor = "#FF9F1C";
    // document.getElementById("button-computer-science").style.border = "1px";

}

function computerSoftwareExpertise() {
    hideAllExpertise();
    document.getElementById("computerSoftware").style.display = '';
    document.getElementById("button-computer-software").style.background = "#ffffff";
}

function engineeringExpertise() {
    hideAllExpertise();
    document.getElementById("engineering").style.display = '';
    document.getElementById("button-engineering").style.background = "#ffffff";
}

function historyExpertise() {
    hideAllExpertise();
    document.getElementById("history").style.display = '';
    document.getElementById("button-history").style.background = "#ffffff";
}

function humanitiesExpertise() {
    hideAllExpertise();
    document.getElementById("humanities").style.display = '';
    document.getElementById("button-humanities").style.background = "#ffffff";
}

function mathExpertise() {
    hideAllExpertise();
    document.getElementById("math").style.display = '';
    document.getElementById("button-math").style.background = "#ffffff";
}

function scienceExpertise() {
    hideAllExpertise();
    document.getElementById("science").style.display = '';
    document.getElementById("button-science").style.background = "#ffffff";
}

function socialScienceExpertise() {
    hideAllExpertise();
    document.getElementById("socialScience").style.display = '';
    document.getElementById("button-social-science").style.background = "#ffffff";
}

function standardizedTestsExpertise() {
    hideAllExpertise();
    document.getElementById("standardizedTests").style.display = '';
    document.getElementById("button-standardized-tests").style.background = "#ffffff";
}