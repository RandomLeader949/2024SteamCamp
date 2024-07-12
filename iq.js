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
//changes the screen for the selected score
dropdown.addEventListener('change', () => {
    if (dropdown.value === "blank") {
        sg.style.display = 'none';
        lg.style.display = 'none';
        cg.style.display = 'none';

    } else if (dropdown.value === 'smallGoal') {
        sg.style.display = 'block';
        lg.style.display = 'none';
        cg.style.display = 'none';

    } else if (dropdown.value === 'largeGoal') {
        sg.style.display = 'none';
        lg.style.display = 'block';
        cg.style.display = 'none';

    } else if (dropdown.value === 'centerGoal') {
        sg.style.display = 'none';
        lg.style.display = 'none';
        cg.style.display = 'block';
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
    let number = num.value;
    for (let i = 0; i < number; i++) {
        if (color == "red") {
            if (i == 0) {
                redScore += 2;
            }
            else {
                redScore += 4;
            }
        }
        if (color == "blue") {
            if (i == 0) {
                blueScore += 2;
            }
            else {
                blueScore += 4;
            }
        }
    }
    updateScores();
}
//---------------------------------------------------------=
function startNumLargeGoal() {
    let num = document.getElementById('lgn');
    let number = num.value;
    for (let i = 0; i < number; i++) {
        if (color == "red") {
            if (i == 0) {
                redScore += 4;
            }
            else {
                redScore += 6;
            }
        }
        if (color == "blue") {
            if (i == 0) {
                blueScore += 4;
            }
            else {
                blueScore += 6;
            }
        }
    }
    updateScores();
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