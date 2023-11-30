// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function to generate password
function generatePassword() {
  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  let numChar = "0123456789"
  let specialChar = "!@#$%^&*()-=+<>?/|':[]{}"

  let keyLength = prompt(
    "Enter desired password length. Must be betweeen a number 8 and 128 characters."
  );
  if (keyLength < 8 || keyLength > 128 || isNaN(keyLength)) {
  //Alert if input value is not in the range
      alert("Your input does not match the critera. Please try again");        
      return;
  } 
//Critera available for user to choose from
  else {
  var includeUpper = confirm("Include uppecase letters?");
  var includeLower = confirm("Include lowercase letters?");
  var includeNums = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");
  }

// Taking selected critera and storing them in an array
  let selectedChars = [];
  if (includeLower) {
    selectedChars.push(lowercaseLetters);
  }
  if (includeUpper) {
    selectedChars.push(uppercaseLetters);
  }
  if (includeNums) {
    selectedChars.push(numChar);
  }
  if (includeSpecial) {
    selectedChars.push(specialChar);
  }
// Generating Password
  var outputPassword = "";
  for (var i = 0; i < keyLength; i++) {
    var randomCharSetIndex = Math.floor(Math.random() * selectedChars.length);
    var charSet = selectedChars[randomCharSetIndex];
    var randomCharIndex = Math.floor(Math.random() * charSet.length);
    var randomChar = charSet[randomCharIndex];
    outputPassword += randomChar;
  }
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(generatePassword()) });
