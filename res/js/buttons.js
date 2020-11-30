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
document.getElementById("percentage-button").addEventListener("click", () => {
    percentageFunction();
});

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
        arrayBuilder(e.key, "num");

        //numberClicked(e.key);
    } else if (e.key == "%" || e.key == "/" || e.key == "*" || e.key == "-" || e.key == "+") {
        arrayBuilder(e.key, "sym");

        // operatorClicked(e.key);
    } else if (e.key == "Backspace" || e.key == "Delete") {
        clearInputField();
    } else if (e.key === "Enter") {
        arrayBuilder("=", "sym");
    }
};
