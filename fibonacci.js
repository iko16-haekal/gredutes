const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= parseInt(number); i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

rl.question("input number: ", function (number) {
  fibonacci(number);
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
