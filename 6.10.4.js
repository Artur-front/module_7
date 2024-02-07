const name = "игорь";
const yearOfBirth = 2000;
const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirth;
const lastDigit = age % 10;

let output = name + ": ";

if (lastDigit === 1) {
  output += age + " год";
} else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
  output += age + " года";
} else {
  output += age + " лет";
}

alert(output);