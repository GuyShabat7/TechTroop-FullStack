for (let i = 100; i <= 999; i++) {
  const hundreds = Math.floor(i / 100);
  const tens = Math.floor((i % 100) / 10);
  const ones = i % 10;

  const sum = Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(ones, 3);

  if (sum === i) {
    console.log(i);
  }
}