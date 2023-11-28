// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  let numChar = "0123456789"
  let specialChar = "!@#$%^&*()-=+<>?/|':[]{}"

  let keyLength = prompt(
    "Enter desired password length. Must be betweeen a number 8 and 128 characters."
  );
  if (keyLength < 8, keyLength > 128, isNaN(keyLength)) {
      alert("Your input does not match the critera. Please try again");        
      return;
  } 
  else {
  let includeUpper = confirm("Include uppecase letters?");
  let includeLower = confirm("Include lowercase letters?");
  let includeNums = confirm("Include numbers?");
  let includeSpecial = confirm("Include special characters?");
  }

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
  var outputPassword = "";
  for (var i = 0; i < desiredLength; i++) {
    var randomCharSetIndex = Math.floor(Math.random() * selectedChars.length);
    var charSet = selectedChars[randomCharSetIndex];
    var randomCharIndex = Math.floor(Math.random() * charSet.length);
    var randomChar = charSet[randomCharIndex];
    outputPassword += randomChar;
  }
}
//

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
