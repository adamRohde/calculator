//console.log("Hello there");

const inputField = document.getElementById("display-field");
const historyField = document.getElementById("history-field");

document.onkeydown = function (e) {
    if (
        e.key == "." ||
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
    updateInputField(currentValueInFocus);
    // inputField.textContent = currentValueInFocus;
}

function operatorClicked(operator) {
    updateHistoryField(operator);
}

function updateInputField(input) {
    inputField.textContent = input;
}

function updateHistoryField(input) {
    historyField.textContent = historyField.textContent + input;
}

function equalsButton() {
    try {
        inputField.textContent = cutDecimalPlacesToLength(
            eval(historyField.textContent).toString()
        );
        //inputField.textContent = eval(historyField.textContent);
    } catch (e) {
        if (e instanceof SyntaxError) {
            historyField.textContent = "invalid";
        }
    }
}

function checkForIncompleteExpression() {
    if (operatorCharacters.includes(historyField.textContent.slice(-1))) {
        inputField.textContent = " ";
    } else {
        // console.log("byte there");
    }
}

function clearInputField() {
    inputField.textContent = " ";
    historyField.textContent = " ";
}

let cutDecimalPlacesToLength = function (value) {
    if (-1 == value.indexOf(".")) {
        console.log("No decimal...");
        return value;
    } else {
        if (value.length > 12) {
            let getUnder12Chars = value.length - 12;
            return parseFloat(value).toFixed(value.length - getUnder12Chars);
        } else {
            return value;
        }
    }
};
