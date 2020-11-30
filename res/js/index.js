const inputField = document.getElementById("display-field");
const historyField = document.getElementById("history-field");
let currentValueInFocus;
let characterArray = new Array();
let lastKeyNumOrSym;

function arrayBuilder(newChar, numOrSym) {
    let displayYesorNo = 1;

    if (0 == characterArray.length) {
        if (newChar == "." && numOrSym == "num") {
            inputField.textContent = " ";
            newChar = "0.";
            characterArray.push("0.");
        } else {
            inputField.textContent = " ";
            characterArray.push(newChar);
        }
    } else if (numOrSym != lastKeyNumOrSym) {
        inputField.textContent = " ";

        characterArray.push(newChar);

        if (isNaN(newChar) && characterArray.length >= 3) {
            void (newChar == "=" && (numOrSym = "dif"));
            solveFunction(characterArray[0], characterArray[1], characterArray[2]);
        }
    } else if (numOrSym == lastKeyNumOrSym) {
        if (isNaN(newChar) && newChar != ".") {
            displayYesorNo = 0;
        } else {
            characterArray[characterArray.length - 1] =
                characterArray[characterArray.length - 1] + newChar;
        }
    }
    lastKeyNumOrSym = numOrSym;
    displayNumberOrSymbol(newChar, numOrSym, displayYesorNo);
}

function solveFunction(expression1, operator, expression2) {
    let answer;

    switch (operator) {
        case "+":
            answer = parseFloat(expression1) + parseFloat(expression2);
            break;
        case "-":
            answer = parseFloat(expression1) - parseFloat(expression2);
            break;
        case "*":
            answer = parseFloat(expression1) * parseFloat(expression2);
            break;
        case "/":
            answer = parseFloat(expression1) / parseFloat(expression2);
            break;
    }

    characterArray.shift();
    characterArray.shift();
    characterArray[0] = answer;
    updateInputField(answer);
    void (characterArray[characterArray.length - 1] == "=" && characterArray.pop());
}

function displayNumberOrSymbol(char, numOrSymb, displayYesOrNo) {
    if (displayYesOrNo) {
        switch (numOrSymb) {
            case "num":
                updateHistoryField(char);
                currentValueInFocus = inputField.textContent + char;
                updateInputField(currentValueInFocus);
                break;

            case "sym":
                updateHistoryField(char);
                break;
        }
    } else {
        console.log("not gonna happens");
    }
}

function updateInputField(input) {
    if (0 != input % 1) {
        strInput = input;
        if (strInput.toString().length > 12) {
            inputField.textContent = input.toFixed(12);
        }
    } else {
        inputField.textContent = input;
    }
}

function updateHistoryField(input) {
    historyField.textContent = historyField.textContent + input;
}

function clearInputField() {
    inputField.textContent = " ";

    historyField.textContent = " ";

    characterArray = [];

    inputField.textContent = 0;
}

window.onload = () => {
    inputField.textContent = 0;
};
