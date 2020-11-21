//console.log("Hello there");

const inputField = document.getElementById("display-field");
const historyField = document.getElementById("history-field");

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
