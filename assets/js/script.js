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

function generatePassword() {
  var password = "";
  var length = getLength();
}

// get password length from the user
function getLength() {
  //prompt the user for the length of the password (between 8 and 128)
  var length = prompt("Enter desired password length (min 8, max 128): ")
  // if checkLength() function returns true, length is valid
  if (checkLength(length)) {
    return length;
  // if length is invalid, invoke getLength again
  } else {
    alert("Error: Invalid input, try again");
    getLength();
  }
}

//validates length of user input
function checkLength(length) {
  if(length > 7 && length < 129) {
    return true;
  } else {
    return false;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
