// Assignment Code
var lowerLetters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","V"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var symbols = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","[","{","]","}","|", "/", ",",".","<",">","~"]
var generateBtn = document.querySelector("#generate");
var availablePassword= []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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
function askLower(){
  lower = prompt("Would you like to include lower case letters in your password? yes or no").toLowerCase();
  console.log(lower);
  if((lower !== "yes") && (lower !== "no")){
    console.log("Please enter yes or no")
    askLower();
  }
  else if (lower === "yes"){
    availablePassword = lowerLetters.concat();
    askUpper();
  }
  else{
    askUpper();
  }
}

askCharacters();