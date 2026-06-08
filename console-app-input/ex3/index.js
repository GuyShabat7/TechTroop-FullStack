const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const prompts = [
  "Enter your name: ", 
  "Enter your email: ", 
  "Enter your age: ", 
  "Enter your favorite color: "
];
const answers = [];

function askQuestion(index) {
  if (index === prompts.length) {
    console.log("\nRegistration Summary:");
    console.log(`Name: ${answers[0]}`);
    console.log(`Email: ${answers[1]}`);
    console.log(`Age: ${answers[2]}`);
    console.log(`Favorite Color: ${answers[3]}`);
    rl.close();
    return;
  }

  rl.question(prompts[index], (answer) => {
    answers.push(answer);
    askQuestion(index + 1);
  });
}

askQuestion(0);