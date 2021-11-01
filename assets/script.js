// Assignment code here
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var specialCharacters = [/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/];

var doYouWantNumbers = window.prompt("Do you want to use numbers in your password? Type Yes or No. ");
var doYouWantCapitalLetters = window.prompt("Do you want to use capital letters in your password? Type Yes or No.")
var doYouWantLowerCaseLetters = window.prompt("Do you want to use captial letters in your password? Type Yes or No.")
var howLong = window.prompt("How many characters long do you want your password to be?");



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