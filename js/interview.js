hideAllQuestion();

function hideAllQuestion() {
    document.getElementById("question1").style.display = 'none';
    document.getElementById("question2").style.display = 'none';
    document.getElementById("question3").style.display = 'none';
    document.getElementById("question4").style.display = 'none';
}

function question1() {
    hideAllQuestion();
    document.getElementById("question1").style.display = '';
}

function question2() {
    hideAllQuestion();
    document.getElementById("question2").style.display = '';
}

function question3() {
    hideAllQuestion();
    document.getElementById("question3").style.display = '';
}

function question4() {
    hideAllQuestion();
    document.getElementById("question4").style.display = '';
}