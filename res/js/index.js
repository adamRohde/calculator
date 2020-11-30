//console.log("Hello there");
document.getElementById("zero-button").addEventListener("click", () => {
    arrayBuilder("0", "num");
});
document.getElementById("decimal-button").addEventListener("click", () => {
    arrayBuilder(".", "num");
});
document.getElementById("one-button").addEventListener("click", () => {
    arrayBuilder("1", "num");
});
document.getElementById("two-button").addEventListener("click", () => {
    arrayBuilder("2", "num");
});
document.getElementById("three-button").addEventListener("click", () => {
    arrayBuilder("3", "num");
});
document.getElementById("four-button").addEventListener("click", () => {
    arrayBuilder("4", "num");
});
document.getElementById("five-button").addEventListener("click", () => {
    arrayBuilder("5", "num");
});
document.getElementById("six-button").addEventListener("click", () => {
    arrayBuilder("6", "num");
});
document.getElementById("seven-button").addEventListener("click", () => {
    arrayBuilder("7", "num");
});
document.getElementById("eight-button").addEventListener("click", () => {
    arrayBuilder("8", "num");
});
document.getElementById("nine-button").addEventListener("click", () => {
    arrayBuilder("9", "num");
});

// document.getElementById("percentage-button").addEventListener("click", () => {
//     arrayBuilder("%");
//     numberClicked("%");
// });

document.getElementById("divide-button").addEventListener("click", () => {
    arrayBuilder("/", "sym");
});
document.getElementById("multiply-button").addEventListener("click", () => {
    arrayBuilder("*", "sym");
});
document.getElementById("minus-button").addEventListener("click", () => {
    arrayBuilder("-", "sym");
});
document.getElementById("plus-button").addEventListener("click", () => {
    arrayBuilder("+", "sym");
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

            //numberClicked(e.key);

    } else if (

        e.key == "%" || 

        e.key == "/" || 

        e.key == "*" || 

        e.key == "-" || 

        e.key == "+") {

            arrayBuilder(e.key, "sym");

           // operatorClicked(e.key);

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
  
    let displayYesorNo = 1;

    if (0 == characterArray.length){

        console.log("No array at the moment, lets change that"); console.log(characterArray);


        if (newChar == "." && numOrSym == "num") {
      
                inputField.textContent = " ";
                console.log("starting small huh?");
                characterArray.push("0.");
                console.log(characterArray);
        } else {

            inputField.textContent = " ";
            console.log("incoming!");
            characterArray.push(newChar);
            console.log(characterArray);

        }

    }else if (numOrSym != lastKeyNumOrSym){

        inputField.textContent = " ";

        characterArray.push(newChar);
        
        console.log("Things seem different... better push");console.log(characterArray);
        
        if (isNaN(newChar) && characterArray.length >= 3){
            
            console.log("time to solve this hummdinger");console.log(characterArray);

            void(newChar=="=" && (numOrSym = "dif"));
            console.log("num or Sym = " + numOrSym);

            solveFunction(characterArray[0], characterArray[1], characterArray[2]);

        }

    }else if (numOrSym == lastKeyNumOrSym){

        if (isNaN(newChar) && newChar!="."){

            console.log("No multiple operators!!!");console.log(characterArray);

            displayYesorNo = 0;

        }else{

            characterArray[characterArray.length - 1] = characterArray[characterArray.length - 1] + newChar;  
            
            console.log("We on concatenate street");console.log(characterArray);

        }
      
    }

    lastKeyNumOrSym= numOrSym;

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
    
    characterArray.shift(); characterArray.shift();
    
    characterArray[0] = answer;
    
    updateInputField(answer);

    characterArray[characterArray.length-1] == "=" ? characterArray.pop() :  console.log("no problem here, just a good old fashion operator");
    
    console.log("We shifted things around a little bit  " + characterArray);

}

function displayNumberOrSymbol(char, numOrSymb, displayYesOrNo) {

    if (displayYesOrNo){

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

    }else{

        console.log("not gonna happens");

    }
    
}

function updateInputField(input) {

   // inputField.textContent = cutDecimalPlacesToLength(input);

    inputField.textContent = input;

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

    console.log("Please something work!, onload maybe?");

};