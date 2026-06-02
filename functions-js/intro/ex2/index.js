const printOods = function(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            console.log(numbers[i]);
        }
    }
};


printOods([1 , 3, 2,4, 5]);