const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(string) {
  ///will return true or false
  return string === string.split("").reverse().join("");
}

rl.question(
  "input string to check if a string is a palindrome: ",
  function (string) {
    console.log(isPalindrome(string));
    rl.close();
  }
);

rl.on("close", function () {
  process.exit(0);
});
