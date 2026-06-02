let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
  console.log("Account created successfully!");
} else {
  if (usernameLength < 5) {
    console.log("Username must be at least 5 characters");
  }
  if (passwordLength < 8) {
    console.log("Password must be at least 8 characters");
  }
  if (userAge < 13) {
    console.log("User must be 13 or older");
  }
}