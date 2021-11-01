// Assignment code here
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var specialCharacters = [/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/];
/*
var doYouWantNumbers = window.prompt("Do you want to use numbers in your password? Type Yes or No. ");
var doYouWantCapitalLetters = window.prompt("Do you want to use capital letters in your password? Type Yes or No.")
var doYouWantLowerCaseLetters = window.prompt("Do you want to use captial letters in your password? Type Yes or No.")
var howLong = window.prompt("How many characters long do you want your password to be?");
*/

const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
};

console.log(random()); // bb325d9f
console.log(random(6)); // e51d83
console.log(random(10)); // e84c416cc7
console.log(random(14)); // ee16dfc68e361

var random2 = (length = 8) => {
    return Math.random
}

var numberGenerator = function (x) {
    var answer = window.prompt("What number");
    var isType = function () {

    }
    if (answer == ) {
        console.log("I am the " + answer + "number that I pass")
    } else {
        console.log("Please enter a number")
    }
}
numberGenerator(4)


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