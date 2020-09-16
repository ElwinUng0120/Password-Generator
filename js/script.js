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

// Generating password
function generatePassword(){

  //Empty password array
  var password = "";

  //Prompt for password's length
  var length = parseInt(prompt("How long do you want your password?"));
  
  //Checking if lenght input is valid
  if (Number.isNaN(length) || length == 0) {
    alert("Invalid input for length of password.\nPlease retry.");
    return password = "Invalid length input";
  }

  //Prompt for criterias
  var isSpecial = confirm("Do you need special characters?");
  var isUppercase = confirm("Do you need uppercase characters?");
  var isLowercase = confirm("Do you need lowercase characters?");
  var isNumeric = confirm("Do you need numbers?");

  //Generator
  for (var i = 0; i < length; i++){

    //To randomize placement. randomizer = 0 ~ 3
    var randomizer = parseInt(Math.random() * 4);

    //Switch statments in place of if-else statments
    switch (randomizer){
      case 0:
        if (isSpecial) {
          const specialChar = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
          password += specialChar.charAt(parseInt(Math.random() * specialChar.length));
        }
        //In case isSpecial = false and randomizer = 0
        else i--;
        break;
      case 1:
        if (isUppercase) {
          const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          password += upperCase.charAt(parseInt(Math.random() * upperCase.length));
        }
        //In case isUppercase = false and randomizer = 1
        else i--;
        break;
      case 2:
        if (isLowercase) {
          const lowerCase = "abcdefghijklmnopqrstuvwxyz";
          password += lowerCase.charAt(parseInt(Math.random() * lowerCase.length));
         }
         //In case isLowercase = false and randomizer = 2
         else i--;
         break;
      case 3:
        if (isNumeric) {
          const numbers = "0123456789";
          password += numbers.charAt(parseInt(Math.random() * numbers.length));
        }
        //In case isNumeric = false and randomizer = 3
        else i--;
        break;
      //In case no criterias were selected
      default:
        alert("You didn't select any criterias.\nMoving to default.");
        return password.padStart(parseInt(length), '0');
    }
  }
  //Return the generated password
  return password;
}
