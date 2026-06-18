function rollDice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fellOfTable = Math.random() < 0.1;

            if (fellOfTable) {
                reject("The dice fell off the table");
            } else {
                const diceRoll = Math.floor(Math.random() * 6) + 1;
                resolve(diceRoll);
            }

        })
    })
}

rollDice()
    .then((result) => {
        document.getElementById("result").textContent = result;
        console.log(result);
    })
    .catch((result) => {
        document.getElementById("result").textContent = result;
        console.log(result);
    })