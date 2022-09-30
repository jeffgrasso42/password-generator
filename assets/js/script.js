// Assignment Code
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var capitalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialChar = "!?@#$%^&*()[]{}-_+=<>,./|:;`~'".split("");
var possibleChar = [];
var password = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
