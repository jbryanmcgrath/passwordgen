<!-- PASSWORD GENERATOR -->









var numberGenerator = function (x) {
    var answer = window.prompt("What number");

    if (!isNaN(answer)) {
        console.log("I am the " + answer + "number that I pass")

    } else {
        console.log("Please enter a number")
    }
}
numberGenerator(4)
