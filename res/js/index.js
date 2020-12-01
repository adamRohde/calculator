





const inputField = document.getElementById("display-field");
const historyField = document.getElementById("history-field");
let currentValueInFocus;
let characterArray = new Array();
let lastKeyNumOrSym;






function arrayBuilder(newChar, numOrSym) {
    
    let displayYesorNo = 1;
    
    //Hello?  is there anybody in there??
    if (0 == characterArray.length) {
        if (newChar == "." && numOrSym == "num") {
            inputField.textContent = " ";
            newChar = "0.";
            characterArray.push("0.");
        } else {
            inputField.textContent = " ";
            characterArray.push(newChar);
        }

    //Important part 1 = push!    
    } else if (numOrSym != lastKeyNumOrSym) {

        if (isNaN(characterArray[characterArray.length - 1])) {
            inputField.textContent = " ";
        }

        if (newChar == ".") {
            //console.log("I found a decimal captain");
            inputField.textContent = " ";
            newChar = "0.";
            characterArray.push("0.");
        }else{
            characterArray.push(newChar);
            //console.log("Just did some pushin " + characterArray);
    
            if (isNaN(newChar) && characterArray.length >= 3) {
                void (newChar == "=" && (numOrSym = "dif"));
                solveFunction(characterArray[0], characterArray[1], characterArray[2]);
            }
        }

    //Important part 2 - concantenation highway
    } else if (numOrSym == lastKeyNumOrSym) {

        if (isNaN(newChar) && newChar != ".") {
            displayYesorNo = 0;
        } else {
            characterArray[characterArray.length - 1] =
                characterArray[characterArray.length - 1] + newChar;
        }
    }
    lastKeyNumOrSym = numOrSym; //the decision maker
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
            if (0 == parseFloat(expression2)) {
                answer = "no Div/0";
            } else {
                answer = parseFloat(expression1) / parseFloat(expression2);
            }
            break;
    }
    characterArray.shift(); characterArray.shift();
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
    }
}






function updateInputField(input) {
    console.log(characterArray);
    inputField.textContent = input;

    if (0 != input % 1) {
        strInput = input;
        if (strInput.toString().length > 8) {
            inputField.textContent = " ";
            inputField.textContent = input.toFixed(8);
        }
    } else {
        inputField.textContent = " ";
        inputField.textContent = input;
    }
}






function updateHistoryField(input) {
    historyField.textContent = historyField.textContent  + input;
}






function clearInputField() {
    inputField.textContent = " ";
    historyField.textContent = " ";
    characterArray = [];
    inputField.textContent = 0;
}






function percentageFunction() {
    characterArray = [];
    characterArray[0] = inputField.textContent * 0.01;
    updateHistoryField("= " + characterArray[0] + "%");
    updateInputField(characterArray[0]);
}






function plusMinusFunction() {
    console.log("we plussin and a minusin");
    characterArray = [];

    if (inputField.textContent > 0) {
        characterArray[0] = -Math.abs(inputField.textContent);
    } else if (inputField.textContent < 0) {
        characterArray[0] = Math.abs(inputField.textContent);
    }

    updateHistoryField("=> " + characterArray[0]);
    updateInputField(characterArray[0]);
}






window.onload = () => {
    inputField.textContent = 0;
};
