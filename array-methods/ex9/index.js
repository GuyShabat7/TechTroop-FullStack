let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

const grades = studentScores.reduce((counts, score) => {
    let grade;
    if (score >= 90) {
        grade = 'A';
    } else if (score >=80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    counts[grade] = (counts[grade] || 0) + 1;

    return counts;
}, {});

console.log(grades);