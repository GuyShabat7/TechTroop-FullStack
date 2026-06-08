const prompt = require('prompt-sync')();

const questions = [
    { question: "What is the capital of Ivory Coast?", answer: "Yamoussoukro" },
  { question: "What is the southernmost state in Australia?", answer: "Tasmania" },
  { question: "What is the last name of Prime Minister of Iceland?", answer: "Frostadottir" }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    console.log(`Question ${i + 1}: ${questions[i].question}`);

    const userAnswer = prompt("Your answer: ");

    if (userAnswer.trim().toLowerCase() === questions[i].answer.toLowerCase()) {
        console.log("Correct\n");
        score++;
    } else {
        console.log(`Wrong, the correct answer is: ${questions[i].answer}\n`);
    }
}

console.log(`Final Score: ${score}/${questions.length} correct.`)

