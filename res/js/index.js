//console.log("Hello there");
document.getElementById("zero-button").addEventListener("click", () => {
    arrayBuilder("0", "num");
    numberClicked("0");
    // expressionBuilder();
});
document.getElementById("one-button").addEventListener("click", () => {
    arrayBuilder("1", "num");
    numberClicked("1");
    // expressionBuilder();
});
document.getElementById("two-button").addEventListener("click", () => {
    arrayBuilder("2", "num");
    numberClicked("2");
    // expressionBuilder();
});
document.getElementById("three-button").addEventListener("click", () => {
    arrayBuilder("3", "num");
    numberClicked("3");
    // expressionBuilder();
});
document.getElementById("four-button").addEventListener("click", () => {
    arrayBuilder("4", "num");
    numberClicked("4");
    // expressionBuilder();
});
document.getElementById("five-button").addEventListener("click", () => {
    arrayBuilder("5", "num");
    numberClicked("5");
    // expressionBuilder();
});
document.getElementById("six-button").addEventListener("click", () => {
    arrayBuilder("6", "num");
    numberClicked("6");
    // expressionBuilder();
});
document.getElementById("seven-button").addEventListener("click", () => {
    arrayBuilder("7", "num");
    numberClicked("7");
    // expressionBuilder();
});
document.getElementById("eight-button").addEventListener("click", () => {
    arrayBuilder("8", "num");
    numberClicked("8");
    // expressionBuilder();
});
document.getElementById("nine-button").addEventListener("click", () => {
    arrayBuilder("9", "num");
    numberClicked("9");
    // expressionBuilder();
});

// document.getElementById("percentage-button").addEventListener("click", () => {
//     arrayBuilder("%");
//     numberClicked("%");
// });
document.getElementById("divide-button").addEventListener("click", () => {
    arrayBuilder("/", "sym");
    operatorClicked("/");
    // expressionBuilder();
});
document.getElementById("multiply-button").addEventListener("click", () => {
    arrayBuilder("*", "sym");
    operatorClicked("*");
    // expressionBuilder();
});
document.getElementById("minus-button").addEventListener("click", () => {
    arrayBuilder("-", "sym");
    operatorClicked("-");
    // expressionBuilder();
});
document.getElementById("plus-button").addEventListener("click", () => {
    arrayBuilder("+", "sym");
    operatorClicked("+");
    // expressionBuilder();
});

document.getElementById("equals-button").addEventListener("click", () => {
    arrayBuilder("=", "sym");
});
document.getElementById("clear-button").addEventListener("click", () => {
    clearInputField();
});

const inputField = document.getElementById("display-field");
const historyField = document.getElementById("history-field");
let currentValueInFocus;
let previousValueNotFocused;
const operatorCharacters = ["+", "-", "*", "/"];
let characterArray = new Array();
let lastKeyNumOrSym;

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

        e.key == "9") {

            arrayBuilder(e.key, "num");

            numberClicked(e.key);

    } else if (

        e.key == "%" || 

        e.key == "/" || 

        e.key == "*" || 

        e.key == "-" || 

        e.key == "+") {

            arrayBuilder(e.key, "sym");

            operatorClicked(e.key);

    } else if (

        e.key == "Backspace" ||

        e.key == "Delete") {

            clearInputField();

    } else if (
        
        e.key === "Enter") {

        arrayBuilder("=", "sym");

    }

};

function arrayBuilder(newChar, numOrSym) {

    if (0 == characterArray.length) {

        if (!isNaN(newChar) || newChar == ".") {

            if (newChar == ".") {

                inputField.textContent = " ";

                characterArray.push("0.");

            } else {

                inputField.textContent = " ";

                characterArray.push(newChar);

            }

        } else {

            console.log("Please Enter Number for first entry");

        }

    }else if (numOrSym != lastKeyNumOrSym){

        inputField.textContent = " ";

        console.log("Things seem different... better push");
        
        characterArray.push(newChar);
        
        if (isNaN(newChar) && characterArray.length >= 3){
            
            //console.log("time to solve this hummdinger");

            newChar == "=" ? numOrSym = "dif" :  console.log("nothing to see hear... specifically a enter...");

            solveFunction(characterArray[0], characterArray[1], characterArray[2]);

        }

    }else if (numOrSym == lastKeyNumOrSym){

        if (isNaN(newChar) && newChar!="."){

            console.log("No multiple operators!!!");

        }else{

            characterArray[characterArray.length - 1] = characterArray[characterArray.length - 1] + newChar;  
            
            console.log("We on concatenate street");console.log(characterArray);

        }
      
    }

    lastKeyNumOrSym= numOrSym;

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
    
    characterArray.shift(); characterArray.shift();
    
    characterArray[0] = answer;
    
    updateInputField(answer);

    characterArray[characterArray.length-1] == "=" ? characterArray.pop() :  console.log("no problem here, just a good old fashion operator");
    
    console.log("We shifted things around a little bit  " + characterArray);

}


function numberClicked(number) {
    
    updateHistoryField(number);
    
    currentValueInFocus = inputField.textContent + number;
    
    updateInputField(currentValueInFocus);

}


function operatorClicked(operator) {
    
    updateHistoryField(operator);

}


function updateInputField(input) {

//    inputField.textContent = cutDecimalPlacesToLength(input);

      inputField.textContent = input;

}


function updateHistoryField(input) {

    historyField.textContent = historyField.textContent + input;

}

// function equalsButton() {

//     console.log("equals");
//     console.log(characterArray[characterArray.length - 1]);
//     expressionBuilder(1);

// }


// function checkForIncompleteExpression() {

//     if (operatorCharacters.includes(historyField.textContent.slice(-1))) {

//         inputField.textContent = " ";

//     } 

// }


function clearInputField() {

    inputField.textContent = " ";

    historyField.textContent = " ";

    characterArray = [];

}


let cutDecimalPlacesToLength = function (value) {

    if (-1 == value.indexOf(".")) {

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


window.onload = () => {

    inputField.textContent = 0;

};