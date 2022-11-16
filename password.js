const obfuscate = function(password) {
  // initialize empty string
  password = password.splice(2);
  let newPassword = "";

  // loop through password
  for (let i = 0; i < password[0].length; i++) {

    // if string[i] contains 'a'-> add 4
    if (password[0][i] === "a") newPassword += "4";

    // if string[i] contains 'e' -> add 3
    else if (password[0][i] === "e") newPassword += "3";

    // if string[i] contains 'o' -> add 0
    else if(password[0][i] === "o") newPassword += "0";
    // if string[i] contains 'l' -> add 1
  
    else if(password[0][i] === "l") newPassword += "1";
    // else add string[i]

    else newPassword += password[0][i];
  }
  return newPassword
};

console.log(obfuscate(process.argv));