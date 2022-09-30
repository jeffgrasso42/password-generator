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

// creates the password for the user based on the length and criteria input
function generatePassword() {
  var password = "";
  var length = getLength();
  getCriteria();

  for (var i = 0; i < length; i++) {
    var charIndex = Math.floor(Math.random() * possibleChar.length);
    password += possibleChar[charIndex];
  }
  return password;  
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

// get desired password criteria from user
function getCriteria () {
  // if user confirms lowercase criteria
  if (confirm("Include lowercase characters?\n(Select OK for Yes)\n(Cancel for No)") === true)
  // the alphabet array is appended to the possibleChar array
    possibleChar.push(...alphabet);
  // if the user confirms uppercase criteria
  if (confirm("Include uppercase characters?\n(Select OK for Yes)\n(Cancel for No)") === true)
  // the capitalAlphabet array is appended to the possibleChar array
    possibleChar.push(...capitalAlphabet);
  // if the user confirms numbers are part of the password criteria
  if (confirm("Include numbers?\n(Select OK for Yes)\n(Cancel for No)"))
    // the numbers array is appended to the possibleChar array
    possibleChar.push(...numbers);
  // if user confirms special characters are part of the password criteria
  if(confirm("Include Special Characters(!,@,#,...)?\n(Select OK for Yes)\n(Cancel for No)"))
    //the specialChar array is appended to the possibleChar array
    possibleChar.push(...specialChar);

  // checks if the possibleChar array is still empty
  if (possibleChar.length === 0 ) {
    // throw error if empty
    alert("Error: At least one of the criteria must be chosen");
    // recursively call the function
    getCriteria();
  } else {
    return;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
