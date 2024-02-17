// Assignment code here
function generatePassword() {

  // Ask user for number of characters
  var numChars = prompt("How many characters in your password?");
  
// Validate whether user input is a number, and falls between 8-128 characters. If prompt cancelled, escape function.
  if (numChars === null) { 
    return;
  }else {
    while (
    (numChars < 8) || 
    (numChars > 128) ||
    (isNaN(numChars))) {
      numChars = window.prompt("Please input a number between 8 and 128");
    }
  }

  // Ask if user wants lower case characters
  var lowerChar = window.confirm("Would you like lower case characters?\n (Click 'OK' for Yes or 'Cancel' for No)");

  // Ask if user wants upper case characters
  var upperChar = window.confirm("Would you like upper case characters?\n (Click 'OK' for Yes or 'Cancel' for No)");

  // Ask if user wants numeric characters
  var numericChar = window.confirm("Would you like numeric characters?\n (Click 'OK' for Yes or 'Cancel' for No)");

  // Ask if user wants special characters
  var specialChar = window.confirm("Would you like special characters?\n (Click 'OK' for Yes or 'Cancel' for No)");

 
   

  var characters = {
    lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    symbols: ['!', '#', '$', '%', '&', '(', ')', '*', '+'],
}
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
