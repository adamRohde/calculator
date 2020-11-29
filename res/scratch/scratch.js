// if (fromEqualsOrOperator) {
//     //solveFunction(characterArray[characterArray.length - 2]);
// } else {
//     if (characterArray.length >= 3 && isNaN(characterArray[characterArray.length - 1])) {
//         // solveFunction(characterArray[characterArray.length - 3]);
//     }
// }

// let lastStoredTotal;
// if (lastValue != 0) {
//     lastStoredTotal = lastValue;
// } else {
//     lastStoredTotal = parseFloat(characterArray[characterArray.length - 4]);
// }

// //console.log("Array length = " + characterArray.length + "  Array contents = " + characterArray);
// nCase = characterArray[characterArray.length - 3];

// console.log("LastValue = " + lastValue);

// console.log(
//     "  " + characterArray[characterArray.length - 4] + "  ",
//     "  " + characterArray[characterArray.length - 3] + "  ",
//     "  " + characterArray[characterArray.length - 2]
// );

// const paperBeatsRock = userChoice === 'paper' && computerChoice === 'rock;
// const scissorsBeatsPaper = userChoice === 'scissors' && computerChoice === 'paper;
// const rockBeatsScissors = userChoice === 'rock' && computerChoice === 'scissors';
// if (paperBeatsRock || scissorsBeatsPaper || rockBeatsScissors) {
//   console.log('you win');
// }


function arrayBuilder(newChar) {
    //if the array is empty
    if (0 == characterArray.length) {
        //if the first entry is a number OR a decimal.
        if (!isNaN(newChar) || newChar == ".") {
            if (newChar == ".") {
                characterArray.push("0.");
            } else {
                characterArray.push(newChar);
            }
        } else {
            console.log("Please Enter Number for first entry");
        }
        //If array isn't empty
    } else {
        //If the entry is a number and the previous entry was a number OR a decimal
        if (
            (!isNaN(newChar) && !isNaN(characterArray[characterArray.length - 2])) ||
            newChar == "."
        ) {
            if (newChar == "." && isNaN(characterArray[characterArray.length - 2])) {
                characterArray.push("0.");
            } else {
                characterArray[characterArray.length - 1] =
                    characterArray[characterArray.length - 1] + newChar;
            }
        } else {
            characterArray.push(newChar).toString();
            if (characterArray.length >= 3) {
                console.log("Array Contents = " + characterArray);
                console.log("Array Length   = " + characterArray.length);
                
               // operatorCharacters.includes(characterArray[characterArray.length - 2]) == true ? 
                   // solveFunction(characterArray[characterArray.length - 3], characterArray[characterArray.length - 2], characterArray[characterArray.length - 1]) : 
                   // (validOperator = false);


               // let validOperator;
               // solveFunction(newChar);



            }
        }
    }
}


//(!isNaN(characterArray[characterArray.length - 1] || isNaN(characterArray[characterArray.length-1])

