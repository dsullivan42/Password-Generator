// Assignment Code
var generateBtn = document.querySelector("#generate");
// array containing all possible lower case letters
var lowerLetters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// array containing all possible upper case letters
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//array containing all possible numbers
var numbers = [1,2,3,4,5,6,7,8,9,0]
//array containing all possible symbols
var symbols = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}","|", "/", ",",".","<",">","~"]
//empty array that will be used to store all possible characters that are selected by user
var availablePassword= []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log(password);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// function which asks the amount of characters the user wants in their password
function askCharacters(){
  characters = prompt("How many character's would you like your password to contain? (Please choose a number between 8 and 128");
    console.log(characters);
  if (generateBtn) {
    if((characters > 128) || (characters < 8)) {
      prompt("You must choose a number between 8 and 128");
      askCharacters();
    }
  else{
    askLower();
  }
  }
}
//function asking the user if they want to include lower case letters in their password
function askLower(){
  lower = prompt("Would you like to include lower case letters in your password? yes or no").toLowerCase();
  console.log(lower);
  if((lower !== "yes") && (lower !== "no")){
    console.log("Please enter yes or no");
    askLower();
  }
  else if (lower === "yes"){
    availablePassword = availablePassword.concat(lowerLetters);
    askUpper();
  }
  else{
    askUpper();
  }
}
//function asking the user if they want to include upper case letters in their password
function askUpper(){
  upper = prompt("Would you like to include upper case letters in your password? yes or no").toLowerCase();
  console.log(upper);
  if ((upper !== "yes") && (upper !== "no")){
    console.log("Please enter yes or no");
    askUpper();
  }
  else if (upper === "yes"){
    availablePassword = availablePassword.concat(upperLetters);
    askNumeric()
  }
  else{
    askNumeric();
  }
}
//function asking the user if they want to include numbers in their password
function askNumeric(){
  numeric = prompt("Would you like your password to contain numeric characters? yes or no").toLowerCase();
  console.log(numeric);
  if ((numeric !== "yes") && (numeric !== "no")){
    console.log("Please enter yes or no");
    askNumeric();
  }
  else if (numeric === "yes"){
    availablePassword = availablePassword.concat(numbers);
    askSymbols();
  }
  else{
    askSymbols();
  }
}
//function asking the user if they want to include symbols in their password
function askSymbols(){
  symbolic = prompt("Would you like your password to contain symbol characters? yes or no").toLowerCase();
  console.log(symbolic);
  if((symbolic !== "yes") && (symbolic !== "no")){
    console.log("Please enter yes or no");
    askSymbols();
  }
  else if (symbolic === "yes"){
    availablePassword = availablePassword.concat(symbols);
    generatePassword();
  }
  else {
    generatePassword();
  }
}
//calling the askCharacters function to start the process of asking password criteria
askCharacters();
//function that randomly generates the password based on the user selected criteria using a for loop to loop through the availablePassword array and randomly select characters
function generatePassword(){
  var password = "";
  for (var i=0; i < characters; i++){
    var random = Math.floor(Math.random() *availablePassword.length);
    password +=availablePassword[random];
  }
  return password;
}