// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var choiceLength = 0;
var choiceSpecial = 0;
var choiceNumbers = 0;
var choiceLower = 0;
var choiceUpper = 0;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt logic start
var generatePassword = function() {

  // Initialise final variable to return
  var passwordCandidate = [];

  // Ask user how many characters to generate. min:8, max 128.
  choiceLength = window.prompt("How long should the password be?")
  // If user pressed Cancel, immediately end function
  if (!choiceLength) {
    return ("User cancelled the prompt");
  } else if (choiceLength < 8){
    return ("The password should be longer than 8 characters")
  } else if (choiceLength > 128) {
    return ("The password should be shorter than 128 characters")
  }

  // Ask user for first criteria
  choiceSpecial = window.confirm("Does the password require special characters?");

  // Ask user for second criteria
  choiceNumbers = window.confirm("Does the password require numbers?");

  // Ask user for third criteria
  choiceLower = window.confirm("Does the password require lower case alphabet?");

  // Ask user for final criteria
  choiceUpper = window.confirm("Does the password require upper case alphabet?");




  // for loop initialised
  for (let i = 0; i < choiceLength; i++) {
    var randomChar = [];

    if (choiceSpecial) {
      randomChar =  randomChar.concat(specialCharacters);
    }
    if (choiceNumbers) {
      randomChar = randomChar.concat(numericCharacters);
    }
    if (choiceLower) {
      randomChar = randomChar.concat(lowerCasedCharacters);
    }
    if (choiceUpper) {
      randomChar = randomChar.concat(upperCasedCharacters);
    }
    console.log(randomChar);
    var index = Math.floor(Math.random() * randomChar.length);
    var newChar = randomChar[index];
    passwordCandidate = passwordCandidate.concat(newChar);

    // Terminate logic if no char selected
    if (!choiceSpecial && !choiceNumbers && !choiceLower && !choiceUpper) {
      return ("You have not chosen any characters");
    }
  }
  return (passwordCandidate);
}

