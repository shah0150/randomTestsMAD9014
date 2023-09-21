// Case: Grading Students

// You are a teacher, and you want to calculate and grade your students' test scores.

// Here are the grading criteria:

// A score of 90 or above is an 'A.'
// A score between 80 and 89 is a 'B.'
// A score between 70 and 79 is a 'C.'
// A score between 60 and 69 is a 'D.'
// Any score below 60 is an 'F.'

// Your task is to write a JavaScript program that takes a student's score and calculates their grade. Additionally, you want to create a loop to calculate grades for multiple students.

// Array of student scores
let studentScores = [85, 92, 78, 60, 45, 100];

// Function to calculate the grade based on the score
function calculateGrade(score) {
  switch (true) {
    case score >= 90:
      return 'A';
    case score >= 80:
      return 'B';
    case score >= 70:
      return 'C';
    case score >= 60:
      return 'D';
    default:
      return 'F';
  }
}

// Loop through the student scores and calculate grades
for (let i = 0; i < studentScores.length; i++) {
  let score = studentScores[i];
  let grade = calculateGrade(score);
  
  console.log('Student ' + (i + 1) + ': Score = ' + score + ', Grade = ' + grade);
}
