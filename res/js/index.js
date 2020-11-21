// window.onload = function () {
//     function numberClicked(number) {
//         console.log(number);
//     }
// };

const inputField = document.getElementById("display-field");

function numberClicked(number) {
    let numberContainer;
    numberContainer = inputField.textContent + number;
    inputField.textContent = numberContainer;
}

function clearInputField() {
    inputField.textContent = " ";
    console.log("Hello there");
}
