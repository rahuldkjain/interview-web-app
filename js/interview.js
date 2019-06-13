question1();
document.getElementById("submitInterview").disabled = true;
if (sessionStorage.getItem("questions")) {
    var questions = JSON.parse(sessionStorage.getItem("questions"))
    if (questions.length == 1) {
        document.getElementById("button-question-1").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
        question2();
    } else if (questions.length == 2) {
        document.getElementById("button-question-1").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
        document.getElementById("button-question-2").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
        question3();
    } else if (questions.length == 3) {
        document.getElementById("button-question-1").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
        document.getElementById("button-question-2").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
        document.getElementById("button-question-3").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
        question4();
    }
}

function hideAllQuestion() {
    document.getElementById("question1").style.display = 'none';
    document.getElementById("question2").style.display = 'none';
    document.getElementById("question3").style.display = 'none';
    document.getElementById("question4").style.display = 'none';
    document.getElementById("button-question-1").style.background = "#eee";
    document.getElementById("button-question-2").style.background = "#eee";
    document.getElementById("button-question-3").style.background = "#eee";
    document.getElementById("button-question-4").style.background = "#eee";
}

function question1() {
    hideAllQuestion();
    document.getElementById("question1").style.display = '';
    document.getElementById("button-question-1").style.background = "#ffffff";
}

function question2() {
    hideAllQuestion();
    document.getElementById("question2").style.display = '';
    document.getElementById("button-question-2").style.background = "#ffffff";
}

function question3() {
    hideAllQuestion();
    document.getElementById("question3").style.display = '';
    document.getElementById("button-question-3").style.background = "#ffffff";
}

function question4() {
    hideAllQuestion();
    document.getElementById("question4").style.display = '';
    document.getElementById("button-question-4").style.background = "#ffffff";
}

function nextQuestion(questionID) {

    // questionID: 1 => nextQuestion from question1
    // questionID: 2 => nextQuestion from question2
    // questionID: 3 => previousQuestion from question2
    // questionID: 4 => nextQuestion from question3
    // questionID: 5 => previousQuestion from question3
    // questionID: 6 => previousQuestion from question4

    // <span style = "color: #FF9F1C" > ✔ < /span>

    if (questionID == 1) {
        var answer1 = document.getElementById("questionText1").value

        if (JSON.parse(sessionStorage.getItem("questions"))) {
            question2();
        } else if (answer1 == "") {
            alert("Please answer the question! Skipping questions not allowed")
        } else {
            var data = [{ question: answer1 }]
            sessionStorage.setItem("questions", JSON.stringify(data))
            document.getElementById("button-question-1").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
            alert("✔ Question 1 response submitted")
            question2();
        }
    } else if (questionID == 2) {
        var answer2 = document.getElementById("questionText2").value

        if (JSON.parse(sessionStorage.getItem("questions"))[1]) {
            question3();
        } else if (answer2 == "") {
            alert("Please answer the question! Skipping questions not allowed")
        } else {
            var data = JSON.parse(sessionStorage.getItem("questions"))
            data.push({ question: answer2 })
            sessionStorage.setItem("questions", JSON.stringify(data))
            document.getElementById("button-question-2").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
            alert("✔ Question 2 response submitted")
            question3();
        }
    } else if (questionID == 3) {
        document.getElementById("questionText1").value = JSON.parse(sessionStorage.getItem("questions"))[0].question
        question1();
    } else if (questionID == 4) {
        var answer3 = document.getElementById("questionText3").value

        if (JSON.parse(sessionStorage.getItem("questions"))[2]) {
            question4();
        } else if (answer3 == "") {
            alert("Please answer the question! Skipping questions not allowed")
        } else {
            var data = JSON.parse(sessionStorage.getItem("questions"))
            data.push({ question: answer3 })
            sessionStorage.setItem("questions", JSON.stringify(data))
            document.getElementById("button-question-3").innerHTML += '<span style = "color: #FF9F1C"> ✔ </span>';
            alert("✔ Question 3 response submitted")
            question4();
        }
    } else if (questionID == 5) {
        document.getElementById("questionText2").value = JSON.parse(sessionStorage.getItem("questions"))[1].question
        question2();
    } else if (questionID == 6) {
        document.getElementById("questionText3").value = JSON.parse(sessionStorage.getItem("questions"))[2].question
        question3();
    }
}


function jump(questionID) {
    var questions;
    if (JSON.parse(sessionStorage.getItem("questions"))) {
        questions = JSON.parse(sessionStorage.getItem("questions"))
    } else {
        questions = []
    }

    //questionID => 1
    if (questionID == 1) {
        if (questions.length >= 1) {
            document.getElementById("questionText1").value = JSON.parse(sessionStorage.getItem("questions"))[0].question
            question1();
        } else {
            question1();
        }

    }

    //questionID => 2
    else if (questionID == 2) {
        if (questions[1]) {
            document.getElementById("questionText2").value = JSON.parse(sessionStorage.getItem("questions"))[1].question
            question2();
        } else if (questions.length == 1) {
            question2();
        } else {
            alert("Sorry you cannot directly jump questions without answering")
        }
    }
    //questionID => 3
    else if (questionID == 3) {
        if (questions[2]) {
            document.getElementById("questionText3").value = JSON.parse(sessionStorage.getItem("questions"))[2].question
            question3();
        } else if (questions.length == 2) {
            question3();
        } else {
            alert("Sorry you cannot directly jump questions without answering")
        }
    }
    //questionID => 4
    else if (questionID == 4) {
        if (questions[3]) {
            document.getElementById("questionText4").value = JSON.parse(sessionStorage.getItem("questions"))[3].question
            question4();
        } else if (questions.length == 3) {
            question4();
        } else {
            alert("Sorry you cannot directly jump questions without answering")
        }
    }
}