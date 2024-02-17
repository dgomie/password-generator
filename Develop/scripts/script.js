// Assignment code here
function generatePassword() {

  
  var numCharacters = prompt("How many characters in your password?");
  console.log(typeof numCharacters);
  console.log(`Input = ${numCharacters}`);

  if (numCharacters === null) { 
  }else {
    while (
    (numCharacters < 8) || 
    (numCharacters > 128) ||
    (isNaN(numCharacters))) {
      numCharacters = window.prompt("Please input a number between 8 and 128");
    }
  }

 

 
   

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
