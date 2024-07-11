const dropdown = document.getElementById('dropdown');
const redStack = document.getElementById('redStack');
let scoreDisplay = document.getElementById('score');
let currAdd = document.getElementById('currAdd');
let redScore = 0;
let blueScore = 0;
let color = "red";
let redResult = "";
let blueResult = "";
updateScores();
updateTeam()
ss.style.display = 'none';
b2.style.display = 'none';
ls.style.display = 'none';
ms.style.display = 'none';
pc.style.display = 'none';
red.style.display = 'none';
puc.style.display = 'none';
mg.style.display = 'none';
dropdown.addEventListener('change', () => {
    if (dropdown.value === 'largeStick') {
        ls.style.display = 'block';
        ss.style.display = 'none';
        ms.style.display = 'none';
        pc.style.display = 'none';
        red.style.display = 'none';
        puc.style.display = 'none';
        mg.style.display = 'none';
    } else if (dropdown.value === 'smallStick') {
        ls.style.display = 'none';
        ms.style.display = 'none';
        ss.style.display = 'block';
        pc.style.display = 'none';
        red.style.display = 'none';
        puc.style.display = 'none';
        mg.style.display = 'none';
    } else if (dropdown.value === 'medStick') {
        ls.style.display = 'none';
        ms.style.display = 'block';
        ss.style.display = 'none';
        pc.style.display = 'none';
        red.style.display = 'none';
        puc.style.display = 'none';
        mg.style.display = 'none';
    } else if (dropdown.value === 'platformCube') {
        ls.style.display = 'none';
        ms.style.display = 'none';
        ss.style.display = 'none';
        pc.style.display = 'block';
        red.style.display = 'none';
        puc.style.display = 'none';
        mg.style.display = 'none';
    } else if (dropdown.value === 'reduction') {
        ls.style.display = 'none';
        ms.style.display = 'none';
        ss.style.display = 'none';
        pc.style.display = 'none';
        red.style.display = 'block';
        puc.style.display = 'none';
        mg.style.display = 'none';
    } else if (dropdown.value === 'pushCube') {
        ls.style.display = 'none';
        ms.style.display = 'none';
        ss.style.display = 'none';
        pc.style.display = 'none';
        red.style.display = 'none';
        puc.style.display = 'block';
        mg.style.display = 'none';
    } else if (dropdown.value === 'movableGoal') {
        ls.style.display = 'none';
        ms.style.display = 'none';
        ss.style.display = 'none';
        pc.style.display = 'none';
        red.style.display = 'none';
        puc.style.display = 'none';
        mg.style.display = 'block';
    }
});
function updateScores() {
    scoreDisplay.textContent = redScore + "-" + blueScore;
}
function updateTeam() {
    currAdd.textContent = "The current adder is to the " + color + " team";
}
function smallPoleCalc() {
    let num = document.getElementById('smallStick');
    let number = num.value;
    let x = 0;
    if (color == "red") {
        for (let i = 0; i < number; i++) {
            redScore += 1 + (1 * i);
            x += 1 + (1 * i);
        }
        redResult = redResult + "small pole (amount: " + number + ")(points: " + x + "), ";
    } else {
        for (let i = 0; i < number; i++) {
            blueScore += 1 + (1 * i);
            x += 1 + (1 * i);
        }
        blueResult = blueResult + "small pole (amount: " + number + ")(points: " + x + "), ";
    }
    updateScores()
    smallStick.value = '';
}
function largePoleCalc() {
    let num = document.getElementById('bigStick');
    let number = num.value;
    let x = 0;
    if (color == "red") {
        for (let i = 0; i < number; i++) {
            redScore += 5 + (3 * i);
            x += 5 + (3 * i);
        }
        redResult = redResult + "large pole (amount: " + number + ")(points: " + x + "), ";
    } else {
        for (let i = 0; i < number; i++) {
            blueScore += 5 + (3 * i);
            x += 5 + (3 * i);
        }
        blueResult = blueResult + "large pole (amount: " + number + ")(points: " + x + "), ";
    }
    updateScores()
    bigStick.value = '';
}
//-------------------------------------
function mediumPoleCalc() {
    let num = document.getElementById('medStick');
    let number = num.value;
    let x = 0;
    if (color == "red") {
        for (let i = 0; i < number; i++) {
            redScore += 3 + (2 * i);
            x += 3 + (2 * i);
        }
        redResult = redResult + "medium pole (amount: " + number + ")(points: " + x + "), ";
    } else {
        for (let i = 0; i < number; i++) {
            blueScore += 3 + (2 * i);
            x += 3 + (2 * i);
        }
        blueResult = blueResult + "medium pole  (amount: " + number + ")(points: " + x + "), ";
    }
    updateScores()
    medStick.value = '';
}
//---------------------------------------
function platformCalc() {
    let num = document.getElementById('platCube');
    let number = num.value;
    if (color == "red") {
        redScore += redScore + (number * 5);
        redResult = redResult + "Platform cubes (amount: " + number + ")(points: " + number * 5 + "), ";
    } else {
        blueScore += blueScore + (number * 5);
        blueResult = blueResult + "Platform cubes (amount: " + number + ")(points: " + number * 5 + "), ";
    }
    updateScores()
    platCube.value = '';
}
function reduce() {
    let num = document.getElementById('redPoint');
    let number = num.value;
    if (color == "red") {
        redScore -= number * 2;
        redResult = redResult + "Reduction (amount: " + number + ")(points: " + number * 2 + "), ";
    } else {
        blueScore -= number * 2;
        blueResult = blueResult + "Reduction (amount: " + number + ")(points: " + number * 2 + "), ";
    }
    updateScores()
    redPoint.value = '';
}
//-------------------------------------------------------
function pushCubeCalc() {
    let num = document.getElementById('redPoint');
    let number = num.value;
    if (color == "red") {
        redScore += number * 2;
        redResult = redResult + "Floor cubes (amount: " + number + ")(points: " + number * 2 + "), ";
    } else {
        blueScore += number * 2;
        blueResult = blueResult + "Floor cubes (amount: " + number + ")(points: " + number * 2 + "), ";
    }
    updateScores()
    redPoint.value = '';
}
//-------------------------------------------------------
function mobileGoalCalc() {
    let num1 = document.getElementById('mgpc');
    let number1 = num1.value;
    let num2 = document.getElementById('mgr');
    let number2 = num2.value;
    if (color == "red") {
        redScore += (number1 / 2) + (number2 * 2);
        redResult = redResult + "Final goal (amount: rings:" + number2 + " cubes:" + number1 + ")(points: " + ((number1 / 2) + (number2 * 2)) + "), ";
    } else {
        blueScore += (number1 / 2) + (number2 * 2);
        blueResult = blueResult + "Final goal (amount: rings:" + number2 + " cubes:" + number1 + ")(points: " + ((number1 / 2) + (number2 * 2)) + "), ";
    }
    updateScores()
    mgpc.value = '';
    mgr.value = '';
}
function switchTeams() {
    if (color == "red") {
        color = "blue";
    } else {
        color = "red";
    }
    updateTeam();
}
function complete() {
    b1.style.display = 'none';
    b2.style.display = 'block';
    completedRed.textContent = "Red team log: " + redResult;
    completedBlue.textContent = "Blue team log: " + blueResult;
}