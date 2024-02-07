let name = prompt('Введите имя:');
let birthYear = prompt('Введите год рождения:');
let age = new Date().getFullYear() - birthYear;

alert(${name}: ${age});