// Assignment code here
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var specialCharacters = [! @#$%^&*()_+-=[\]{};:\\|,.<>\/?]+/];

function userInitPrompt() {
    var howLong = parseInt(prompt("How many characters long do you want your password to be?"))
    if (isNaN(howLong)) {
        alert("Use a number dummy")
        return;
    }
    if (howLong < 8) {
        alert("Pick a number greater than 8");
        return null;
    }
    if (howLong > 128) {
        alert("Pick a number less that 128");
        return null;
    }

    var doYouWantNumbers = confirm("Do you want to use numbers in your password? Type Yes or No. ")
    var doYouWantCapitalLetters = confirm("Do you want to use capital letters in your password? Type Yes or No.")
    var doYouWantLowerCaseLetters = confirm("Do you want to use captial letters in your password? Type Yes or No.")

    if (doYouWantCapitalLetters === false && doYouWantLowerCaseLetters === false && doYouWantNumbers === false) {
        alert("Pick at least one Character Type")
        return null
    }
    var userPrompts = {
        passLength: howLong,
        numbers: doYouWantNumbers,
        capital: doYouWantCapitalLetters,
        lowercase: doYouWantCapitalLetters
    }
    return userPrompts;
}
function randomElement(array) {
    var randoI = Math.floor(Math.random() * array.length);
    var randoEl = array[randoI]
    return randoEl;
}

function generatePassword() {
    var userPromptsObj = userInitPrompt();
    console.log(userPromptsObj)
    var array1 = []
    var array2 = []
    if (userPromptsObj.capital) {
        array1 = array1.concat(capLetter);
    }
    if (userPromptsObj.lowercase) {
        array1 = array1.concat(lowLetter);

    }
    if (userPromptsObj.numbers) {
        array1 = array1.concat(numbers)
    }
    var element = randomElement(array1)
    console.log(element)
    for (let i = 0; i < userPromptsObj.passLength; i++) {
        var character = randomElement(array1)
        array2.push(character)
    }
    return array2.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);