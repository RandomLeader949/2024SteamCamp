const dropdown = document.getElementById('dropdown');
const redStack = document.getElementById('redStack');
let scoreDisplay = document.getElementById('score');
let currAdd = document.getElementById('currAdd');
let redScore = 0;
let blueScore = 0;
let color = "red";
let redResult = "";
let blueResult = "";
let x = 0;
updateScores();
updateTeam()
sg.style.display = 'none';
lg.style.display = 'none';
cg.style.display = 'none';
red.style.display = 'none';
lastMin.style.display= 'none';
//changes the screen for the selected score
dropdown.addEventListener('change', () => {
    if (dropdown.value === "blank") {
        sg.style.display = 'none';
        lg.style.display = 'none';
        cg.style.display = 'none';
        red.style.display = 'none';
        lastMin.style.display= 'none';
    } else if (dropdown.value === 'smallGoal') {
        sg.style.display = 'block';
        lg.style.display = 'none';
        cg.style.display = 'none';
        red.style.display = 'none';
        lastMin.style.display= 'none';
    } else if (dropdown.value === 'largeGoal') {
        sg.style.display = 'none';
        lg.style.display = 'block';
        cg.style.display = 'none';
        red.style.display = 'none';
        lastMin.style.display= 'none';
    } else if (dropdown.value === 'centerGoal') {
        sg.style.display = 'none';
        lg.style.display = 'none';
        cg.style.display = 'block';
        red.style.display = 'none';
        lastMin.style.display= 'none';
    } else if (dropdown.value === 'reduction') { // not sure what it's called
        sg.style.display = 'none';
        lg.style.display = 'none';
        cg.style.display = 'none';
        red.style.display = 'block';
        lastMin.style.display= 'none';
    } else if (dropdown.value === 'lastMinGoal') { // not sure what it's called
    sg.style.display = 'none';
    lg.style.display = 'none';
    cg.style.display = 'none';
    red.style.display = 'none';
    lastMin.style.display= 'block';
}
});
//Changes the scoreboard
function updateScores() {
    scoreDisplay.textContent = redScore + "-" + blueScore;
}
//Changes the title to say the current team selected 
function updateTeam() {
    currAdd.textContent = "The current adder is to the " + color + " team";
}
function startNumSmallGoal() {
    let num = document.getElementById('sgn');
    let number1 = num.value;
    let num2 = document.getElementById('sgl');
    let number2 = num2.value;
        if (color == "red") {
            redScore += number1 * (2 * number2)
        }
        if (color == "blue") {
            blueScore += number1 * (2 * number2)
        }
    updateScores();
    sgn.value = '';
    sgl.value = '';
}
function lastMinCalc(){
    let num = document.getElementById('reductionAmount');
    let number = num.value;
    if(color == "red"){
        redScore += number*5;
    }
    else if (color == "blue"){
        blueScore += number*5;
    }
    updateScores();
    reductionAmount.value = '';
}
//---------------------------------------------------------=
function startNumLargeGoal() {
    let num = document.getElementById('lgn');
    let number1 = num.value;
    let num2 = document.getElementById('lgl');
    let number2 = num2.value;
        if (color == "red") {
            redScore += number1 * (4 * number2)
        }
        if (color == "blue") {
            blueScore += number1 * (4 * number2)
        }
    updateScores();
    lgn.value = '';
    lgl.value = '';
}
//---------------------------------------================
function centerGoal() {
    let num = document.getElementById('cgn');
    let number = num.value;
    for (let i = 0; i < number; i++) {
        if (color == "red") {
            redScore += 6;
        }
        if (color == "blue") {
            blueScore += 6;
        }
    }
    updateScores();
}
//---------------------------------========================
function reductionAmountCalc() {
    let num = document.getElementById('reductionAmount');
    let number = num.value;
    if (color == "red"){
    redScore -= number * 2;
    }
        if (color == "blue") {
            blueScore += 6;
        }
    updateScores();
}
//switches the team to the team not currently used
function switchTeams() {
    if (color == "red") {
        color = "blue";
    } else {
        color = "red";
    }
    updateTeam();
}
//Finalizes all scores and returns the score log
function complete() {
    b1.style.display = 'none';
    b2.style.display = 'block';
    completedRed.textContent = "Red team log: " + redResult;
    completedBlue.textContent = "Blue team log: " + blueResult;
}