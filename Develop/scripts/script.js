// Assignment code here
function generatePassword() {

  function randomChoice(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  // Characters object
  var characters = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    symbols: ['~', '!','@', '#', '$', '%', '&', '(', ')','^','-','*', '+'],
}
  var passwordChars = [];
  var newPassword = "";

  // Testing randomChoice function
  // var randomTest = randomChoice(characters.symbols);
  // console.log(randomTest);

  // Ask user for number of characters
  var numChars = prompt("How many characters in your password?");
  
// Validate whether user input is a number, and falls between 8-128 characters. If prompt cancelled, escape function.
  if (numChars === null) { 
    return "Your Secure Password";
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
  
   // Validation if all confirm = false
  if (
    (!lowerChar) &&
    (!upperChar) &&
    (!numericChar) &&
    (!specialChar)) {
      window.alert("No character types selected. Please try again.");
      return "Your Secure Password";
  }
  // Adding random characters to array based on user prompts
  for (let i = numChars; i > 0;) {
    if (lowerChar) {
      passwordChars.push(randomChoice(characters.alphabet));
      i--;
    } 
    if (upperChar) {
      passwordChars.push(randomChoice(characters.alphabet).toUpperCase());
      i--;
    } 
    if (numericChar) {
      passwordChars.push(randomChoice(characters.numbers));
      i--;
    }
    if (specialChar) {
      passwordChars.push(randomChoice(characters.symbols));
      i--;
    }
  }

  // Reduce the password characters down to specified amount because the preceding for loop finishes after specified amount. 
  while (passwordChars.length > numChars) {
    passwordChars.pop();
  }

  // Converting password characters to string  
  for (let i = 0; i < passwordChars.length; i++) {
    newPassword += passwordChars[i]
   }

  // Shuffle string to randomize password
  var shuffledPassword = newPassword.split('').sort(function(){return 0.5-Math.random()}).join('');
  

  return shuffledPassword;

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
