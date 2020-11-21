//console.log("Hello there");

const inputField = document.getElementById("display-field");
const historyField = document.getElementById("history-field");

document.onkeydown = function (e) {
    if (
        e.key == "0" ||
        e.key == "1" ||
        e.key == "2" ||
        e.key == "3" ||
        e.key == "4" ||
        e.key == "5" ||
        e.key == "6" ||
        e.key == "7" ||
        e.key == "8" ||
        e.key == "9"
    ) {
        numberClicked(e.key);
    } else if (e.key == "%" || e.key == "/" || e.key == "*" || e.key == "-" || e.key == "+") {
        operatorClicked(e.key);
    } else if (e.key == "Backspace" || e.key == "Delete") {
        clearInputField();
    } else if (e.key === "Enter") {
        equalsButton();
    }
};

let currentValueInFocus;
let previousValueNotFocused;

const operatorCharacters = ["/", "*", "-", "+"];

function numberClicked(number) {
    checkForIncompleteExpression();
    updateHistoryField(number);
    currentValueInFocus = inputField.textContent + number;
    inputField.textContent = currentValueInFocus;
}

function operatorClicked(operator) {
    updateHistoryField(operator);
}

function updateHistoryField(input) {
    historyField.textContent = historyField.textContent + input;
}

function equalsButton() {
    inputField.textContent = eval(historyField.textContent);
}

function checkForIncompleteExpression() {
    if (operatorCharacters.includes(historyField.textContent.slice(-1))) {
        console.log("Hello there");
        inputField.textContent = " ";
    } else {
        console.log("byte there");
    }
}

function clearInputField() {
    inputField.textContent = " ";
    historyField.textContent = " ";
}
