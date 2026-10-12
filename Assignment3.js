
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("Grade:", grade);
        break;
    default:
        console.log("Grade:", grade);
}

let status = score >= 40 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Status:", status);
