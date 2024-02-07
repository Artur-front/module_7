const userInput = prompt("Введите любое число: ");
const number = Number(userInput);

const array = [];
for (let i = 0; i <= number; i++) {
  array.push(i);
}

console.log(array);